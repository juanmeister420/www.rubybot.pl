/* Autor wideo: Pressmaster z Pexels.com (muszę to wstawić pardon)*/

import React, { useState } from 'react';
import Video from '../../video/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import {Button} from '../ButtonElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const  onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Reklamuj swój serwer discord zupełnie za darmo!</HeroH1>
                <HeroP>
                    Za pomocą bota Ruby™ 🧡
                </HeroP>
                <HeroBtnWrapper>
                    <Button onMouseEnter={onHover} onMouseLeave={onHover} onClick={()=> window.open("https://redirect.rubybot.pl/zaproszenie/")}
 >

                        Zacznij dzisiaj! {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
