import { useState } from 'react'
import './App.css'
import BadgesShowcase from './Showcase/BadgesShowcase'
import BannerShowcase from './Showcase/BannersShowcase'
import CardsShowcase from './Showcase/CardsShowcase'
import TestimonialsShowcase from './Showcase/TestimonialsShowcase'
import TooltipsShowcase from './Showcase/TooltipsShowcase'

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
        <TestimonialsShowcase />
        <TooltipsShowcase />
      </main>
    </>
  )
}

export default App