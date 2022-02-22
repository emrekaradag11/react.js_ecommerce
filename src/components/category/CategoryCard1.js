import React, { Component } from 'react'
import PropTypes from "prop-types";
import RightArrow from '../../assets/img/rightArrow.svg';
import {Link} from 'react-router-dom'

const CategoryCard1 = (props) => {
    return (
        <li>
            <Link to={props.data.slug} className="item">
                <div className="left">
                    <div className="img">
                        <img src={props.data.image.original} alt={props.data.name} />
                    </div>
                    <span className="title">{props.data.name}</span>
                </div>
                <div className="counter">
                    <span className="count"> {props.data.productCount} </span>
                    <div className="rightArrow">
                        <img src={RightArrow} alt="Right Arrow" />
                    </div>
                </div>
            </Link>
        </li>
    )
}

CategoryCard1.propTypes = {
    data : PropTypes.object
} 

CategoryCard1.defaultProps = {
    data : {}
}

export default CategoryCard1;