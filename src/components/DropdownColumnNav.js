import React from 'react';
import { Link } from 'react-router-dom';

// const accessToken = 'f504da56-d684-4428-90b7-49a8a7990c97'

// const clientSecret = 'mXgMlYHjpn'

export const DropdownColumnNav = (props) => {
//   const [article, setArticle] = useState([])

  //   useEffect(() => {
  //   fetch('https://cors-anywhere.herokuapp.com/https://api.fortnox.se/3/articles/', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //       'Access-Token': accessToken,
  //       'Client-Secret': clientSecret
  //     }
  //   })
  //     .then((res) => res.json())
  //   .then((data) => {
  //     setArticle(data.Articles.ArticleNumber)
  //   })
  // }, [])

  return (
    <div className="column">
      <h3>{props.header}</h3>
      <Link to="./SingleProductPage/BT10-01">
        <p className="menu-item">{props.menuItem1}</p>
      </Link>
      <Link to="./SingleProductPage/BT10-01">
        <p className="menu-item">{props.menuItem2}</p>
      </Link>
      <div className="sub-dropdown">
        <div className="menu-item-dropdown">
          <p className="menu-item">Parrot Handsfree</p>
          <i className="fa fa-angle-right" aria-hidden="true" />
        </div>
        <div className="sub-dropdown-content-col-1">
          <div>
            <div>
              <div>
                <p>Parrot</p>
                <p>Parrot Zik Bluetooth hörlur</p>
                <p>Parrot Pot / Flower Power</p>
                <p>Parrot ANAFI Drone</p>
                <p>Parrot BEBOP-PRO Drone</p>
                <p>Parrot Mini Drone</p>
                <p>Parrot DISCO-PRO Drone</p>
                <p>Parrot Fotoram</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="menu-item"> {props.menuItem3}</p>
      <p className="menu-item">{props.menuItem4}</p>
      <div className="sub-dropdown">
        <div className="menu-item-dropdown">
          <p className="menu-item">Carcomm</p>{' '}
          <i className="fa fa-angle-right" aria-hidden="true" />
        </div>
        <div className="sub-dropdown-content-col-1">
          <div>
            <div>
              <div>
                <p>Carcomm Aktiva hållare</p>
                <p>Carcomm Musik hållare</p>
                <p>Carcomm PDA hållare</p>
                <p>Carcomm Antenner</p>
                <p>Carcomm Svanhalsmic</p>
                <p>Carcomm Universal fästen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="menu-item">{props.menuItem5}</p>
      <p className="menu-item">{props.menuItem6}</p>
      <p className="menu-item">{props.menuItem7}</p>
      <p className="menu-item"> {props.menuItem8}</p>
    </div>
  );
};

export default DropdownColumnNav;
