import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { Header } from './Header'
import Sena from '../img/senaHeadset.jpg';

const accessToken = ''

const clientSecret = ''

export const SingleProductPage = () => {
  const { itemId } = useParams()
  const [article, setArticle] = useState([])
  console.log(article)

  useEffect(() => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.fortnox.se/3/articles/${itemId}`, {
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
        setArticle(data.Article)
        console.log(data.Article.Description)
      })
  },[itemId])

  return (
    <>
      <Header />
      <section style={{marginTop: 200, display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <div>
          <img src={Sena} alt="product" />
        </div>
        <div>
          <h1>{article.Description} </h1>
          <h5>Pris {article.SalesPrice} SEK</h5>
          <button type="button">Mer information</button>
          <button type="button">Beställ produkt</button>
        </div>
      </section>
    </>
  )
}