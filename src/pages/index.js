import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
//import Services from '../components/Services'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false) // 'hamburger' menu, pokazujące się na telefonie

    const toogle = () => { // Tworzenie funkcji
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toogle={toogle} />
            <Navbar toogle={toogle} />
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <InfoSection {...homeObjFour}/>
            <Footer />
        </>
    )
}

export default Home
