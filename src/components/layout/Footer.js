import React, { Component } from 'react'
import mastercard from '../../assets/img/mastercard.svg';
import visa from '../../assets/img/visa.svg';
import paypal from '../../assets/img/paypal.svg';
import jcb from '../../assets/img/jcb.svg';
import skrill from '../../assets/img/skrill.svg';

export default class Footer extends Component {
  render() {
    return (
      <footer>
          <div className="footerCenter">
              <div className="col-lg-11 mx-auto">
              </div>
          </div>
          <div className="footerBottom">
              <div className="col-lg-11 mx-auto">
                  <div className="row align-items-center justify-content-between">
                      <div className="col-lg-auto">
                          <div className="copy">
                            <p className="m-0">Copyright © 2022 &nbsp;<a href="https://www.byexit.com">ByExit.</a> All rights reserved</p>
                          </div>
                      </div>
                      <div className="col-lg-auto d-flex align-items-center justify-content-end">
                        <img className="me-4" src={mastercard} />
                        <img className="me-4" src={visa} />
                        <img className="me-4" src={paypal} />
                        <img className="me-4" src={jcb} />
                        <img src={skrill} />
                      </div>
                  </div>
              </div>
          </div>
      </footer>
    )
  }
}
