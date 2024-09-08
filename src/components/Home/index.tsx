/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'
import { Container } from '../../styles/styles'
import { Content, ImgHome, HomeText } from './styles'




export function HomeHero() {

  return (
    <Container>
      <Content>
        <HomeText>
          <p>
            <span>👋🏻</span> Hello, my name is
          </p>
          <h1>
            Robert Wang
            <span className="animation">
              <Image
                width={200}
                height={200}
                src="/vectors/triangle.svg"
                alt="triangle"
                loading='lazy'
              />
            </span>
          </h1>
          <h2>
            <Typewriter
              options={{
                strings: ['Full Stack | Blockchain Developer'].map(str => str.replace('and', 'e')),
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
        </HomeText>
        <ImgHome>
          <img className="home-img" src="/home.png" alt="Home Image" />
        </ImgHome>
      </Content>
    </Container>
  )
}
