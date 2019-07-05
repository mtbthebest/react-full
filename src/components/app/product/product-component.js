import React from "react";
import './app-product.css'
import ProductFormComponent from "../product-form/product-form-component";

class ProductComponent extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            product: props.product || undefined,
            mouseOver: false,
            editState: false
        };
        this.productOnClick = this.productOnClick.bind(this)
        this.submittedProduct = this.submittedProduct.bind(this)
        this.productChangeBackground = this.productChangeBackground.bind(this)
    }
    submittedProduct(){
        this.setState({
            editState: false
        })
    }

    productOnClick() {
        let {product} = this.state;
    }

    productChangeBackground(event) {
        this.setState({
            mouseOver: event.type == 'mouseenter' ? true : false
        })
    }
    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            product: nextProps.product
        })
    }

    render() {
        let {product, mouseOver, editState} = this.state;
        const priceStyle = {
            color: 'green'
        };
        if (this.state.product !== undefined) {
            if(editState){
                return(
                    <ProductFormComponent product={product} submittedProduct={this.submittedProduct} cancelProduct={this.submittedProduct} addProduct={this.props.addProduct} update={true} />
                )
            }
            return (
                <div className='container product' key={product.id}
                     style={mouseOver ? {backgroundColor: '#007bff40'} : {backgroundColor: 'white'}}>
                    <div className='row' onMouseEnter={(e) => this.productChangeBackground(e)}
                         onMouseLeave={(e) => this.productChangeBackground(e)}>
                        <div className='col-3'>
                            <img className='img-fluid product-image' src={product.img} alt={product.name}/>
                        </div>
                        <div className='col-1'>
                            <div className='product-separator'/>
                        </div>
                        <div className='col-8 product-content d-flex justify-content-center'>
                            <div className='row'>
                                <div className='col justify-content-end product-name'>
                                    <h1>{product.name} </h1>
                                </div>
                                <div className='w-100'/>
                                <div className='col'>
                                    <p className='product-category'>< a href='#'
                                                                        onClick={this.productOnClick}>{product.category} </a>
                                    </p>
                                </div>
                                <div className='w-100'/>
                                <div className='col'>
                                    <p className='product-category' style={priceStyle}> {product.price}</p>
                                </div>
                                <div className='w-100'/>
                                <div className='col'>
                                    <p className='product-modify-button'>
                                        <i className='fa fa-edit' onClick={e =>{this.setState({editState: true})}}/>
                                        <i className='fa fa-trash' onClick={this.props.onRemove}/>
                                    </p>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className='container'>Invalid Product</div>
            )
        }
    }
}

export default ProductComponent
