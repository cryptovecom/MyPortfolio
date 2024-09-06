import Image from 'next/image'
import Link from 'next/link'
import { Button, Container, ButtonAlternatives } from '../../styles/styles'
import { AboutContainer } from './styles'
import { ArrowRight, TelegramLogo } from 'phosphor-react'

export function About() {
  return (
    <Container>
      <AboutContainer>
        <div className="AboutImg">
          <Image
            width={200}
            height={200}
            className="AboutImg"
            src="/Professional_edited.jpg"
            alt="Saravana's Image"
          />
        </div>

        <div className="aboutContent">
          <div className="aboutDescription">
            <h2>Little About Me!!</h2>
            <li>
            Highly skilled blockchain engineer with over 6 years of software development 
            experience, including 4 years focused on blockchain.  
            </li> <li>
            Strong foundation in the cryptocurrency ecosystem and am proficient 
            in smart contracts and Web3 technologies. I excel in the Solidity 
            programming language and am well-versed in blockchain protocols and consensus mechanisms. 
            </li>
          </div>
          <div className='aboutButton'>
            <Link href={'/resume'}>
              <Button>
                Resume
                <TelegramLogo
                  style={{
                    marginBottom: '-0.1rem',
                    marginLeft: '0.2rem',
                  }}
                  size={16}
                  weight="bold"
                />
              </Button>

            </Link>
            <Link href={'/about'}>

              <ButtonAlternatives>
                Read more
                <ArrowRight
                  style={{
                    marginBottom: '-0.1rem',
                    marginLeft: '0.2rem'
                  }}
                  weight="bold"
                  size={16}
                />
              </ButtonAlternatives>

            </Link>
          </div>
        </div>
      </AboutContainer>
    </Container>
  );
}
