import React from "react";
import PropTypes from "prop-types";
import Header from './Header';
import Footer from './Footer';
import ProductCard1 from './../product/ProductCard1'
import ProductCard2 from './../product/ProductCard2'
import CategoryCard1 from './../category/CategoryCard1'
import CategoryCard2 from './../category/CategoryCard2'
import BrandList1 from './../brands/BrandList1'
import Newsletter from './../common/Newsletter'
import banner1 from '../../assets/img/banner-1.jpg';
import banner2 from '../../assets/img/banner-2.jpg';
import banner3 from '../../assets/img/banner-3.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const Layout = (props) => {

  return (
    <div className="layout">
        <Header />
        <main>
          <div className="section1">
            <div className="col-xl-11 mx-auto">
              <div className="row">
                <div className="col-lg-3">
                  <ul className="categoryList">
                    {
                      props.Categories.map((cc, key) => {
                          if (key <= 6)
                            return (
                              <CategoryCard1

                                key = {key} 
                                data={cc} />
                            );
                        })
                    }
                  </ul>
                </div>
                <div className="col-lg-6">
                  <div className="row h-100">
                    <div className="col-12 pb-3 px-3">
                      <div className="banner1 centerBanner"> <img src={banner1} alt="banner" /> </div>    
                    </div>
                    <div className="col-lg-6 pt-3 px-3">
                      <div className="banner2 centerBanner"> <img src={banner2} alt="banner" /> </div>
                    </div>
                    <div className="col-lg-6 pt-3 px-3">
                      <div className="banner3 centerBanner"> <img src={banner3} alt="banner" /> </div>
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
                      className="rightSwiper"
                      navigation
                    >

                      {
                        props.flashSale.productFlashSellGridTwo.map(f => {
                          return (
                            
                            <SwiperSlide
                            key={f.id}>
                              <div className="swipeItem">
                                <ProductCard1 
                                
                                  key={f.id}
                                  img={f.image.original}
                                  Title={f.name}
                                  price={f.sale_price}
                                  slug={f.slug}
                                  sold={f.sold}
                                  quantity={f.quantity}
                                  discountPrice={f.price}
                                  description={f.description}
                                />
                              </div>
                            </SwiperSlide>
                          )
                        })
                      }
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="section2">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {
                props.productDatas.map(p => {
                  return (
                    <ProductCard2
                      key={p.id}
                      img={p.image.original}
                      Title={p.name}
                      price={p.sale_price}
                      slug={p.slug}
                      discountPrice={p.price}
                      description={p.description}
                      customClass="col-lg-5x p-lg-3" />
                  )
                })
              }
            </div>
          </div>
        </div>

        <div className="section3">
          <div className="col-lg-11 mx-auto">
              <div className="row">

                <Swiper
                  modules={[Navigation]}
                  spaceBetween={25}
                  slidesPerView={8}
                  className="rightSwiper"
                  navigation
                >

                  {
                    props.Brands.map((b,key) => {
                      return (
                        
                        <SwiperSlide
                        key={key}>
                          <div className="swipeItem">
                            
                            <BrandList1
                            data = {b}
                            />
                          </div>
                        </SwiperSlide>
                      )
                    })
                  }
                </Swiper>
              </div>
          </div>
        </div>
        
        <div className="categoryList1">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {
                props.FeaturedCategories.map((ff,key) => {
                  return (

                    <div 
                    key={key}
                    className="col-lg-4 p-lg-3">
                      <CategoryCard2
                        data={ff}
                        />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
        <Newsletter />
        <Footer />
    </div>
  )
}


Layout.propTypes = {
  productDatas : PropTypes.array,
  flashSale : PropTypes.object,
  FeaturedCategories : PropTypes.array,
  Categories : PropTypes.array,
}
Layout.defaultProps = {
  productDatas : [],
  flashSale : {},
  FeaturedCategories : [],
  Categories : [],
}
export default Layout;
