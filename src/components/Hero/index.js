import React from "react"
import Video from "../../videos/pexels-thịnh-lê-5301104.mp4"
import {
    HeroContainer,
    HeroBackground,
    VideoBackground,
    HeroContent,
    HeroItem,
    HeroH1,
    HeroP
} from './HeroElements'

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBackground>
        <VideoBackground
          src={Video}
          type="video/mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </HeroBackground>
      <HeroContent>
        <HeroItem>
          <HeroH1>Cihurip Agro</HeroH1>
          <HeroP>
              Tani Sehat dan Ramah Lingkungan
          </HeroP>
        </HeroItem>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero