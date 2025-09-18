import React from 'react'
import Navbar from './components/Navbar'
import LeadershipWaveSection from './components/LeadershipWaveSection'
import LucaAndHisCrew from './components/LucaandHisCrew'
import LucasLeadershipMinutes from './components/LucasLeadershipMinutes'
import MeetTheAuthor from './components/MeetTheAuthor'
import BookCTA from './components/BookCTA'
import LucasCrewContactForm from './components/LucasCrewContactForm'
import LucaFooter from './components/LucaFooter'

const App = () => {
  return (
    <div>
      <div className="min-h-screen bg-[url('/Vector.png')] bg-repeat">
        <Navbar />
        <LeadershipWaveSection />
        <LucaAndHisCrew />
        <LucasLeadershipMinutes />
        <MeetTheAuthor />
        <BookCTA />
        <LucasCrewContactForm />
        <LucaFooter />
      </div>
    </div>
  )
}

export default App
