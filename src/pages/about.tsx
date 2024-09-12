import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ScrollTop } from '../components/ScrollTop'
import { BiUserPin } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsLinkedin } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { ArrowLeft, ChatCenteredText, Image as IconImage, YoutubeLogo, Hash, InstagramLogo } from 'phosphor-react'
import * as S from '../styles/about'
import { ButtonAlt, Section, Title, ButtonSecondary } from '../styles/styles'
import { Instagram } from './api/Instagram'

const botkey = process.env.NEXT_PUBLIC_BOTKEY_URL;

interface DashboardPageProps {
  fallback: any;
}
export default function About() {
  return <>
    <Head>
      <title>About | Robert Wang</title>
      <meta
        name="description"
        content="I am Robert Wang, a Senior Blockchain Engineer with over 6 years of software development experience, including 4 years of deep specialization in blockchain technologies."
      />
      <meta property="og:title" content="About | RobertWang" />
      <meta
        property="og:description"
        content="I am Robert Wang, a Senior Blockchain Engineer with over 6 years of software development experience, including 4 years of deep specialization in blockchain technologies."
      />
    </Head>

    <ScrollTop />
    <Section>
      <S.AboutContainer>
        <Title>
          <p>../about</p>
          About Myself!!
          <span>
            <BiUserPin /> About
          </span>
        </Title>

        <S.AboutContent>
          <S.AboutImage>
            <img
              className="AboutImg"
              src="/Robert.png"
              alt="Robert Wang"
            />

            <div className="links">
              <ul>
                <Link
                  href={'https://github.com/cryptovecom'}
                  target="_blank"
                  aria-label="Github">

                  <AiFillGithub size={25} />@cryptovecom
                </Link>
                {/* <Link
                  href={'https://www.linkedin.com/in/saravanaramaswamy2003/'}
                  target="_blank"
                  aria-label="Linkedin">

                  <BsLinkedin size={25} />@saravanaramaswamy2003
                </Link>
                <Link 
                  href={'https://api.whatsapp.com/send?phone=918838416187'}
                  target="_blank"
                  aria-label="WhatsApp">

                  <RiWhatsappFill size={25} />+91 8838416187
                </Link> */}
                <Link
                  href={'rwdev012995@gmail.com'}
                  className="email"
                  target="_blank"
                  aria-label="email">

                  <GrMail size={25} />rwdev012995@gmail.com
                </Link>
              </ul>
            </div>

            <S.AboutContact>
              <h3>
              Lets talk, maybe create an amazing project together?
              </h3>
              <p>Send me a message! 😉</p>
              <Link href={'/contact'}>

                <ButtonAlt>Contact</ButtonAlt>

              </Link>
            </S.AboutContact>
          </S.AboutImage>
          <S.AboutDescription>
            <p style={{ textAlign: 'justify' }}>
            👋 Hello! I am Robert Wang,  
            </p>
            <p style={{ textAlign: 'justify' }}>
            Developed smart contracts and DApps on various EVM-compatible blockchain platforms, including Ethereum, Binance Smart Chain, Polygon, and Blast.
            </p>
            <p style={{ textAlign: 'justify' }}>
            Built and maintained web applications and websites for blockchain and decentralized technologies using frameworks like React and Next.js.
            </p>
            <p style={{ textAlign: 'justify' }}>
            Expert in JavaScript frameworks such as Node.js, Express.js, React, and Next.js
            </p>
            <p style={{ textAlign: 'justify' }}>
            Managed application state effectively using state management libraries like Redux and Jotai.
            </p>
            <p style={{ textAlign: 'justify' }}>
            Strong proficiency in Web3 technologies and frameworks, such as Web3.js and Ethers.js, for interfacing with decentralized networks and protocols.
            </p>
            <p style={{ textAlign: 'justify' }}>
            Seamlessly integrated front-end and back-end components with blockchain ecosystems using modern wallet connect frameworks like RainbowKit, Wagmi, Viem, and useOnboard.
            </p>
            <p style={{ textAlign: 'justify' }}>
            Extensive experience in project development within diverse crypto ecosystems, including DeFi, P2E, NFTs, and DAOs.
            </p>
            <p style={{ textAlign: 'justify' }}>
            In-depth knowledge of EVM protocols and standards, such as ERC-20, ERC-721, ERC-1155, and ERC-4626.
            </p>
            <p style={{ textAlign: 'justify' }}>
            Utilized IPFS (InterPlanetary File System) for decentralized data storage and integration within decentralized ecosystems.
            </p>
            <p style={{ textAlign: 'justify' }}>
            Solid background in smart contract testing and gas optimization using Hardhat and Foundry.
            </p>
            <p style={{ textAlign: 'justify' }}>
            Proficient in developing and deploying EVM smart contracts using tools such as Truffle, Hardhat, and Remix.
            </p>
            <p style={{ textAlign: 'justify' }}>
            Designed and developed project architecture using tools such as Draw.io and UML diagrams.
            </p>
            <p style={{ textAlign: 'justify' }}>
            Experienced in Agile development methodologies, architecture design, and software implementation, ensuring efficient and collaborative development for blockchain solutions with tools like Jira and GitHub.
            </p>
          </S.AboutDescription>
        </S.AboutContent>
      </S.AboutContainer>

      {/* <Title>
          Instagram Post
          <span>
            < InstagramLogo /> Latest
          </span>
      </Title>
      <Instagram />
      <a style={{ textAlign: 'center' }}>
        Show your ❤️ by liking and commenting, <br /> Follow me on Instagram for more updates.
      </a> */}
      <Link href={'/#home'} legacyBehavior>
        <ButtonSecondary>
          <a>
            <ArrowLeft
              style={{ marginBottom: '-0.2rem' }}
              weight="bold"
              size={18}
            />{' '}
            Back
          </a>
        </ButtonSecondary>
      </Link>
    </Section>
    <script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
    <script src={botkey} defer></script>
    <Footer />
  </>;
}
