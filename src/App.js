import { useState, useEffect } from "react";
import PageLoader from "./components/PageLoader"
import WallPaper from "./components/WallPaper"
import Welcome from "./components/Welcome";
import Para from "./components/Para";
import Wrapper from "./components/Wrapper";
import HomeHeading from "./components/HomeHeading";
import SortBy from "./components/SortBy";
import FilterBox from "./components/FilterBox"
import ProductContainer from "./components/ProductContainer"
import ProductCard from "./components/ProductCard";
import styled from "styled-components";



function App() {

  const [Products, setProducts] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [productCategory, setProductCategory] = useState(null)


  const productCategories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting"
  ]

  useEffect(() => {
    if (productCategory) {
      fetch(`https://dummyjson.com/products/category/${productCategory}`)
        .then((response) => {
          response.json()
            .then((resJson) => {
              console.log(resJson)
              setProducts(resJson.products)
              setIsLoading(false)
            })
        }).catch((err) => { console.log(err) })

    } else {
      fetch(`https://dummyjson.com/products?limit=24`)
        .then((response) => {
          response.json()
            .then((resJson) => {
              console.log(resJson)
              setProducts(resJson.products)
              setIsLoading(false)
            })
        }).catch((err) => { console.log(err) })
    }

  }, [productCategory])

  console.log(productCategory)

  return (
    isLoading ? <PageLoader></PageLoader> :
      <>
        <WallPaper>
          <Welcome>Welcome to Ecommerce</Welcome>
          <Para>Find Amazing Products Below</Para>
        </WallPaper>
        <Wrapper>
          <HomeHeading>Featured Products</HomeHeading>
          <SortBy>
            <label style={{ fontSize: 'large' }} htmlFor="sort">Sortby: </label>
            <select style={{ height: '30px', fontSize: 'medium' }} name="sortby" id="sort">
              <option disabled selected>Default</option>
              <option value="high-first">Price: high to low</option>
              <option value="low-first">Price: low to high</option>
              <option value="a-to-z">Name:(A to Z)</option>
              <option value="z-to-a">Name:(Z to A)</option>
            </select>
          </SortBy>
          <FilterBox>
            <p style={{ marginTop: "15px" }}>ShopByCategory</p>
            <ul>
              {productCategories.map(category => <Li onClick={() => { setProductCategory(category) }}>{category}</Li>)}
            </ul>
            <ResetBtn onClick={()=>{setProductCategory(null)}}>reset</ResetBtn>
          </FilterBox>
          <ProductContainer>
            {Products.map((product) => {
              return <ProductCard key={product.id} product={product}></ProductCard>
            })}
          </ProductContainer>
        </Wrapper>
      </>
  );
}

const Li = styled.li`
  cursor: pointer;
    width: fit-content;
    margin: 2% 0 0 16%;
    list-style: none;
    color: #004989;

    @media (max-width: 1080px) {
      margin: 3% 0 0 10%;
     }

    &:hover{
      color: tomato;
    }
`;

const ResetBtn = styled.button`
border: none;
outline: none;
margin: 13% auto;
font-size: large;
padding: 8px;
background-color: dimgrey;
color: white;
cursor: pointer;
`;

export default App;
