import React, {useEffect, useState} from 'react'
import axios from 'axios'

const accessToken = 'be8815ff-d0e1-42f6-9510-2dd14701d4f8'

const clientSecret = 'mXgMlYHjpn'

export const Search = () => {
    const [querys, setQuerys] = useState('')
    const [result, setResult] = useState({})
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

const fetchSearchResult = () => {
    fetch('https://cors-anywhere.herokuapp.com/https://api.fortnox.se/3/articles/', {
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
            setResult(data.Articles)
            console.log(data.Articles)
          })
 }    
 
 useEffect(() => {
        fetchSearchResult()  
      },[])

    const handleOnInputChange = ( event ) => {
    setQuerys(event)
    setLoading(true)
    setMessage('')
   
    fetchSearchResult()
}

const renderSearchresults = () => {
    const { result } = result


}

    return (
      <div className="search-container">
        <form className="search">
          <input
            className="search-bar"
            type="text"
            value={querys}
            name="query"
            id="search-input"
            placeholder="Sök produkt här"
            aria-label="Search"
            onChange={(e) => handleOnInputChange(e.target.value)}
            />
          <button className="search-btn" type="submit">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
    )
  }


export default Search