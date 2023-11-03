import styled from "styled-components";
import image from "../assets/home_decoration.jpg"


const WallPaper = styled.div`
height: 100vh;
background-image: url(${image});
clip-path: polygon(0 0, 100% 0, 100% 72%, 0% 100%);
text-align: center;
background-position: center;
background-size: cover; 
color : white;

@media (max-width: 780px) {
    background-size: 160vw 118vh; 
  }

@media (max-width: 500px) {
  clip-path: polygon(0 0, 100% 0, 100% 77%, 0% 96%);
  background-size: 190vw 106vh;
  height: 80vh;
  }
`


export default WallPaper