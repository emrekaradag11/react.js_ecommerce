import React from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'

const BrandList1 = (props) => {
  return (
    <div className={props.customClass + " brandList1"}>
        <Link to={props.data.slug} className="item">
          <div className="img">
            <img src={props.data.image.original} alt={props.data.name} />
          </div>
          <strong className="title">{props.data.name}</strong>
        </Link>
    </div>
  )
}

BrandList1.propTypes = {
  data : PropTypes.object,
  customClass : PropTypes.string
}

BrandList1.defaultProps = {
  data : {},
  customClass : "col-12"
}

export default BrandList1;