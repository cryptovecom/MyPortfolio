import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HeaderContainer, MobileIcon, NavMenu, Icons } from './styles'
import { List, X } from 'phosphor-react'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'


export function Header() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  // const musicSrc = '/others/music.mp3';
  
  return (
    <HeaderContainer style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <div className="mobile-content"  style={{ display: 'flex'}}>
        <Link href={'/'}>
          <div className="logo">
            <Image
              className="logo"
              width={45}
              height={45}
              src="/Logo1.png"
              alt="logo"
            />
          </div>
          {'Robert-Portfolio'}
        </Link>

        <MobileIcon onClick={handleOpen}>
          {open ? (
            <X size={25} weight="bold" />
          ) : (
            <List size={25} weight="bold" />
          )}
        </MobileIcon>
      </div>

      <NavMenu onClick={handleOpen} open={open}>
        <ul>
          <li>
            <Link href={'/'}>

              <span>Home</span>

            </Link>
          </li>

          <li>
            <Link href={'/about'}>

              <span>About</span>

            </Link>
          </li>

          <li>
            <Link href={'/experience'}>

              <span>Experience</span>

            </Link>
          </li>

          <li>
            <Link href={'/projects'}>

              <span>Projects</span>

            </Link>
          </li>

          <li>
            <Link href={'/resume'}>

              <span>Resume</span>

            </Link>
          </li>

          <li>
            <Link href={'/contact'}>

              <span>Contact</span>

            </Link>
          </li>
        </ul>

        {/* <Icons>
          <Link
            href={'https://github.com/cryptovecom'}
            target="_blank"
            aria-label="Github">

            <FiGithub />

          </Link>
          <Link
            href={'https://www.linkedin.com/in/saravanaramaswamy2003/'}
            target="_blank"
            aria-label="Linkedin">

            <FiLinkedin />

          </Link>

          <Link 
           href={'https://www.instagram.com/saravanakumar.me?utm_source=qr'}
           target="_blank" 
           aria-label="Instagram">
            
          <FiInstagram />
          
        </Link>

          <Link
            href={'https://api.whatsapp.com/send?phone=918838416187'}
            target="_blank"
            aria-label="Whatsapp">

            <FaWhatsapp />

          </Link>


        </Icons> */}
      </NavMenu>
    </HeaderContainer>
  );
}
