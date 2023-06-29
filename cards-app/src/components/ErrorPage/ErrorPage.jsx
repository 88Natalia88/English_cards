import React from "react";
import './ErrorPage.scss';

function ErrorPage(){
    return(
        <div className="error">
            <h1>404 Error Page</h1>
                <section className="error-container">
                    <span className="four"><span className="screen-reader-text">4</span></span>
                    <span className="zero"><span className="screen-reader-text">0</span></span>
                    <span className="four"><span className="screen-reader-text">4</span></span>
                </section>
        </div>
    )
}
export default ErrorPage;