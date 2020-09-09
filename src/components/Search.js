/* eslint-disable no-return-assign */
import React, { useEffect, useState, useRef} from 'react'
import { Link } from 'react-router-dom'
import './styles/nav-menu.css'

const accessToken = 'f504da56-d684-4428-90b7-49a8a7990c97'

const clientSecret = 'mXgMlYHjpn'

export const Search = () => {
  const [query, setQuery] = useState('')
  const [article, setArticle] = useState([])    
  const focusSearch = useRef(null)
  console.log(article)
  useEffect(() => {focusSearch.current.focus()},[])

  // const onChange = (e) => {
  //   setQuery(e)
  // }

  const search = async () => {
    const result = await fetch(`https://cors-anywhere.herokuapp.com/https://api.fortnox.se/3/articles?description=${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Token': accessToken,
        'Client-Secret': clientSecret
      }
    })
    const articleData = await result.json()
    console.log('data', articleData)
    return articleData.Articles
    
  }

  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  useEffect(() => {
    let currentQuery = true
    const controller = new AbortController()

    const loadArticle = async () => {
      if (!query) return setArticle([])

      await sleep(350)
      if (currentQuery) {  
        setArticle(await search(query, controller))
        console.log('article', article)
      }
    }
    loadArticle()

    return () => {
      currentQuery = false
      controller.abort()
    }
  }, [query])

  //   const url = `https://cors-anywhere.herokuapp.com/https://api.fortnox.se/3/articles?description=${query}`;
  //   const token = {}

  //   fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json',
  //       'Access-Token': accessToken,
  //       'Client-Secret': clientSecret
  //     }
  //   })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     if (token === token) {
  //       setArticle(data.Articles)
  //       console.log(data)
  //     }
  //   })
  // }


  // useEffect(() => {
  //   search()
  // }, [])

  const articleComponents = article.map((art, index) => {
    return (
    <Link to={`/SingleProductPage/${art.ArticleNumber}`}>
      <p className="search-result" key={index}>{art.Description}</p>
    </Link>
    )
  })

    return (
      <div className="search-container">
        <form className="search">
          <input
            className="search-bar"
            type="text"
            value={query}
            name="query"
            ref={focusSearch}
            id="search-input"
            placeholder="Sök produkt här"
            aria-label="Search"
            onChange={(e) => setQuery(e.target.value)}/>
            <button className="search-btn" type="submit">
              <i className="fa fa-search" />
            </button>
          </form>

          <div className="search-results">
            {articleComponents}
          </div>
        </div>

    )
  }


export default Search

// import React, {useEffect, useState} from 'react'
// import axios from 'axios'

// const accessToken = 'be8815ff-d0e1-42f6-9510-2dd14701d4f8'

// const clientSecret = 'mXgMlYHjpn'

// export const Search = () => {
//     const [querys, setQuerys] = useState('')
//     const [result, setResult] = useState({})
//     const [message, setMessage] = useState('')
//     const [loading, setLoading] = useState(false)

//     const handleInputChange = () => {
//       setQuerys({querys: search.value})
//     }

// const fetchSearchResult = () => {
//     fetch('https://cors-anywhere.herokuapp.com/https://api.fortnox.se/3/articles/', {
//     method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json',
//             'Access-Token': accessToken,
//             'Client-Secret': clientSecret
//           }
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             setResult(data.Articles)
//             console.log(data.Articles)
//           })
//  }

//  useEffect(() => {
//         fetchSearchResult()
//       },[])

//     const handleOnInputChange = ( event ) => {
//     setQuerys(event)
//     setLoading(true)
//     setMessage('')

//     fetchSearchResult()
// }

// const renderSearchresults = () => {
//     const { result } = result

// }

//     return (
//       <div className="search-container">
//         <form className="search">
//           <input
//             className="search-bar"
//             type="text"
//             value={querys}
//             name="query"
//             id="search-input"
//             placeholder="Sök produkt här"
//             aria-label="Search"
//             onChange={(e) => handleOnInputChange(e.target.value)}
//             />
//           <button className="search-btn" type="submit">
//             <i className="fa fa-search" />
//           </button>
//         </form>
//       </div>
//     )
//   }

// export default Search