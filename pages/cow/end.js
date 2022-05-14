// Premade components
import { useRouter } from "next/router"
import useSound from "use-sound"
import { keyframes } from "styled-components"
import { motion } from "framer-motion"
import Image from "next/image"
import styled from "styled-components"

// My components
import Nav from "../../comps/Nav"

// Data
import { coco2 } from "../../data/selection"

// Animation
import { glowAnimation } from "../../data/animation"
import { useState } from "react"







const Container = styled.div`
  width: 400px;
  height: 80vh;
  margin: 0 auto;
  outline: 2px red solid;
  text-align: center;

  h2 {
    margin: 0;
    position: relative;
    top: 22%;
  }

  h1 {
    margin: 0;
    position: relative;
    top: 20%;
    font-family: Gill Sans;
    font-size: 5rem;
  }

  .head1 {
    position: relative;
    width: 44px;
    height: 44px;
    left: 46%;
    animation: glowAnimation 3s infinite;
  }

  .hover:hover {
    filter: drop-shadow(2px 2px 8px lime);
    cursor: pointer;
    transform: scale(1.2);
  }
  .hover:active {
    transform: scale(0.9);
  }

  p {
    position: relative;
    top: 58%;
    font-size: 12px;
  }
`

const Head = styled.div`
  animation-name: ${glowAnimation};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  position: relative;
  top: 60%;
  &:hover {
    animation-play-state: paused;
  }
`







export default function End() {

  const r = useRouter();

  const sound = "/sounds/cow.mp3";
  const [playbackRate, setPlaybackRate] = useState(0.75);
  const [play] = useSound(sound, {
    playbackRate,
    volume: 0.7,
  });
  const handleClick = () => {
    setPlaybackRate(playbackRate + 0.1);
    { play("/sounds/cow.mp3") };
  }

  return <div>
    <Container>
      <Nav />
      <h2>THANKS FOR PLAYING</h2>
      <h1>MEATY</h1>
      <Head>
        <div className="head1 hover" onClick={handleClick}>
          <Image src={coco2[0].head} layout="fill" objectFit="contain" />
        </div>
      </Head>
      <p>click me!</p>
    </Container>
  </div>
}