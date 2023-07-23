import {useState} from 'react'
import Cookies from 'js-cookie'
import {TailSpin} from 'react-loader-spinner'
import Navbar from '../Navbar'
import ResultItem from '../SearchResultItem'

import './index.css'

const Home = () => {
  const [pointA, setPointA] = useState('')
  const [pointB, setPointB] = useState('')
  const [date, setDate] = useState('')
  const [data, setData] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [showLoader, setShowLoader] = useState(false)

  const handleSubmit = async () => {
    setShowLoader(!showLoader)
    const jwtToken = Cookies.get('jwt_token')
    const searchResultsApiUrl =
      'https://my-json-server.typicode.com/Sri-Shanmukha-Chokkapu/plans-json-data/search_results'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(searchResultsApiUrl, options)
    if (response.ok) {
      setShowLoader(prevState => !prevState)
      const fetchedData = await response.json()
      setData(fetchedData)
      setShowResults(!showResults)
    } else {
      console.log('error')
    }
  }

  const getShuffledList = () => data.sort(() => Math.random() - 0.5)

  const renderSearchResults = () => {
    const shuffledList = getShuffledList()
    return (
      <ul className="search-results-container">
        {shuffledList.map(item => (
          <ResultItem
            key={item.flightNumber}
            arrival={pointA}
            departure={pointB}
            details={item}
          />
        ))}
      </ul>
    )
  }

  const renderLoadingView = () => (
    <div className="loader-container">
      <TailSpin color="#0284C7" height={50} width={50} />
    </div>
  )

  return (
    <div>
      <Navbar />
      <div className="main-container">
        <form className="form">
          <input
            type="search"
            placeholder="From Where?"
            className="inputField"
            value={pointA}
            onChange={e => setPointA(e.target.value)}
          />
          <input
            type="search"
            placeholder="Where to?"
            className="inputField"
            value={pointB}
            onChange={e => setPointB(e.target.value)}
          />
          <input
            type="date"
            placeholder="Date"
            value={date}
            className="inputField"
            onChange={e => setDate(e.target.value)}
          />
          <button
            type="button"
            className="search-button"
            onClick={handleSubmit}
          >
            Search
          </button>
        </form>
        {showLoader && renderLoadingView()}
        {showResults && renderSearchResults()}
      </div>
    </div>
  )
}

export default Home
