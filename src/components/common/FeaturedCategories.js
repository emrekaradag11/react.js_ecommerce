import React, { Component } from 'react'
import CategoryCard2 from '../category/CategoryCard2'

export default class FeaturedCategories extends Component {
  render() {
    return (
      <div className="categoryList1">
        <div className="col-lg-11 mx-auto">
          <div className="row">
            <div className="col-lg-4 p-lg-3">
              <CategoryCard2 />
            </div>
            <div className="col-lg-4 p-lg-3">
              <CategoryCard2 />
            </div>
            <div className="col-lg-4 p-lg-3">
              <CategoryCard2 />
            </div>
            <div className="col-lg-4 p-lg-3">
              <CategoryCard2 />
            </div>
            <div className="col-lg-4 p-lg-3">
              <CategoryCard2 />
            </div>
            <div className="col-lg-4 p-lg-3">
              <CategoryCard2 />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
