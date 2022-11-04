import * as React from 'react';
import './Homepage.css';

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
                        Find Recipes
                        {/*<a href="#outer-container-carousel-id">Find Recipes 🡢</a>*/}
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
                        </div>
                    </div>
                    {/*<!--        Searchbar-->*/}

                    <div className="outer-container-searchbar">
                        <div className="inner-container-searchbar">
                            <form id="submit-form">
                                <label for="search-bar">
                                    <input className="search-bar-input" type="text" placeholder="Recipe search" id="search-bar" name="recipe"/>
                                </label>
                                <button id="magnifying-glass" type="button">
                                    {/*<img class="search-icon" src="assets/icons/search.png" alt="search icon">*/}
                                </button>
                                <label for="meals"></label>
                                <select name="meals" id="meals">
                                    <option value="">Meal type</option>
                                    <option value="breakfast">Breakfast</option>
                                    <option value="brunch">Brunch</option>
                                    <option value="lunch">Lunch</option>
                                    <option value="dinner">Dinner</option>
                                    <option value="snack">Snack</option>
                                    <option value="teatime">Tea time</option>
                                </select>
                                <label for="cuisine"></label>
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
                                <label for="diet"></label>
                                <select name="diet" id="diet">
                                    <option value="">Diet</option>
                                    <option value="balanced">Balanced</option>
                                    <option value="high-fiber">High-Fiber</option>
                                    <option value="high-protein">High-Protein</option>
                                    <option value="low-carb">Low-Carb</option>
                                    <option value="low-fat">Low-Fat</option>
                                    <option value="low-sodium">Low-Sodium</option>
                                </select>
                                <label for="time"></label>
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
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}