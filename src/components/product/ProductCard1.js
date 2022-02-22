import React, { Component } from 'react'
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

const ProductCard1 = (props) => { 

    const {Title,img,description,discountPrice,price,slug,sold,quantity} = props;

    const formatCurrency = new Intl.NumberFormat('tr-TR', {
        style: "currency",
        currency: "TRY",
    });

    const price2 = formatCurrency.format(price);
    const discountPrice2 = discountPrice > 0 ? formatCurrency.format(discountPrice) : 0;


    return ( 
        <div className="productType1">
            <Link to={slug} className="item">
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
                    <div className="avaible">
                        <div className="d-flex align-items-center justify-content-between">
                        <div>Sold : {sold}</div>
                        <div>Avaible : {quantity - sold}</div>
                        </div>
                        <div className="avaibleStatus"><div style={{width : ((sold / quantity) * 100) + "%"}} className="statusBar"></div></div>
                    </div>
                </div>
            </Link>
        </div> 
    )
}


 
ProductCard1.propTypes = {
    img : PropTypes.string,
    Title : PropTypes.string,
    description : PropTypes.string,
    slug : PropTypes.string,
    price : PropTypes.number,
    discountPrice : PropTypes.number,
    sold : PropTypes.number,
}
ProductCard1.defaultProps = {
    img : "",
    Title : "",
    description : "",
    price : 0.00,
    discountPrice : 0,
    sold : 0,
    slug : "",
}

export default ProductCard1;