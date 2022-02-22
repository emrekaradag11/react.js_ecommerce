import React, { Component } from 'react'
import mastercard from '../../assets/img/mastercard.svg';
import visa from '../../assets/img/visa.svg';
import paypal from '../../assets/img/paypal.svg';
import jcb from '../../assets/img/jcb.svg';
import skrill from '../../assets/img/skrill.svg';
import {Link} from 'react-router-dom'

export default class Footer extends Component {
  render() {
    return (
      <footer>
          <div className="footerCenter">
              <div className="col-lg-11 mx-auto">
                  <div className="row">
                      <div className="col">
                        <div className="footerList">
                            <strong className="title">Social</strong>
                            <ul>
                                <li><Link to="/">Contact Us</Link></li>
                                <li><Link to="/">Support Center</Link></li>
                                <li><Link to="/">About</Link></li>
                                <li><Link to="/">Copyright</Link></li>
                            </ul>
                        </div>
                      </div>
                      <div className="col">
                        <div className="footerList">
                            <strong className="title">Contact</strong>
                            <ul>
                                <li><Link to="/">Contact Us</Link></li>
                                <li><Link to="/">Support Center</Link></li>
                                <li><Link to="/">About</Link></li>
                                <li><Link to="/">Copyright</Link></li>
                            </ul>
                        </div>
                      </div>
                      <div className="col">
                        <div className="footerList">
                            <strong className="title">About</strong>
                            <ul>
                                <li><Link to="/">Contact Us</Link></li>
                                <li><Link to="/">Support Center</Link></li>
                                <li><Link to="/">About</Link></li>
                                <li><Link to="/">Copyright</Link></li>
                            </ul>
                        </div>
                      </div>
                      <div className="col">
                        <div className="footerList">
                            <strong className="title">Customer Care</strong>
                            <ul>
                                <li><Link to="/">Contact Us</Link></li>
                                <li><Link to="/">Support Center</Link></li>
                                <li><Link to="/">About</Link></li>
                                <li><Link to="/">Copyright</Link></li>
                            </ul>
                        </div>
                      </div>
                      <div className="col">
                        <div className="footerList">
                            <strong className="title">Social</strong>
                            <ul>
                                <li><Link to="/">Contact Us</Link></li>
                                <li><Link to="/">Support Center</Link></li>
                                <li><Link to="/">About</Link></li>
                                <li><Link to="/">Copyright</Link></li>
                            </ul>
                        </div>
                      </div>
                      <div className="col">
                        <div className="footerList">
                            <strong className="title">Social</strong>
                            <ul>
                                <li><Link to="/">Contact Us</Link></li>
                                <li><Link to="/">Support Center</Link></li>
                                <li><Link to="/">About</Link></li>
                                <li><Link to="/">Copyright</Link></li>
                            </ul>
                        </div>
                      </div>
                  </div>
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
