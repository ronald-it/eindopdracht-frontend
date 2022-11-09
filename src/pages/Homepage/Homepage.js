import * as React from 'react';
import './Homepage.css';
import {HashLink} from "react-router-hash-link";
import klokje from "../../assets/icons/time.svg";
import {Link} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import magnifier from "../../assets/icons/search.png"

export function Homepage() {
    //Opslaan van URI en endpoint
    const URI = 'https://api.edamam.com';
    const endpoint = '/api/recipes/v2';
    const API_ID = '44920bbe';
    const API_KEY = 'e0b07558906ed952fb1226ace4bc0227'

    //Initialiseren van useState

    const [ingredient, setIngredient] = useState('');
    const [mealType, setMealType] = useState('');
    const [cuisine, setCuisine] = useState('');
    const [diet, setDiet] = useState('');
    const [time, setTime] = useState('');

    const [recipes, setRecipes] = useState([]);
    const [carousel, setCarousel] = useState([]);

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const [errorCarousel, toggleErrorCarousel] = useState(false);
    const [loadingCarousel, toggleLoadingCarousel] = useState(false);

    const [randomizer, setRandomizer] = useState(0)

    //Gebruik van setRandomizer voor de creatie van een getal in de Randomizer state
    useEffect(() => {
        setRandomizer(Math.round(Math.random() * 17));
    }, []);

    const fetchDataHome = async (ingredient, mealType, cuisineType, diet, time) => {
        toggleError(false);
        toggleLoading(true);

        // Try block
        try {
            // Response van request opslaan
            const response = await axios.get(`${URI}${endpoint}`, {
                params: {
                    type: 'public',
                    app_id: API_ID,
                    app_key: API_KEY,
                    q: ingredient,
                    mealType: mealType ? mealType : null,
                    cuisineType: cuisineType ? cuisineType : null,
                    diet: diet ? diet : null,
                    time: time ? time : null,
                }
            });
            // console.log(response.data.hits);
            // Create Elements functie aanroepen en parameters toevoegen
            // createRecipeCardHome(response.data.hits);

            setRecipes(response.data.hits);
            console.log(response.data.hits);

            // Catch block
        } catch (err) {
            console.error(err)
            toggleError(true);
        }

        toggleLoading(false);
    }

    useEffect(() => {
        //... voer dingen uit
        const fetchDataCarousel = async () => {
            toggleErrorCarousel(false);
            toggleLoadingCarousel(true);

            // Try block
            try {
                // Response van request opslaan
                const response = await axios.get(`${URI}${endpoint}`, {

                    params: {
                        type: 'public',
                        app_id: API_ID,
                        app_key: API_KEY,
                        q: "potato"
                    }

                });
                console.log(response.data.hits);
                setCarousel(response.data.hits);

                // Catch block
            } catch (err) {
                console.error(err)
                toggleErrorCarousel(true);
            }
        }

        fetchDataCarousel();
        toggleLoadingCarousel(false);

    }, []);

    return (
        <>

            {/*<!--Header-->*/}

            <header className="outer-container-header">
                <div className="inner-container-header">
                    <div className="hero-image-outer-container">
                        <div className="hero-image-inner-container">
                            <h1 className="line-header-one">Delicious Recipes.</h1>
                            <h3 className="line-header-two">Daily Updated.</h3>
                            <button type="button">
                                <HashLink to="#outer-container-carousel-id">Find Recipes</HashLink>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/*<!--Main-->*/}

            <main className="outer-container-main">
                <div className="inner-container-main">

                    {/*<!--        Carousel-->*/}

                    <div className="outer-container-carousel" id="outer-container-carousel-id">
                        <div className="inner-container-carousel" id="inner-container-carousel-id">

                            {loadingCarousel && <span>Loading...</span>}

                            {Object.keys(carousel).length > 0 &&
                                <>
                                    <Link to={`/recipe/${carousel[randomizer].recipe.uri.split("_")[1]}`} id="recipe-link">
                                        <div className="carousel-card-one">
                                            <img className="carousel-card-image-one"
                                                 src={`${carousel[randomizer].recipe.image}`}
                                                 alt="Food"/>
                                            <br/>
                                            <div className="recipe-title-one">
                                                <p>{carousel[randomizer].recipe.label}</p>
                                            </div>
                                            <br/>
                                            <div className="calories-ingredients-time-one">
                                                <div className="calories-ingredients-div">
                                                    <p className="calories-number">{Math.round(carousel[randomizer].recipe.calories)}</p>
                                                    <p className="calories-text">Calories |</p>
                                                    <p className="ingredients-number">{carousel[randomizer].recipe.ingredients.length}</p>
                                                    <p className="ingredients-text">Ingredients</p>
                                                </div>
                                                <div className="time-image-div">
                                                    <img className="time-image" src={klokje} alt="time"/>
                                                    <p className="time-text">{carousel[randomizer].recipe.totalTime} min.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to={`/recipe/${carousel[randomizer+1].recipe.uri.split("_")[1]}`} id="recipe-link">
                                        <div className="carousel-card-two">
                                            <img className="carousel-card-image-two"
                                                 src={`${carousel[randomizer+1].recipe.image}`}
                                                 alt="Food"/>
                                            <br/>
                                            <div className="recipe-title-two">
                                                <p>{carousel[randomizer+1].recipe.label}</p>
                                            </div>
                                            <br/>
                                            <div className="calories-ingredients-time-two">
                                                <div className="calories-ingredients-div">
                                                    <p className="calories-number">{Math.round(carousel[randomizer+1].recipe.calories)}</p>
                                                    <p className="calories-text">Calories |</p>
                                                    <p className="ingredients-number">{carousel[randomizer+1].recipe.ingredients.length}</p>
                                                    <p className="ingredients-text">Ingredients</p>
                                                </div>
                                                <div className="time-image-div">
                                                    <img className="time-image" src={klokje} alt="time"/>
                                                    <p className="time-text">{carousel[randomizer+1].recipe.totalTime} min.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to={`/recipe/${carousel[randomizer+2].recipe.uri.split("_")[1]}`} id="recipe-link">
                                        <div className="carousel-card-three">
                                            <img className="carousel-card-image-three"
                                                 src={`${carousel[randomizer+2].recipe.image}`}
                                                 alt="Food"/>
                                            <br/>
                                            <div className="recipe-title-three">
                                                <p>{carousel[randomizer+2].recipe.label}</p>
                                            </div>
                                            <br/>
                                            <div className="calories-ingredients-time-three">
                                                <div className="calories-ingredients-div">
                                                    <p className="calories-number">{Math.round(carousel[randomizer+2].recipe.calories)}</p>
                                                    <p className="calories-text">Calories |</p>
                                                    <p className="ingredients-number">{carousel[randomizer+2].recipe.ingredients.length}</p>
                                                    <p className="ingredients-text">Ingredients</p>
                                                </div>
                                                <div className="time-image-div">
                                                    <img className="time-image" src={klokje} alt="time"/>
                                                    <p className="time-text">{carousel[randomizer+2].recipe.totalTime} min.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </>
                            }
                        </div>
                    </div>

                    {/*<!--        Searchbar-->*/}

                    <div className="outer-container-searchbar">
                        <div className="inner-container-searchbar">
                            <form id="submit-form" onSubmit={(e) => {
                                e.preventDefault();
                                fetchDataHome(ingredient, mealType, cuisine, diet, time);
                            }
                            }>
                                <label htmlFor="search-bar">
                                    <input className="search-bar-input" type="text" placeholder="Recipe search"
                                           id="search-bar" name="recipe" value={ingredient}
                                           onChange={(e) => setIngredient(e.target.value)}/>
                                </label>
                                <button id="magnifying-glass" type="button">
                                    <img className="search-icon" src={magnifier} alt="search icon"/>
                                </button>
                                <label htmlFor="meals"></label>
                                <select name="meals" id="meals" value={mealType}
                                        onChange={(e) => setMealType(e.target.value)}>
                                    <option value="">Meal type</option>
                                    <option value="breakfast">Breakfast</option>
                                    <option value="brunch">Brunch</option>
                                    <option value="lunch">Lunch</option>
                                    <option value="dinner">Dinner</option>
                                    <option value="snack">Snack</option>
                                    <option value="teatime">Tea time</option>
                                </select>
                                <label htmlFor="cuisine"></label>
                                <select name="cuisine" id="cuisine" value={cuisine}
                                        onChange={(e) => setCuisine(e.target.value)}>
                                    <option value="">Cuisine</option>
                                    <option value="american">American</option>
                                    <option value="asian">Asian</option>
                                    <option value="british">British</option>
                                    <option value="caribbean">Caribbean</option>
                                    <option value="central europe">Central Europe</option>
                                    <option value="chinese">Chinese</option>
                                    <option value="eastern europe">Eastern Europe</option>
                                    <option value="french">French</option>
                                    <option value="greek">Greek</option>
                                    <option value="indian">Indian</option>
                                    <option value="italian">Italian</option>
                                    <option value="japanese">Japanese</option>
                                    <option value="korean">Korean</option>
                                    <option value="kosher">Kosher</option>
                                    <option value="mediterranean">Mediterranean</option>
                                    <option value="mexican">Mexican</option>
                                    <option value="middle eastern">Middle Eastern</option>
                                    <option value="nordic">Nordic</option>
                                    <option value="south american">South American</option>
                                    <option value="south east asian">South East Asian</option>
                                    <option value="world">World</option>
                                </select>
                                <label htmlFor="diet"></label>
                                <select name="diet" id="diet" value={diet} onChange={(e) => setDiet(e.target.value)}>
                                    <option value="">Diet</option>
                                    <option value="balanced">Balanced</option>
                                    <option value="high-fiber">High-Fiber</option>
                                    <option value="high-protein">High-Protein</option>
                                    <option value="low-carb">Low-Carb</option>
                                    <option value="low-fat">Low-Fat</option>
                                    <option value="low-sodium">Low-Sodium</option>
                                </select>
                                <label htmlFor="time"></label>
                                <select name="time" id="time" value={time} onChange={(e) => setTime(e.target.value)}>
                                    <option value="">Time</option>
                                    <option value="0-15">0 - 15</option>
                                    <option value="15-30">15-30</option>
                                    <option value="30-60">30-60</option>
                                    <option value="60+">60 or more</option>
                                </select>
                                <button type="submit" id="search-button">Search</button>
                            </form>
                        </div>
                    </div>

                    {/*<!--        Search results-->*/}

                    <div className="outer-container-search-results">
                        <div id="inner-container-search-results" className="inner-container-search-results">

                            {error &&
                                <span className="ingredient-error">
                                    Er is iets misgegaan met het ophalen van de data, probeer het opnieuw.
                                </span>
                            }

                            {loading && <span>Loading...</span>}

                            {Object.keys(recipes).length > 0 && recipes.map((entry) => {
                                return <Link to={`/recipe/${entry.recipe.uri.split("_")[1]}`} id="recipe-link"
                                             key={entry.recipe.uri.split("_")[1]}>
                                    <div className="carousel-card-result">
                                        <img className="carousel-card-image-result"
                                             src={entry.recipe.image}
                                             alt="Recipe"/>
                                        <br/>
                                        <div className="recipe-title-result">
                                            <p>{entry.recipe.label}</p>
                                        </div>
                                        <br/>
                                        <div className="calories-ingredients-time-result">
                                            <div className="calories-ingredients-div-result">
                                                <p className="calories-number-result">{Math.round(entry.recipe.calories)}</p>
                                                <p className="calories-text-result">Calories | </p>
                                                <p className="ingredients-number-result">{entry.recipe.ingredients.length}</p>
                                                <p className="ingredients-text-result">Ingredients</p>
                                            </div>
                                            <div className="time-image-div-result">
                                                <img className="time-image-result" src={klokje} alt="time"/>
                                                <p className="time-text-result">{entry.recipe.totalTime} min.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            })}

                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}