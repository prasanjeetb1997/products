import styled from 'styled-components';


const ProductContainer = styled.div`
width: 85vw;
border: 1px solid green;
grid-column: 3/span 9;
display: flex;
flex-wrap: wrap;
justify-content: center;

@media (max-width: 1080px) {
   width : 80vw
  }
`


export default ProductContainer