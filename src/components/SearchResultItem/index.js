import './index.css'

const ResultItem = props => {
  const {details, arrival, departure} = props
  const {hours, logo, arrivalTime, departureTime} = details

  return (
    <li className="list-item">
      <div className="place-time-container">
        <p className="item-name">{arrival}</p>
        <p className="time">{arrivalTime}</p>
      </div>
      <div className="place-time-container">
        <img src={logo} alt="logo" className="logo" />
        <p className="item-name">{hours}</p>
      </div>
      <div className="place-time-container">
        <p className="item-name">{departure}</p>
        <p className="time">{departureTime}</p>
      </div>
    </li>
  )
}

export default ResultItem
