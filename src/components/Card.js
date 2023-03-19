import React from 'react'

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.item.imageUrl} className="card--image" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-geo-alt-fill card--logo"
        viewBox="0 0 16 16"
      >
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
      </svg>
      <div className="card--stats">
        <h2 className="card--location">{props.item.location}</h2>
        <a href={props.item.googleMapsUrl}>View on Google Maps</a>
        <h3 className="card--title">{props.item.title}</h3>
        <p className="card--date">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="card--description">{props.item.description}</p>
      </div>
    </div>
  )
}
