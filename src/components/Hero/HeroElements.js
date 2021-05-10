import styled from 'styled-components'

export const HeroContainer = styled.div`
  background: rgb(190, 208, 163);
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh-80px);
  padding: 0 1rem;
  color: #fff;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(190, 208, 163, 0) 0%,
        rgba(190, 208, 163, 0.2) 75%,
        rgba(190, 208, 163, 1) 100%
      ),
      linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);
  }
`

export const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const VideoBackground = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

export const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`

export const HeroItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
`

export const HeroH1 = styled.h1`
  font-size: clamp(3rem, 8vw, 8rem);
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: bold;
  color: rgba(50, 50, 50, 0.75);
`

export const HeroP = styled.p`
  color: rgba(50, 50, 50, 0.75);
  font-size: clamp(1.4rem, 3vw, 2.2rem);
  line-height: 1.41;
  font-weight: 600;
`