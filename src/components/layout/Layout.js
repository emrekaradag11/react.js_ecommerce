import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';
import RightArrow from '../../assets/img/rightArrow.svg';
import banner1 from '../../assets/img/banner-1.jpg';
import banner2 from '../../assets/img/banner-2.jpg';
import banner3 from '../../assets/img/banner-3.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
          <Header />
          <main>
            <div className="section1">
              <div className="col-xl-11 mx-auto">
                <div className="row">
                  <div className="col-lg-3">
                    <ul className="categoryList">
                      <li>
                        <a className="item">
                          <div className="left">
                            <div className="img">

                            </div>
                            <span className="title">Woman</span>
                          </div>
                          <div className="counter">
                            <span className="count"> 24 </span>
                            <div class="rightArrow">
                              <img src={RightArrow} />
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="item">
                          <div className="left">
                            <div className="img">

                            </div>
                            <span className="title">Woman</span>
                          </div>
                          <div className="counter">
                            <span className="count"> 24 </span>
                            <div class="rightArrow">
                              <img src={RightArrow} />
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="item">
                          <div className="left">
                            <div className="img">

                            </div>
                            <span className="title">Woman</span>
                          </div>
                          <div className="counter">
                            <span className="count"> 24 </span>
                            <div class="rightArrow">
                              <img src={RightArrow} />
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="item">
                          <div className="left">
                            <div className="img">

                            </div>
                            <span className="title">Woman</span>
                          </div>
                          <div className="counter">
                            <span className="count"> 24 </span>
                            <div class="rightArrow">
                              <img src={RightArrow} />
                            </div>
                          </div>
                        </a>
                      </li>

                      <li>
                        <a className="item">
                          <div className="left">
                            <div className="img">

                            </div>
                            <span className="title">Woman</span>
                          </div>
                          <div className="counter">
                            <span className="count"> 24 </span>
                            <div class="rightArrow">
                              <img src={RightArrow} />
                            </div>
                          </div>
                        </a>
                      </li>

                      <li>
                        <a className="item">
                          <div className="left">
                            <div className="img">

                            </div>
                            <span className="title">Woman</span>
                          </div>
                          <div className="counter">
                            <span className="count"> 24 </span>
                            <div class="rightArrow">
                              <img src={RightArrow} />
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a className="item">
                          <div className="left">
                            <div className="img">

                            </div>
                            <span className="title">Woman</span>
                          </div>
                          <div className="counter">
                            <span className="count"> 24 </span>
                            <div class="rightArrow">
                              <img src={RightArrow} />
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-12 pb-3 px-3">
                        <div className="banner1 centerBanner"> <img src={banner1} /> </div>    
                      </div>
                      <div className="col-lg-6 p-3">
                        <div className="banner2 centerBanner"> <img src={banner2} /> </div>
                      </div>
                      <div className="col-lg-6 p-3">
                        <div className="banner3 centerBanner"> <img src={banner3} /> </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="flashSale">
                      <h6 className="titleBiggest">Flash Sale</h6>

                      <Swiper
                        modules={[Navigation]}
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        className="rightSwiper"
                        navigation
                      >
                        <SwiperSlide>
                          <div className="swipeItem">
                            <div className="productType1">
                              <div className="img">

                              </div>
                              <div className="text">
                                <strong className="title">Armani Stand Collar Trousers</strong>
                                <p className="desc">Monochrome elegance. Made with a relaxed wide-leg, these trousers are made from a sustainable soft organic cotton with a mechanical stretch making the garment easily recycled.</p>
                                <div className="priceContent">
                                  <span className="price">$60.00</span>
                                  <del className="discount">$16.00</del>
                                </div>
                                <div className="avaible">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div>Sold : 180</div>
                                    <div>Avaible : 140</div>
                                  </div>
                                  <div className="avaibleStatus"><div className="statusBar"></div></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="swipeItem">
                            <div className="productType1">
                              <div className="img">

                              </div>
                              <div className="text">
                                <strong className="title">Armani Stand Collar Trousers</strong>
                                <p className="desc">Monochrome elegance. Made with a relaxed wide-leg, these trousers are made from a sustainable soft organic cotton with a mechanical stretch making the garment easily recycled.</p>
                                <div className="priceContent">
                                  <span className="price">$60.00</span>
                                  <del className="discount">$16.00</del>
                                </div>
                                <div className="avaible">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div>Sold : 180</div>
                                    <div>Avaible : 140</div>
                                  </div>
                                  <div className="avaibleStatus"><div className="statusBar"></div></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="swipeItem">
                            <div className="productType1">
                              <div className="img">

                              </div>
                              <div className="text">
                                <strong className="title">Armani Stand Collar Trousers</strong>
                                <p className="desc">Monochrome elegance. Made with a relaxed wide-leg, these trousers are made from a sustainable soft organic cotton with a mechanical stretch making the garment easily recycled.</p>
                                <div className="priceContent">
                                  <span className="price">$60.00</span>
                                  <del className="discount">$16.00</del>
                                </div>
                                <div className="avaible">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div>Sold : 180</div>
                                    <div>Avaible : 140</div>
                                  </div>
                                  <div className="avaibleStatus"><div className="statusBar"></div></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="swipeItem">
                            <div className="productType1">
                              <div className="img">

                              </div>
                              <div className="text">
                                <strong className="title">Armani Stand Collar Trousers</strong>
                                <p className="desc">Monochrome elegance. Made with a relaxed wide-leg, these trousers are made from a sustainable soft organic cotton with a mechanical stretch making the garment easily recycled.</p>
                                <div className="priceContent">
                                  <span className="price">$60.00</span>
                                  <del className="discount">$16.00</del>
                                </div>
                                <div className="avaible">
                                  <div className="d-flex align-items-center justify-content-between">
                                    <div>Sold : 180</div>
                                    <div>Avaible : 140</div>
                                  </div>
                                  <div className="avaibleStatus"><div className="statusBar"></div></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
      </div>
    )
  }
}
