import React from 'react'
import ProductComponent from "../product/product-component";
import ProductFormComponent from "../product-form/product-form-component";

class ProductsList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            products:props.products ||  []
        }

    }
    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            products: nextProps.products
        })
    }

    render(){
        let {products} = this.state

        return(
            products.map((product, i) =>{
                return (
                    <div className='container'  key={i}>
                        <ProductComponent onRemove={(e) =>this.props.removeProduct(product.id)} addProduct={this.props.editProduct} product={product} />
                    </div>
                )
            })
        )
    }


};

export default ProductsList
