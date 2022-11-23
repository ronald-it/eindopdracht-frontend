import * as React from 'react';
import klokje from "../../assets/icons/time.svg";
import "./Recipepage.css";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

// Declare variables for URI, API ID and API Key
const URI = 'https://api.edamam.com';
const API_ID = '44920bbe';
const API_KEY = 'e0b07558906ed952fb1226ace4bc0227'

export function Recipepage() {
    // Recipe ID
    const { id } = useParams();
    // Declare endpoint variable
    const endpoint = `/api/recipes/v2/${id}`;

    // Initialize useState
    const [recipeInfo, setRecipeInfo] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    // Recipe page info function
    useEffect(() => {
        const fetchDataRecipePage = async () => {
            toggleError(false);
            toggleLoading(true);

            // Try block
            try {
                // Save the response of the request
                const response = await axios.get(`${URI}${endpoint}`, {

                    params: {
                        id: id,
                        type: 'public',
                        app_id: API_ID,
                        app_key: API_KEY,
                    }

                });
                setRecipeInfo(response.data.recipe);

                // Catch block
            } catch (err) {
                toggleError(true);
            }
        }

        fetchDataRecipePage();
        toggleLoading(false);

    }, []);

    return (
        <>

            {error &&
                <span className="recipe-error">
                                    Something went wrong during the retrieval of the data, please refresh the page.
                                </span>
            }

            {loading && <span>Loading...</span>}

            {/*<!--Main-->*/}

            <main className="outer-container-main-recipe">
                <div className="inner-container-main-recipe" id="inner-container-main-recipe">

                    {/*<!--Recipe title, preparation time and clock icon-->*/}

                    <div className="title-and-time-image">
                        <h3 className="recipe-name">{recipeInfo.label}</h3>
                        <div className="time-image-div-recipe">
                            <img className="time-image-recipe" src={klokje} alt="time"/>
                                <p className="time-text-recipe-number">{recipeInfo.totalTime} </p>
                                <p className="time-text-recipe-minutes">min.</p>
                        </div>
                    </div>

                    {/*<!--Preparation text and recipe picture-->*/}

                    <div className="recipe-text-and-image">
                        <div className="recipe-instructions">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultrices venenatis mauris in
                                ultrices. Sed nec tristique leo. Praesent luctus elit et pulvinar sagittis. Suspendisse suscipit
                                arcu quis libero rutrum posuere. Aliquam facilisis dapibus nunc, nec aliquet sapien congue at. Morbi
                                tempus massa purus, et ultricies eros egestas at. Phasellus a pharetra nibh, ac imperdiet arcu.
                                Suspendisse sollicitudin laoreet lectus.
                            </p>
                            <br/>
                                <p>
                                    Vivamus ullamcorper ultrices tortor, ut maximus velit facilisis ac. Nullam ac est diam. Nullam eget
                                    sapien eu est volutpat auctor ac posuere neque. Pellentesque condimentum turpis erat, sed elementum
                                    diam sodales vitae. Nullam semper quis nulla eget ullamcorper. Quisque pretium aliquet nunc at
                                    interdum. Pellentesque accumsan magna dignissim, sodales nibh at, condimentum mauris. Donec ac
                                    semper urna. Nam ut neque.
                                </p>
                        </div>
                        <div className="recipe-picture">
                            <img className="recipe-image"
                                 src={recipeInfo.image}
                                 alt={recipeInfo.label}/>
                        </div>
                    </div>

                    {/*<!--Ingredients and nutritional values-->*/}

                    <div className="recipe-ingredients-and-nutrients">
                        <div className="recipe-ingredients">
                            <h4 className="recipe-ingredients-title">Ingredients</h4>
                            <br/>
                                <ul className="ingredients-ul">
                                    {Object.keys(recipeInfo).length > 0 && recipeInfo.ingredients.map((ingredient) => {
                                        return <li key={ingredient.text}>{ingredient.text}</li>
                                    })}
                                </ul>
                        </div>
                        <div className="recipe-nutrients">
                            <h4 className="recipe-nutrients-title">Nutrients</h4>
                            <div className="recipe-nutrients-table">
                                {Object.keys(recipeInfo).length > 0 && <table>
                                    <thead>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Energy</td>
                                        <td>{Math.round(recipeInfo.totalNutrients.ENERC_KCAL.quantity)}</td>
                                        <td>kcal</td>
                                    </tr>
                                    <tr>
                                        <td>Fat</td>
                                        <td>{Math.round(recipeInfo.totalNutrients.FAT.quantity)}</td>
                                        <td>g</td>
                                    </tr>
                                    <tr>
                                        <td>Carbs</td>
                                        <td>{Math.round(recipeInfo.totalNutrients.CHOCDF.quantity)}</td>
                                        <td>g</td>
                                    </tr>
                                    <tr>
                                        <td>Sugar</td>
                                        <td>{Math.round(recipeInfo.totalNutrients.SUGAR.quantity)}</td>
                                        <td>g</td>
                                    </tr>
                                    <tr>
                                        <td>Protein</td>
                                        <td>{Math.round(recipeInfo.totalNutrients.PROCNT.quantity)}</td>
                                        <td>g</td>
                                    </tr>
                                    <tr>
                                        <td>Sodium</td>
                                        <td>{Math.round(recipeInfo.totalNutrients.NA.quantity)}</td>
                                        <td>mg</td>
                                    </tr>
                                    </tbody>
                                </table>}
                            </div>
                        </div>
                    </div>

                    {/*<!--Health labels-->*/}

                    <div className="recipe-health-labels-div">
                        <h4 className="recipe-health-labels-title">Health labels</h4>
                        <div className="recipe-health-labels">
                            {Object.keys(recipeInfo).length > 0 && recipeInfo.healthLabels.map((healthLabel) => {
                                return <p key={healthLabel}>{healthLabel}</p>
                            })}
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}