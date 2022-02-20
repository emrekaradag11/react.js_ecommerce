import React, { Component } from 'react'

export default class Newsletter extends Component {
  render() {
    return (
      <div className="newsletter">
        <div className="col-lg-11 mx-auto">
            <div className="row align-items-center justify-content-between">
                <div className="col-lg-auto">
                    <h1 className="title">Get Expert Tips In Your Inbox </h1>
                    <p className="text">Subscribe to our newsletter and stay updated. </p>
                </div>
                <div className="col-lg-auto">
                    <form className="newsletterForm d-flex align-items-center justify-content-center">
                        <input className="form-control" placeholder="Write your email here" name="email" type="email" />
                        <button type="submit" className="btn ms-2">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
