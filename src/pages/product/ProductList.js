import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard2 from '../../components/product/ProductCard2';
import productDatas from './../../framework/utils/product'
import categoryDatas from './../../framework/utils/categories'



const body = document.getElementById("root") 
const showLoader = () => body.classList.remove('loader--hide');
const hideLoader = () => body.classList.add('loader--hide');
hideLoader()

function ProductList() {

    const [searchParams, setSearchParams] = useSearchParams();
    searchParams.get("__firebase_request_key")

    const [categoryfilter,setCategoryfilter] = useState(searchParams.get("category") ? searchParams.get("category").split(",")  : []);
    const [productData,setProductData] = useState(productDatas);


    const categoryFilt = function(categoryID){
        showLoader()
        let newArray = []
        if(categoryfilter.includes(categoryID.toString())){
            newArray = categoryfilter.filter((c,k) => c !== categoryID.toString());
            setCategoryfilter(newArray);
        }else{
            newArray = [...categoryfilter,categoryID.toString()];
            setCategoryfilter(newArray);
        }

        setSearchParams("category=" + (newArray.join(",")))
        if(newArray.length > 0){
            setProductData(productDatas.filter((c,k) => {
                return newArray.includes(c.categoryID.toString())
            }))
        }else{
            setProductData(productDatas)
        }
        hideLoader()
    }
    
  return (
    <div className="pageWrapper">
        <div className="container">
            <div className="row">
                <div className="col-xl-2">
                    <div className="list-group">
                        <h3 className="groupTitle">Category</h3>
                        {
                            categoryDatas.map((v,k) => {
                                return (
                                    <label key={k} className="list-group-item">
                                        <input type="checkbox" className="form-checkbox" checked={categoryfilter.includes(v.id.toString()) ? true : ""} name="category[]" onChange={() => categoryFilt(v.id.toString())} />
                                        <span className="title">{v.name}</span>
                                    </label>
                                )
                            })
                        }
                    </div>
                    <div className="list-group">
                        <h3 className="groupTitle">Brands</h3>
                        <label className="list-group-item"><input type="checkbox" className="form-checkbox" name="brand" value="woman" /><span className="title">Shovia</span></label>
                        <label className="list-group-item"><input type="checkbox" className="form-checkbox" name="brand" value="woman" /><span className="title">Fusion</span></label>
                        <label className="list-group-item"><input type="checkbox" className="form-checkbox" name="brand" value="woman" /><span className="title">Hunter Shoes</span></label>
                    </div>
                    <div className="list-group">
                        <h3 className="groupTitle">Price</h3>
                        <label className="list-group-item"><input type="checkbox" className="form-checkbox" name="price[]" value="woman" /><span className="title">Under $50</span></label>
                        <label className="list-group-item"><input type="checkbox" className="form-checkbox" name="price[]" value="woman" /><span className="title">$50 to $100</span></label>
                        <label className="list-group-item"><input type="checkbox" className="form-checkbox" name="price[]" value="woman" /><span className="title">$100 to $150</span></label>
                    </div>
                </div>
                <div className="col-lg">
                    <div className="row">
                        
                        {
                            productData.map(p => {
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
        </div>
    </div>
  )
}

export default ProductList