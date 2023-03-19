import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data'
import './style.css'

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />
  })

  return (
    <div>
      <Navbar />
      {/* <Card
         id={1}
         title="Mount Fuji"
         location="Japan"
         googleMapsUrl="https://goo.gl/maps/1DGM5WrWnATgkSNB8"
         startDate="12 Jan, 2021"
         endDate="24 Jan, 2021"
         description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
         imageUrl="Mount Fuji.JPEG"
      /> */}
      <section className="cards-list">{cards}</section>
    </div>
  )
}
