import React from 'react';

export const HomeCards = () => {
  return (
    <section>
      {/* <!-- Card --> */}
      <div className="card-product">
        {/* <!-- Card image --> */}
        <div className="view overlay">
          <img className="card-img-top" src="parrot-unika.jpg" alt="Card cap" />
          <a href="#!">
            <div className="mask rgba-white-slight" />
          </a>
        </div>

        {/* <!-- Card content --> */}
        <div className="card-body">
          <h4 className="card-title">Card title</h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </p>
          <a href="#" className="btn btn-primary">
            Button
          </a>
        </div>
      </div>

      {/* <!-- Card --> */}
      <div className="card-product">
        {/* <!-- Card image --> */}
        <div className="view overlay">
          <img
            className="card-img-top"
            src="AsteroidSmart_bild.jpg"
            alt="Card cap"
          />
          <a href="#!">
            <div className="mask rgba-white-slight" />
          </a>
        </div>

        {/* <!-- Card content --> */}
        <div className="card-body">
          <h4 className="card-title">Card title</h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </p>
          <a href="#" className="btn btn-primary">
            Button
          </a>
        </div>
      </div>

      {/* <!-- Card --> */}
      <div className="card-product">
        {/* <!-- Card image --> */}
        <div className="view overlay">
          <img className="card-img-top" src="multican.jpg" alt="Card cap" />
          <a href="#!">
            <div className="mask rgba-white-slight" />
          </a>
        </div>

        {/* <!-- Card content --> */}
        <div className="card-body">
          {/* <!-- Title --> */}
          <h4 className="card-title">Card title</h4>
          {/* <!-- Text --> */}
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </p>
          {/* <!-- Button --> */}
          <a href="#" className="btn btn-primary">
            Button
          </a>
        </div>
      </div>

      {/* <!-- Card --> */}
      <div className="card-product">
        {/* <!-- Card image --> */}
        <div className="view overlay">
          <img
            className="card-img-top"
            src="Anafi Skycontroller 3.jpg"
            alt="Card cap"
          />
          <a href="#!">
            <div className="mask rgba-white-slight" />
          </a>
        </div>

        {/*  */}
        <div className="card-body">
          <h4 className="card-title">Card title</h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </p>
          <a href="#" className="btn btn-primary">
            Button
          </a>
        </div>
      </div>
      {/* <!-- Card --> */}
    </section>
  );
};

export default HomeCards;
