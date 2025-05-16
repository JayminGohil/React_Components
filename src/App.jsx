import { useState } from 'react'
import './App.css'
import BadgesShowcase from './Showcase/BadgesShowcase'
import BannerShowcase from './Showcase/BannersShowcase'
import CardsShowcase from './Showcase/CardsShowcase'

// import Testimonial from './components/Testimonials/Testimonial'

function App() {
  return (
    <>
      <main>
        <span id='title' className="heading lg">
          React Components
        </span>

        <BadgesShowcase />
        <BannerShowcase />
        <CardsShowcase />


        {/* <span className="heading md">
          Testimonial
        </span>

        <Testimonial /> */}
      </main>
    </>
  )
}

export default App