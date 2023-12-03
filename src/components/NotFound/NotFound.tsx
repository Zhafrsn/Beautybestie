import React from "react";
import "../../styles/NotFound.css";

const NotFound: React.FC = () => {
  return (
    <div className="NotFound_Wrapper">
      <header className="NotFound_Title">
        <h1>404</h1>
        <p>Sorry, Page Not Found.</p>
      </header>

      <section className="NotFound_Button">
        <a href="/">
          <button>Go Home</button>
        </a>
      </section>
    </div>
  );
};

export default NotFound;
