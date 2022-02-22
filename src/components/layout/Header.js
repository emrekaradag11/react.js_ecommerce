import React from 'react'
import logo from '../../logo.svg';
import searchIcon from '../../assets/img/search.svg';
import cartIcon from '../../assets/img/cartIcon.svg';
import menus from '../../framework/utils/menu'
import {Link} from 'react-router-dom'

const Header = (props) => {
  return (
    <header> 
      <div className="row align-items-center">
        <div className="col-lg-auto">
          <div className="logo">
            <Link to="/"><img src={logo} alt="logo" /></Link>
          </div>
        </div>
        <div className="col">
          <nav>
            <ul className="menu">
              {
                menus.map((v,k) => {
                  return (
                    <li key={k} className={v.subMenu && v.subMenu.length > 0 && v.subMenu[0].subMenu && v.subMenu[0].subMenu.length > 1 ? "megaMenuWrapper" : (v.subMenu && v.subMenu.length > 0 ? "dropdownMenu" : null)}>
                      <Link to={v.slug}>{v.label}</Link>
                      {
                        ( v.subMenu && v.subMenu.length > 0 ) ? (
                          v.subMenu[0].subMenu && v.subMenu[0].subMenu.length > 1 ? (
                            // megamenu
                            <ul className="megaMenu">
                              {
                                v.subMenu.map((vv,kk) => {
                                  return (
                                    <li key={kk}>
                                      <ul>
                                        <li className="title"><Link to={vv.slug}>{vv.label}</Link></li>
                                        {
                                          vv.subMenu && vv.subMenu.length > 0 ? (
                                            vv.subMenu.map((vvv,kkk) => {
                                              return (
                                                <li key={kkk}><Link to={vvv.slug}>{vvv.label}</Link></li>
                                              )
                                            })
                                          )
                                          :
                                          null
                                        }
                                      </ul>
                                    </li>
                                  )
                                })
                              }
                            </ul>
                          ):
                          (
                            // normal menu
                            <ul>
                              {
                                v.subMenu.map((vv,kk) => {
                                  return (
                                    <li key={kk}>
                                      <Link to={vv.slug}>{vv.label}</Link>
                                    </li>
                                  )
                                })
                              }
                            </ul>
                          )
                        )
                        :
                        ""
                      }
                    </li>
                  )
                })
              }
            </ul>
          </nav>
        </div>
        <div className="col-auto">
          <Link to="/" className="d-inline-block"><img src={searchIcon} width="20" /></Link>
          <Link to="/" className="signIn">Sign In</Link>
          <Link to="/" className="cart">
            <span className="icon">
              <img src={cartIcon} width="20" />
              <div className="badge">0</div>
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}
export default Header;