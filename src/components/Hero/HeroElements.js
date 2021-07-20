import styled from 'styled-components';
import { keyframes } from 'styled-components';
import ImgBg1 from '../../images/showcase1.jpg';
import ImgBg2 from '../../images/showcase2.jpg';
import ImgBg3 from '../../images/showcase3.jpg';

const images = [ImgBg1,ImgBg2,ImgBg3]
const colors = ['#E9BA23','#B8F2E6','#D4C1EC']

export const fade = keyframes`
0%{
  opacity:0;
  box-shadow: 0px 0px ${({section}) => colors[section]};
}
10%{
  opacity:1;
  box-shadow: 3px 5px ${({section}) => colors[section]};
}
90%{
  opacity:1;
  box-shadow: 3px 5px ${({section}) => colors[section]}
}
100%{
  opacity:0;
  box-shadow: 0px 0px ${({section}) => colors[section]};
}
`




export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
  url(${({section}) => images[section]});
  height: 100vh;
  background-position: center;
  background-size: cover;
 
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 100%;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  h1{
    width: 650px;
  }
  @media screen and (max-width: 750px) {
    h1{
      width: 100%;
    }
  }
`;

export const HeroH11 = styled.h1`
  opacity:0;
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
  animation:${fade} 9s ease-in;
`;

export const HeroH12 = styled.h1`
  opacity:0;
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #B8F2E6;
  letter-spacing: 3px;
  animation:${fade} 9s ease-in;
`;

export const HeroH13 = styled.h1`
  opacity:0;
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #D4C1EC;
  letter-spacing: 3px;
  animation:${fade} 9s ease-in;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
