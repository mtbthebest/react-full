import React from "react";
import ProductsList from "../products/products-component";
import ProductFormComponent from "../product-form/product-form-component";
import Products from "../../../utils/products";
import Product from "../../../utils/product";
import {ProductsContext} from '../context'

class ProductDashboard extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            products: [],
            editMode: false
        }
        this.addProduct = this.addProduct.bind(this);
        this.cancelProduct = this.cancelProduct.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);


    }
    componentDidMount() {
        let products = new Products().products;
        this.setState({
            products: products
        })
    }
    removeProduct(id){
        let products = this.state.products.filter((product)=>{
            if(product.id !==id){
                return product
            }
        });
        this.setState({
            products: products
        })
    }
    editProduct(_product){
        let products = this.state.products.map((product) =>{
            if(product.id === _product.id){
                return Object.assign({}, product, {..._product})
            }
            return product
        });

        this.setState({
            products: products
        });
    }
    addProduct(product){
        let products = this.state.products.concat(new Product(this.state.products.length + 1, product.name, product.category,product.price, product.img))
        this.setState({
            products: products
        })
    }
    cancelProduct(){
        this.setState({
            editMode: false
        })
    }
    render(){
        let {products, editMode} = this.state;

        const products_list =<ProductsList products={this.state.products} removeProduct={this.removeProduct } editProduct={this.editProduct}/>

        if(!editMode){
            return(
                <ProductsContext.Provider value={this.state.products} >
                <div className='container'>
                    {products_list}
                    <div className='btn btn-primary'>
                        <i className='fa fa-plus fa-2x' style={{backgroundColor: 'blue'}} onClick={e=>this.setState({editMode: true})} />
                    </div>
                </div>
                </ProductsContext.Provider>
            )}

        else {
            return(
                <ProductsContext.Provider value={this.state.products} >
                <div className='container'>
                    {products_list}
                    <ProductFormComponent addProduct={this.addProduct} cancelProduct={this.cancelProduct} />
                </div>
                </ProductsContext.Provider>
            )
        }

    }
}
export default ProductDashboard
