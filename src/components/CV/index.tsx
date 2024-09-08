/* eslint-disable @next/next/no-img-element */
import { ButtonSecondAlt, Container, Title } from "../../styles/styles";
import { CVContainer, CVContent, CVDescription, Curriculum } from "./styles"
import { FiDownload } from 'react-icons/fi'

export function CV() {
  return (
    <Container>
      <CVContainer>
        <Title>
          <span>
            <FiDownload /> Download
          </span>
        </Title>

        <CVContent>
          <CVDescription>
              <div className="aspas">&ldquo;</div>
              <p>
              Here you can download my professional resume by clicking on the download button.
              </p>
              <div className="profile">
                <img src="/resume/cryptovecom.png" alt="cryptovecom" />
                <div className="name">
                  <h3>Robert Wang</h3>
                  <span>Full Stack | Blockchain developer</span>
                </div>
              </div>
          </CVDescription>
          
          <Curriculum>
            <img src="/cv.png" alt="Resume" />
            <a href="/resume/RobertWang.docx" download>
              <ButtonSecondAlt>
                <b>Download Resume</b> <FiDownload size={20}  />
              </ButtonSecondAlt>
            </a>
          </Curriculum>
        </CVContent>        
      </CVContainer>
    </Container>
  )
}