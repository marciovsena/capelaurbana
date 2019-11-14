import React from "react"
import * as S from "./styles"

const Hero = () => (
  <S.HeroWrapper>
    <S.HeroFlexGrid alignItems="center">
      <S.HeroCol width="50%">
        <S.H2>Um espaço de espiritualidade no meio da cidade.</S.H2>
        <S.H4>
          Um lugar de pausa, reflexão, oração e acolhimento pautado na
          espiritualidade de Jesus.
        </S.H4>
        <S.CTAContainer>
          <S.CallToAction>Chegue mais</S.CallToAction>
        </S.CTAContainer>
      </S.HeroCol>
    </S.HeroFlexGrid>
  </S.HeroWrapper>
)

export default Hero
