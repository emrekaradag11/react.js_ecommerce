import React, { Component } from 'react'
import logo from '../../logo.svg';
import searchIcon from '../../assets/img/search.svg';
import cartIcon from '../../assets/img/cartIcon.svg';

export default class Header extends Component {
  render() {
    return (
      <header> 
        <div className="row align-items-center">
          <div className="col-lg-auto">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="col">
            <ul className="menu">
              <li>
                <a>Demos</a>
                <ul>
                  <li><a>Modern</a></li>
                  <li><a>Standart</a></li>
                  <li><a>Minimal</a></li>
                  <li><a>Vintage</a></li>
                  <li><a>Classic</a></li>
                  <li><a>Trendy</a></li>
                  <li><a>Elegant</a></li>
                  <li><a>Refined</a></li>
                </ul>
              </li>
              <li className="megaMenuWrapper">
                <a>Men Wear</a>
                <ul className="megaMenu">
                  <li>
                    <ul>
                      <li className="title"><a>Top Wear</a></li>
                      <li><a>T-Shirt</a></li>
                      <li><a>Casual Shirts</a></li>
                      <li><a>Formal Shirts</a></li>
                      <li><a>Blazwers & Coats</a></li>
                      <li><a>Suits</a></li>
                      <li><a>Jackets</a></li>
                      <li><a>Belt, Scarves & More</a></li>
                      <li><a>Watches & Wearables</a></li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li className="title"><a>Western Wear</a></li>
                      <li><a>Dresses</a></li>
                      <li><a>Jumpsuits</a></li>
                      <li><a>Tops, T-Shirts & Shirts</a></li>
                      <li><a>Shorts & Skirts</a></li>
                      <li><a>Shurgs</a></li>
                      <li><a>Blazers</a></li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li className="title"><a>Footwear</a></li>
                      <li><a>Flats</a></li>
                      <li><a>Casual Shoes</a></li>
                      <li><a>Heels</a></li>
                      <li><a>Boots</a></li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li className="title"><a>Lingerie & Sleepwear</a></li>
                      <li><a>Bra</a></li>
                      <li><a>Briefs</a></li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li className="title"><a>Lingerie & Sleepwear</a></li>
                      <li><a>Bra</a></li>
                      <li><a>Briefs</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a>Women Wear</a></li>
              <li><a>Search</a></li>
              <li><a>Shops</a></li>
              <li><a>Pages</a></li>
            </ul>
          </div>
          <div className="col-auto">
            <a className="d-inline-block"><img src={searchIcon} width="20" /></a>
            <a className="signIn">Sign In</a>
            <a className="cart">
              <span className="icon">
                <img src={cartIcon} width="20" />
                <div className="badge">0</div>
              </span>
            </a>
          </div>
        </div>
      </header>
    )
  }
}
