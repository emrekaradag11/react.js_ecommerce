import React from 'react'
import PropTypes from "prop-types";

const categoryCard2 = function(props){
  return (
    <div className="categoryType2">
        <a className="item">
            <strong className="title">{props.data.name}</strong>
            <div className="images">
                <div className="row">
                  {
                    props.data.products.map((pp,key) => {
                      return (

                        <div key={key} className="col-lg-4">
                          <div className="img">
                              <img src={pp.image.original} alt={props.data.title}/>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
            </div>
        </a>
    </div>
  )
}

categoryCard2.propTypes = {
  data : PropTypes.object
}

categoryCard2.defaultProps = {
  data : {}
}


export default categoryCard2;