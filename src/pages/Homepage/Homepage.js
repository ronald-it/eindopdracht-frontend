import * as React from 'react';
import './Homepage.css';
import {HashLink} from "react-router-hash-link";
import klokje from "../../assets/icons/time.svg";
import {Link} from "react-router-dom";

export function Homepage() {
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

                            <Link id="recipe-link" to="/recipe">
                                <div className="carousel-card-one">
                                    <img className="carousel-card-image-one"
                                         src="https://www.oetker.nl/Recipe/Recipes/oetker.nl/nl-nl/miscellaneous/image-thumb__97330__RecipeDetail/pizza-caprese.webp"
                                         alt="Food"/>
                                    <br/>
                                    <div className="recipe-title-one">
                                        <p>Recipe name</p>
                                    </div>
                                    <br/>
                                    <div className="calories-ingredients-time-one">
                                        <div className="calories-ingredients-div">
                                            <p className="calories-number">100</p>
                                            <p className="calories-text">Calories |</p>
                                            <p className="ingredients-number">5</p>
                                            <p className="ingredients-text">Ingredients</p>
                                        </div>
                                        <div className="time-image-div">
                                            <img className="time-image" src={klokje} alt="time"/>
                                            <p className="time-text">20 min.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link id="recipe-link" to="/recipe">
                                <div className="carousel-card-two">
                                    <img className="carousel-card-image-two"
                                         src="https://www.oetker.nl/Recipe/Recipes/oetker.nl/nl-nl/miscellaneous/image-thumb__97330__RecipeDetail/pizza-caprese.webp"
                                         alt="Food"/>
                                    <br/>
                                    <div className="recipe-title-two">
                                        <p>Recipe name</p>
                                    </div>
                                    <br/>
                                    <div className="calories-ingredients-time-two">
                                        <div className="calories-ingredients-div">
                                            <p className="calories-number">100</p>
                                            <p className="calories-text">Calories |</p>
                                            <p className="ingredients-number">5</p>
                                            <p className="ingredients-text">Ingredients</p>
                                        </div>
                                        <div className="time-image-div">
                                            <img className="time-image" src={klokje} alt="time"/>
                                            <p className="time-text">20 min.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link id="recipe-link" to="/recipe">
                                <div className="carousel-card-three">
                                    <img className="carousel-card-image-three"
                                         src="https://www.oetker.nl/Recipe/Recipes/oetker.nl/nl-nl/miscellaneous/image-thumb__97330__RecipeDetail/pizza-caprese.webp"
                                         alt="Food"/>
                                    <br/>
                                    <div className="recipe-title-three">
                                        <p>Recipe name</p>
                                    </div>
                                    <br/>
                                    <div className="calories-ingredients-time-three">
                                        <div className="calories-ingredients-div">
                                            <p className="calories-number">100</p>
                                            <p className="calories-text">Calories |</p>
                                            <p className="ingredients-number">5</p>
                                            <p className="ingredients-text">Ingredients</p>
                                        </div>
                                        <div className="time-image-div">
                                            <img className="time-image" src={klokje} alt="time"/>
                                            <p className="time-text">20 min.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>
                    {/*<!--        Searchbar-->*/}

                    <div className="outer-container-searchbar">
                        <div className="inner-container-searchbar">
                            <form id="submit-form">
                                <label htmlFor="search-bar">
                                    <input className="search-bar-input" type="text" placeholder="Recipe search"
                                           id="search-bar" name="recipe"/>
                                </label>
                                <button id="magnifying-glass" type="button">
                                    {/*<img class="search-icon" src="assets/icons/search.png" alt="search icon">*/}
                                </button>
                                <label htmlFor="meals"></label>
                                <select name="meals" id="meals">
                                    <option value="">Meal type</option>
                                    <option value="breakfast">Breakfast</option>
                                    <option value="brunch">Brunch</option>
                                    <option value="lunch">Lunch</option>
                                    <option value="dinner">Dinner</option>
                                    <option value="snack">Snack</option>
                                    <option value="teatime">Tea time</option>
                                </select>
                                <label htmlFor="cuisine"></label>
                                <select name="cuisine" id="cuisine">
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
                                <select name="diet" id="diet">
                                    <option value="">Diet</option>
                                    <option value="balanced">Balanced</option>
                                    <option value="high-fiber">High-Fiber</option>
                                    <option value="high-protein">High-Protein</option>
                                    <option value="low-carb">Low-Carb</option>
                                    <option value="low-fat">Low-Fat</option>
                                    <option value="low-sodium">Low-Sodium</option>
                                </select>
                                <label htmlFor="time"></label>
                                <select name="time" id="time">
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

                            <Link id="recipe-link" to="/recipe">
                                <div className="carousel-card-result">
                                    <img className="carousel-card-image-result"
                                         src="https://www.oetker.nl/Recipe/Recipes/oetker.nl/nl-nl/miscellaneous/image-thumb__97330__RecipeDetail/pizza-caprese.webp"
                                         alt="Recipe"/>
                                    <br/>
                                    <div className="recipe-title-result">
                                        <p>Recipe name</p>
                                    </div>
                                    <br/>
                                    <div className="calories-ingredients-time-result">
                                        <div className="calories-ingredients-div-result">
                                            <p className="calories-number-result">500</p>
                                            <p className="calories-text-result">Calories | </p>
                                            <p className="ingredients-number-result">5</p>
                                            <p className="ingredients-text-result">Ingredients</p>
                                        </div>
                                        <div className="time-image-div-result">
                                            <img className="time-image-result" src={klokje} alt="time"/>
                                                <p className="time-text-result">30 min.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link id="recipe-link" to="/recipe">
                                <div className="carousel-card-result">
                                    <img className="carousel-card-image-result"
                                         src="https://www.oetker.nl/Recipe/Recipes/oetker.nl/nl-nl/miscellaneous/image-thumb__97330__RecipeDetail/pizza-caprese.webp"
                                         alt="Recipe"/>
                                    <br/>
                                    <div className="recipe-title-result">
                                        <p>Recipe name</p>
                                    </div>
                                    <br/>
                                    <div className="calories-ingredients-time-result">
                                        <div className="calories-ingredients-div-result">
                                            <p className="calories-number-result">500</p>
                                            <p className="calories-text-result">Calories | </p>
                                            <p className="ingredients-number-result">5</p>
                                            <p className="ingredients-text-result">Ingredients</p>
                                        </div>
                                        <div className="time-image-div-result">
                                            <img className="time-image-result" src={klokje} alt="time"/>
                                            <p className="time-text-result">30 min.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link id="recipe-link" to="/recipe">
                                <div className="carousel-card-result">
                                    <img className="carousel-card-image-result"
                                         src="https://www.oetker.nl/Recipe/Recipes/oetker.nl/nl-nl/miscellaneous/image-thumb__97330__RecipeDetail/pizza-caprese.webp"
                                         alt="Recipe"/>
                                    <br/>
                                    <div className="recipe-title-result">
                                        <p>Recipe name</p>
                                    </div>
                                    <br/>
                                    <div className="calories-ingredients-time-result">
                                        <div className="calories-ingredients-div-result">
                                            <p className="calories-number-result">500</p>
                                            <p className="calories-text-result">Calories | </p>
                                            <p className="ingredients-number-result">5</p>
                                            <p className="ingredients-text-result">Ingredients</p>
                                        </div>
                                        <div className="time-image-div-result">
                                            <img className="time-image-result" src={klokje} alt="time"/>
                                            <p className="time-text-result">30 min.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link id="recipe-link" to="/recipe">
                                <div className="carousel-card-result">
                                    <img className="carousel-card-image-result"
                                         src="https://www.oetker.nl/Recipe/Recipes/oetker.nl/nl-nl/miscellaneous/image-thumb__97330__RecipeDetail/pizza-caprese.webp"
                                         alt="Recipe"/>
                                    <br/>
                                    <div className="recipe-title-result">
                                        <p>Recipe name</p>
                                    </div>
                                    <br/>
                                    <div className="calories-ingredients-time-result">
                                        <div className="calories-ingredients-div-result">
                                            <p className="calories-number-result">500</p>
                                            <p className="calories-text-result">Calories | </p>
                                            <p className="ingredients-number-result">5</p>
                                            <p className="ingredients-text-result">Ingredients</p>
                                        </div>
                                        <div className="time-image-div-result">
                                            <img className="time-image-result" src={klokje} alt="time"/>
                                            <p className="time-text-result">30 min.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link id="recipe-link" to="/recipe">
                                <div className="carousel-card-result">
                                    <img className="carousel-card-image-result"
                                         src="https://www.oetker.nl/Recipe/Recipes/oetker.nl/nl-nl/miscellaneous/image-thumb__97330__RecipeDetail/pizza-caprese.webp"
                                         alt="Recipe"/>
                                    <br/>
                                    <div className="recipe-title-result">
                                        <p>Recipe name</p>
                                    </div>
                                    <br/>
                                    <div className="calories-ingredients-time-result">
                                        <div className="calories-ingredients-div-result">
                                            <p className="calories-number-result">500</p>
                                            <p className="calories-text-result">Calories | </p>
                                            <p className="ingredients-number-result">5</p>
                                            <p className="ingredients-text-result">Ingredients</p>
                                        </div>
                                        <div className="time-image-div-result">
                                            <img className="time-image-result" src={klokje} alt="time"/>
                                            <p className="time-text-result">30 min.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link id="recipe-link" to="/recipe">
                                <div className="carousel-card-result">
                                    <img className="carousel-card-image-result"
                                         src="https://www.oetker.nl/Recipe/Recipes/oetker.nl/nl-nl/miscellaneous/image-thumb__97330__RecipeDetail/pizza-caprese.webp"
                                         alt="Recipe"/>
                                    <br/>
                                    <div className="recipe-title-result">
                                        <p>Recipe name</p>
                                    </div>
                                    <br/>
                                    <div className="calories-ingredients-time-result">
                                        <div className="calories-ingredients-div-result">
                                            <p className="calories-number-result">500</p>
                                            <p className="calories-text-result">Calories | </p>
                                            <p className="ingredients-number-result">5</p>
                                            <p className="ingredients-text-result">Ingredients</p>
                                        </div>
                                        <div className="time-image-div-result">
                                            <img className="time-image-result" src={klokje} alt="time"/>
                                            <p className="time-text-result">30 min.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
            </main>
        </>
);
}