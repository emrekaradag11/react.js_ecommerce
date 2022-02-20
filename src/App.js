import Layout from './components/layout/Layout';
import productDatas from './framework/utils/product'
import flashSale from './framework/utils/products_flash_sale'
import FeaturedCategories from './framework/utils/featured_categories'
import Categories from './framework/utils/categories'
import Brands from './framework/utils/brands'

function App() {
  return (
    <div className="App">
      <Layout 
        productDatas = {productDatas}
        flashSale = {flashSale}
        FeaturedCategories = {FeaturedCategories}
        Categories = {Categories}
        Brands = {Brands}
        />
    </div>
  );
}

export default App;
