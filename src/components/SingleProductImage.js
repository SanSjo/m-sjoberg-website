import React, { useEffect, useState } from 'react'

const accessToken = 'f504da56-d684-4428-90b7-49a8a7990c97'

const clientSecret = 'mXgMlYHjpn'

export const SingleProductImage = (props) => {
  const [articleImg, setArticleImg] = useState('')
  console.log(articleImg)

  useEffect(() => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.fortnox.se/3/archive/${props.fileid}`, {
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
        setArticleImg(data)
        console.log(data)
      })
  }, [])

  return (
    <div>
      <img src={articleImg} alt="product" />
    </div>
  )
}

export default SingleProductImage