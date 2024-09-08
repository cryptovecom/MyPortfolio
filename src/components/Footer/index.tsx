import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { FooterContainer } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <h4> &copy; {new Date().getFullYear()} Robert Wang</h4>
      <div className="links">
        <Link
          href={'https://github.com/cryptovecom'}
          target="_blank"
          aria-label="Link Github">

          <FiGithub />

        {/* </Link>
        <Link
          href={'https://www.linkedin.com/in/saravanaramaswamy2003/'}
          target="_blank"
          aria-label="Link Linkedin">

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
          aria-label="Link para entrar em contato via whatsapp">

          <FaWhatsapp /> */}

        </Link>
      </div>
    </FooterContainer>
  );
}
