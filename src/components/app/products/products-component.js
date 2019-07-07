import React from 'react'
import ProductComponent from "../product/product-component";
import ProductFormComponent from "../product-form/product-form-component";
import {ProductsContext} from "../context";

class ProductsList extends React.Component{
    static contextType = ProductsContext

    constructor(props, context){
        super(props, context);
    }

    render(){
        return(
           <ProductsContext.Consumer>
                        {context =>(
                            context.map((product) =>(
                    <div className='container'  key={product.id}>
                        <ProductComponent key={product.id} onRemove={(e) =>this.props.removeProduct(product.id)} addProduct={this.props.editProduct} product={product} />
                    </div>)))}
                    </ProductsContext.Consumer>
                )

    }


};

export default ProductsList
