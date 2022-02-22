import productDatas from './framework/utils/product'
import flashSale from './framework/utils/products_flash_sale'
import FeaturedCategories from './framework/utils/featured_categories'
import Categories from './framework/utils/categories'
import Brands from './framework/utils/brands'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './pages/Home';
import ProductList from './pages/product/ProductList';
import ErrorPage from './pages/ErrorPage';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Newsletter from './components/common/Newsletter'

function App() {
  return ( 
      <Router>
        <div className="App">
          <div className="loaderBox">
            <svg height="100" width="100" fill="#FF5733" viewBox="0 0 55 80" xmlns="http://www.w3.org/2000/svg" aria-label="audio-loading" data-testid="audio-svg"><g transform="matrix(1 0 0 -1 0 80)"><rect width="10" height="20" rx="3"><animate attributeName="height" begin="0s" dur="4.3s" values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="15" width="10" height="80" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="30" width="10" height="50" rx="3"><animate attributeName="height" begin="0s" dur="1.4s" values="50;34;78;23;56;23;34;76;80;54;21;50" calcMode="linear" repeatCount="indefinite"></animate></rect><rect x="45" width="10" height="30" rx="3"><animate attributeName="height" begin="0s" dur="2s" values="30;45;13;80;56;72;45;76;34;23;67;30" calcMode="linear" repeatCount="indefinite"></animate></rect></g></svg>
          </div>
          <Header />
          <Routes>
            <Route 
            path="/"
            element={<Home 
              productDatas = {productDatas}
              flashSale = {flashSale}
              FeaturedCategories = {FeaturedCategories}
              Categories = {Categories}
              Brands = {Brands}
              />}
            />
            <Route 
            path="/home"
            element={<Home/>}
            />
            <Route 
            path="/productlist"
            element={<ProductList/>}
            />
            <Route 
            path="*"
            element={<ErrorPage/>}
            />
          </Routes> 
          <Newsletter />
          <Footer />
        </div> 
      </Router>
  );
}

export default App;
