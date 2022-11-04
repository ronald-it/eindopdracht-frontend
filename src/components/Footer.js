import * as React from 'react';
import './Footer.css';

export function Footer() {
    return (
        <>
            <footer id="outer-container-footer" className="outer-container-footer">
                <div className="inner-container-footer">
                    <div className="column-footer">
                        <h3>Information</h3>
                        {/*<br>*/}
                            <p>Nullam a enim</p>
                            <p>Quisque cursus</p>
                            <p>Cras egestas</p>
                            <p>Nunc vitae</p>
                    </div>
                    <div className="column-footer">
                        <h3>About</h3>
                        {/*<br>*/}
                            <p>Quisque cursus</p>
                            <p>Cras egestas</p>
                            <p>Nunc vitae</p>
                    </div>
                    <div className="column-footer">
                        <h3>Contact</h3>
                        {/*<br>*/}
                            <p>Cras egestas</p>
                            <p>Nunc vitae</p>
                            <p>Nullam a enim</p>
                    </div>
                    <div id="column-footer-four" className="column-footer">
                        <h3>Social</h3>
                        {/*<br>*/}
                            <div className="social-media-links">
                                <div className="social-media-circle">
                                    {/*<img className="social-media-icon" src="assets/icons/facebook.svg"*/}
                                    {/*     alt="search icon">*/}
                                </div>
                                <div className="social-media-circle">
                                    {/*<img className="social-media-icon" src="assets/icons/instagram.svg"*/}
                                    {/*     alt="search icon">*/}
                                </div>
                                <div className="social-media-circle">
                                    {/*<img className="social-media-icon" src="assets/icons/linkedin.svg"*/}
                                    {/*     alt="search icon">*/}
                                </div>
                                <div className="social-media-circle">
                                    {/*<img className="social-media-icon" src="assets/icons/twitter.svg" alt="search icon">*/}
                                </div>
                            </div>
                    </div>
                </div>
            </footer>
        </>
    );
}