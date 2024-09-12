/* eslint-disable @next/next/no-img-element */ 
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Title } from '../../styles/styles'
import * as S from './styles'
import { GraduationCap } from 'phosphor-react'

export function Educations() {
  return (
    <S.ContainerEducation>
      <Title>
        Highlights
        <span>
          <GraduationCap /> Certification
        </span>
      </Title>
    </S.ContainerEducation>
  );
}
