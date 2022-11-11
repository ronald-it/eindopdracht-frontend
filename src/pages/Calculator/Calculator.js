import * as React from 'react';
import './Calculator.css';
import magnifier from '../../assets/icons/search.png';
import {useEffect, useState} from "react";
import axios from "axios";

export function Calculator() {

    //Opslaan van URI en endpoint
    const URI = 'https://api.edamam.com';
    const endpoint = '/api/food-database/v2/parser';
    const API_ID = 'ec73a27a';
    const API_KEY = '270cc5a42e9022d3b8f92f30feed3e6e';

    //Initialiseren van useState
    const [foodInput, setFoodInput] = useState('');

    const [foods, setFoods] = useState([]);

    const [foodCalculator, setFoodCalculator] = useState([]);

    const [servingSize, setServingSize] = useState(0);

    const [totalCalories, setTotalCalories] = useState(0);
    const [totalFat, setTotalFat] = useState(0);
    const [totalCarbs, setTotalCarbs] = useState(0);

    // Fetch data functie om de gegeven op te halen voor de eerste tabel op calculator page
    const fetchDataCalculatorSearch = async (product) => {

        // Try block

        try {
            // Response van request opslaan
            const response = await axios.get(`${URI}${endpoint}`, {
                params: {
                    type: 'public',
                    app_id: API_ID,
                    app_key: API_KEY,
                    ingr: product
                    // upc: product ? product : null
                }
            });
            console.log(response);
            setFoods([...foods, response.data.parsed[0].food]);

            // Catch block
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        console.log(foodCalculator)
        //... voer dingen uit
        foodCalculator.map((array) => {
            array[0].map((entry) => {
                return console.log(entry.nutrients.ENERC_KCAL)
            })
        })

        foodCalculator.map((array) => {
            console.log(array[1])
            array[0].map((entry) => {
                return console.log(entry.nutrients.FAT)
            })
        })

        foodCalculator.map((array) => {
            array[0].map((entry) => {
                return console.log(entry.nutrients.CHOCDF)
            })
        })


    }, [foodCalculator]);

    useEffect(() => {
        console.log(totalCalories)
        //... voer dingen uit
    }, [totalCalories]);

    return (
        <>
            {/*Main*/}
            <main className="outer-container-main-calculator">
                <div className="inner-container-main-calculator">
                    <h3 className="calorie-calculator-title">Calorie Calculator</h3>

                    {/*Searchbar calculator*/}

                    <div className="search-bar-div-calculator">
                        <form
                            id="submit-form-calculator-search"
                            onSubmit={(e) => {
                                e.preventDefault();
                                fetchDataCalculatorSearch(foodInput);
                            }
                            }
                        >
                            <label htmlFor="search-bar-calculator">
                                <input className="search-bar-input-calculator"
                                       type="text"
                                       placeholder="Barcode / product"
                                       minLength="1"
                                       id="search-bar-calculator"
                                       name="barcode-or-product"
                                       value={foodInput}
                                       onChange={(e) => setFoodInput(e.target.value)}
                                />
                            </label>
                            <button id="magnifying-glass-calculator" type="button">
                                <img className="search-icon-calculator" src={magnifier} alt="search icon"/>
                            </button>
                            <button id="search-button-calculator" type="submit">Search 🡢</button>
                        </form>
                    </div>

                    {/*Eerste tabel calculator page*/}

                    <div className="calorie-calculator-product-table-div" id="calorie-calculator-product-table-div">
                        <table className="calorie-calculator-product-table">
                            <thead>
                            </thead>
                            <tbody id="tbody-table">
                            <tr className="row-one-product">
                                <td>Product</td>
                                <td>Quantity</td>
                                <td>Label</td>
                            </tr>
                            {foods.length > 0 && foods.map((entry) => {
                                return <tr key={entry.foodId} className="row-two-product">
                                    <td>{entry.label}</td>
                                    <td>100</td>
                                    <td>Gram</td>
                                </tr>
                            })}
                            </tbody>
                        </table>
                    </div>

                    {/*Portie grootte input veld*/}

                    <div className="amount-div-calculator">
                        <form
                            id="submit-form-calculator-add"
                            onSubmit={(e) => {
                                e.preventDefault();

                                setTotalCalories(0);
                                setTotalFat(0);
                                setTotalCarbs(0);

                                setFoodCalculator([...foodCalculator, [foods, servingSize]]);

                                foodCalculator.map((array) => {
                                    array[0].map((entry) => {
                                        setTotalCalories(...totalCalories, entry.nutrients.ENERC_KCAL * array[1])
                                    })
                                })

                                foodCalculator.map((array) => {
                                    array[0].map((entry) => {
                                        setTotalFat(...totalFat, entry.nutrients.FAT * array[1])
                                    })
                                })

                                foodCalculator.map((array) => {
                                    array[0].map((entry) => {
                                        setTotalCarbs(...totalCarbs, entry.nutrients.CHOCDF * array[1])
                                    })
                                })

                                setFoods([]);
                            }}
                        >
                            <label htmlFor="amount-calculator">Amount
                                <input
                                    className="amount-input-calculator"
                                    type="text"
                                    minLength="1"
                                    id="amount-calculator"
                                    name="amount-of-product"
                                    value={servingSize}
                                    onChange={(e) => setServingSize(e.target.value)}
                                />
                            </label>
                            <label htmlFor="add-button-calculator">Serving(s)
                                <button id="add-button-calculator" type="submit">
                                    + Add
                                </button>
                            </label>
                        </form>
                    </div>

                    {/*Calculator tabel*/}

                    <div className="calorie-calculator-calculation-table-div">
                        <table className="calorie-calculator-calculation-table">
                            <tbody id="tbody-add-table">
                            <tr className="row-one-calculation">
                                <td>Product</td>
                                <td>Calories</td>
                                <td>Fat</td>
                                <td>Carbs</td>
                            </tr>
                            {foodCalculator.length > 0 &&
                                foodCalculator.map((array) => {
                                    return array[0].map((entry) => {
                                        return <tr key={entry.foodId} className="row-two-calculation">
                                            <td>{entry.label}</td>
                                            <td>{Math.round(entry.nutrients.ENERC_KCAL) * array[1]}</td>
                                            <td>{Math.round(entry.nutrients.FAT) * array[1]}</td>
                                            <td>{Math.round(entry.nutrients.CHOCDF) * array[1]}</td>
                                        </tr>
                                    })
                                })
                            }
                            {foodCalculator.length > 0 && <tr id="total-row">
                                <td>Total</td>
                                <td>X</td>
                                <td>X</td>
                                <td>X</td>
                            </tr>}
                            </tbody>
                        </table>
                    </div>
                    <div className="calorie-calculator-calculation-table-div-total">
                        <table className="calorie-calculator-calculation-table-total">
                            <tbody id="tbody-add-table-total">
                            <tr id="total-row">
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </>
    );
}