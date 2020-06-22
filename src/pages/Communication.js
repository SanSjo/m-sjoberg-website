/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useEffect, useState } from 'react';
import dotenv from 'dotenv';
import '../components/styles/communication.css';
import axios from 'axios';
import Sena from '../img/senaHeadset.jpg';
import { Header } from '../components/Header';
import { CommProduct } from '../components/CommProduct';

dotenv.config()
const accessToken = ''

const clientSecret = ''

// https://cors-anywhere.herokuapp.com/

export const Communication = () => {
  const [article, setArticle] = useState([])
  console.log(article)

  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/https://api.fortnox.se/3/articles', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Token': accessToken,
        'Client-Secret': clientSecret
      }
    })
      .then((res) => res.json())
	  .then((data) => {
		  setArticle(data.Articles)
	  })
	 
  }, [])

  return (
    <>
      <Header />
      <section className="products-container">
        <div className="sideMenu">
          <div className="menu">
            <h2 className="side-menu-header">Kommunikation</h2>
            <p className="side-menu-para">4G Wifi Router</p>
            <p className="side-menu-para">Midland komradio</p>
            <p className="side-menu-para">Sena Headset</p>
            <p className="side-menu-parag">Funkwerk antennförstärkning</p>
            <p className="side-menu-para">GSM</p>
          </div>
        </div>
        <div className="products">
		{article.map((item) => (
 			<CommProduct img={Sena} title="Sena Headset" article={item} />
		))}
        

        </div>
      </section>
    </>
  );
};

export default Communication;
