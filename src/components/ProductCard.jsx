import React from 'react'
import ReactStars from "react-rating-stars-component"
import styled from 'styled-components'


function ProductCard({ product }) {

    const options = {
        edit: false,
        activeColor: "orange",
        size: window.innerWidth < 600 ? 18 : 25,
        value: product.rating,
        isHalf: true
    }

    return (
        <Product id='product-card'>
            <img src={product.images[0]} height={200} alt="productimage" />
            <CardBody>
                <ProductTitle>{product.brand + " " + product.title}</ProductTitle>
                <div>
                    <ReactStars {...options}></ReactStars>
                </div>
                <Price>₹{product.price * 70}</Price>
            </CardBody>
        </Product>
    )
}

const Product = styled.div`
width: 15rem;
border: 1px solid #efebeb;
margin: 3%;
display: flex;
flex-direction: column;
transition: all 0.2s;

@media (max-width: 1080px) {
    margin: 2%;
  }

&:hover{
    translate: -2px -5px;
}
`
const ProductTitle = styled.p`
font-family: monospace;
font-size : larger;
`
const CardBody = styled.div`
padding-top: 11px
`
const Price = styled.span`
font-size : large;
font-family: math;
`

export default ProductCard