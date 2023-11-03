import styled from 'styled-components';


const HomeHeading = styled.p`
font-size: 30px;
border-bottom: 2px solid #80808096;
width: 24vw;
text-align: center;
padding-bottom: 7px;
margin : 5vh auto 53px auto;
grid-column: 1 / span 11;

@media (max-width: 500px) {
    width: 56vw;
    font-size: 21px;
  }
`


export default HomeHeading