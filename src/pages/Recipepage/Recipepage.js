import * as React from 'react';
import klokje from "../../assets/icons/time.svg";
import "./Recipepage.css";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export function Recipepage() {
    //Recept ID
    const { id } = useParams();
    console.log(id);

    //Opslaan van URI en endpoint
    const URI = 'https://api.edamam.com';
    const endpoint = `/api/recipes/v2/${id}`;
    const API_ID = '44920bbe';
    const API_KEY = 'e0b07558906ed952fb1226ace4bc0227'

    //Initialiseren van useState
    const [recipeInfo, setRecipeInfo] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        //... voer dingen uit
        const fetchDataRecipePage = async () => {
            toggleError(false);
            toggleLoading(true);

            // Try block
            try {
                // Response van request opslaan
                const response = await axios.get(`${URI}${endpoint}`, {

                    params: {
                        id: id,
                        type: 'public',
                        app_id: API_ID,
                        app_key: API_KEY,
                    }

                });
                console.log(response.data.recipe);
                setRecipeInfo(response.data.recipe);

                // Catch block
            } catch (err) {
                console.error(err)
                toggleError(true);
            }
        }

        fetchDataRecipePage();
        toggleLoading(false);

    }, []);

    return (
        <>

            {/*<!--Main-->*/}

            <main className="outer-container-main-recipe">
                <div className="inner-container-main-recipe" id="inner-container-main-recipe">

                    {/*<!--Recept titel, bereidingsduur en klok icon-->*/}

                    <div className="title-and-time-image">
                        <h3 className="recipe-name">Recipe Name Here</h3>
                        <div className="time-image-div-recipe">
                            <img className="time-image-recipe" src={klokje} alt="time"/>
                                <p className="time-text-recipe-number">20 </p>
                                <p className="time-text-recipe-minutes">min.</p>
                        </div>
                    </div>

                    {/*<!--Tekst bereidingswijze en afbeelding recept-->*/}

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
                                 src="https://www.giallozafferano.com/images/228-22832/spaghetti-with-tomato-sauce_1200x800.jpg"
                                 alt="spaghetti"/>
                        </div>
                    </div>

                    {/*<!--Ingrediënten en voedingswaarden-->*/}

                    <div className="recipe-ingredients-and-nutrients">
                        <div className="recipe-ingredients">
                            <h4 className="recipe-ingredients-title">Ingredients</h4>
                            <br/>
                                <ul className="ingredients-ul">
                                    <li>1/4 Pellentesque condimentum quam</li>
                                    <li>1 Phasellus sit amet</li>
                                    <li>1 In posuere nisi</li>
                                    <li>1/2 Nunc mattis mauris id massa</li>
                                    <li>4 Pellentesque condimentum quam</li>
                                    <li>1 Ut malesuada diam</li>
                                    <li>1/4 Phasellus efficitur</li>
                                    <li>2 Cras non elit id ipsum fermentum</li>
                                </ul>
                        </div>
                        <div className="recipe-nutrients">
                            <h4 className="recipe-nutrients-title">Nutrients</h4>
                            <div className="recipe-nutrients-table">
                                <table>
                                    <thead>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Energy</td>
                                        <td>1080</td>
                                        <td>kcal</td>
                                    </tr>
                                    <tr>
                                        <td>Fat</td>
                                        <td>80</td>
                                        <td>g</td>
                                    </tr>
                                    <tr>
                                        <td>Carbs</td>
                                        <td>56</td>
                                        <td>g</td>
                                    </tr>
                                    <tr>
                                        <td>Sugar</td>
                                        <td>20</td>
                                        <td>g</td>
                                    </tr>
                                    <tr>
                                        <td>Protein</td>
                                        <td>15</td>
                                        <td>g</td>
                                    </tr>
                                    <tr>
                                        <td>Sodium</td>
                                        <td>1900</td>
                                        <td>mg</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/*<!--Health labels-->*/}

                    <div className="recipe-health-labels-div">
                        <h4 className="recipe-health-labels-title">Health labels</h4>
                        <div className="recipe-health-labels">
                            <p>Peanut-Free</p>
                            <p>Kidney-Friendly</p>
                            <p>Egg-Free</p>
                            <p>Peanut-Free</p>
                            <p>Soy-Free</p>
                            <p>Fish Free</p>
                            <p>Shellfish-Free</p>
                            <p>Tree-Nut-Free</p>
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}