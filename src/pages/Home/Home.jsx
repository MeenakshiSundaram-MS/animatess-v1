import React from 'react'
import Card from '../../components/Cards/Card'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'

function Home() {
  return (

    <div className='HomeContainer'>
        <Navbar/>
        <div className='titleContainer'>
            <span className='title'>Animatess</span>
        </div>
        <div className='aboutContainer'>
            <section>
                A one stop place to find simple and unique animations for your website. Simply copy the CSS from the animation you prefer and add it your projects.
            </section>
        </div>
        <div className='animationSection'>
            <span className='animationSection__heading'>Components</span>
            <section className='componentSection'>
                <Card name={'Buttons'} />
                <Card name={'Cards'} />
                <Card name={'NavBars'} />
                <Card name={'Loaders'} />
        </section>
        </div>
        <Footer/>
    </div>
    
  )
}

export default Home