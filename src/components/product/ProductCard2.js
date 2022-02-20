import React, { Component } from 'react'
import PropTypes from "prop-types";


const ProductCard2 = (props) => {


    const {Title,img,customClass,description,discountPrice,price,slug} = props;

    const formatCurrency = new Intl.NumberFormat('tr-TR', {
        style: "currency",
        currency: "TRY",
    });

    const price2 = formatCurrency.format(price);
    const discountPrice2 = discountPrice > 0 ? formatCurrency.format(discountPrice) : null;
    
    return (
        <div className={customClass}>
            <div className="productType2">
                <a href={slug} className="item">
                    <div className="img">
                        <img src={img} alt={Title}/>
                    </div>
                    <div className="text">
                        <strong className="title">{Title}</strong>
                        <p className="desc">{description}</p>
                        <div className="priceContent">
                            <span className="price">{price2}</span>
                            <del className="discount">{discountPrice2}</del>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}

 
ProductCard2.propTypes = {
    customClass : PropTypes.string.isRequired,
    img : PropTypes.string,
    Title : PropTypes.string,
    description : PropTypes.string,
    slug : PropTypes.string,
    price : PropTypes.number,
    discountPrice : PropTypes.number,
}
ProductCard2.defaultProps = {
    customClass : "col-lg-55 p-lg-5",
    img : "",
    Title : "",
    description : "",
    price : 0.00,
    discountPrice : 0,
    slug : "",
}

export default ProductCard2;