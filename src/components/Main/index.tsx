import * as S from './styles';

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Atom image and Advanced React written to the side"
    />
    <S.Title>Advanced React</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS and Styled Components
    </S.Description>
    <S.Illustration src="/img/hero-illustration.svg" alt="Developer coding" />
  </S.Wrapper>
);

export default Main;
