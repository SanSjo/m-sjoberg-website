import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import Sena from '../img/senaHeadset.jpg';
import { SingleBreadCrumbs } from './SingleBreadCrumbs';
import { SingleProductImage } from './SingleProductImage'
import './styles/product.css'

const accessToken = 'f504da56-d684-4428-90b7-49a8a7990c97'

const clientSecret = 'mXgMlYHjpn'

export const SingleProductPage = () => {
  const { itemId } = useParams()
  const [article, setArticle] = useState([])
  const [articleImg, setArticleImg] = useState('')
  const [fileId, setFileId] = useState([])
  console.log(article)
  console.log(fileId)
  console.log(articleImg)

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
        console.log(data)
        setArticle(data.Article)
        console.log(data)
      })
  }, [itemId])

  useEffect(() => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.fortnox.se/3/articlefileconnections/?articlenumber=${itemId}`, {
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
        setFileId(data.ArticleFileConnections[0].FileId)
        console.log(data.ArticleFileConnections[0].FileId)
    
      })
  }, [itemId])

 


  return (
    <>
      <Header />
      {/* <SingleBreadCrumbs active={article} /> */}
      <section className="single-product-container">
        <div>
          <img style={{ width: '50%' }} src={articleImg} alt="product" />

          <SingleProductImage fileid={fileId} />
        </div>
      
        <div>
          <h1>{article.Description} </h1>
          <h5>Pris {article.SalesPrice} SEK</h5>
          <button type="button">Mer information</button>
          <button type="button">Beställ produkt</button>
        </div>
       
      </section>

      <Footer />
    </>
  )
}