import React, { useEffect, useState } from 'react'

const accessToken = 'f504da56-d684-4428-90b7-49a8a7990c97'

const clientSecret = 'mXgMlYHjpn'

export const SingleProductImage = (props) => {
  const [articleImg, setArticleImg] = useState('')
  console.log(articleImg)
  console.log(props.fileid)

  useEffect(() => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.fortnox.se/3/archive/${props.fileid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Token': accessToken,
        'Client-Secret': clientSecret,
      }
    })

      .then((res) => {
        setArticleImg(res.url)
        // .then((res) => {
        //   setArticleImg(res)
        //   console.log(articleImg)
        // })
        // let newUrl = articleImg;
        // newUrl = newUrl.replace(articleImg, 'https://api.fortnox.se/3/archive/8c05c536-c110-402d-82da-60f25f6b0e1c')
        // setArticleImg(newUrl)
      })
      .catch((err) => console.log(err))
  }, [props.fileid])

  return (
    <div>
      <img src={articleImg} alt="product" className="img" />
    </div>
  )
}

export default SingleProductImage