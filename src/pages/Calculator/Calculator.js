import * as React from 'react';
import './Calculator.css';
import magnifier from '../../assets/icons/search.png';

export function Calculator() {
    return (
        <>
            {/*Main*/}
            <main className="outer-container-main-calculator">
                <div className="inner-container-main-calculator">
                    <h3 className="calorie-calculator-title">Calorie Calculator</h3>

                    {/*Searchbar calculator*/}

                    <div className="search-bar-div-calculator">
                        <form id="submit-form-calculator-search">
                            <label htmlFor="search-bar-calculator">
                                <input className="search-bar-input-calculator" type="text"
                                       placeholder="Barcode / product"
                                       minLength="1" id="search-bar-calculator" name="barcode-or-product"/>
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
                            </tbody>
                        </table>
                    </div>

                    {/*Portie grootte input veld*/}

                    <div className="amount-div-calculator">
                        <form id="submit-form-calculator-add">
                            <label htmlFor="amount-calculator">Amount
                                <input className="amount-input-calculator" type="text"
                                       minLength="1" id="amount-calculator" name="amount-of-product"/>
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