import React from "react";
import './app-product-form.css'
import Product from "../../../utils/product";

class ProductFormComponent extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            product: props.product || new Product(),
            img: props.product? props.product.img: React.createRef(),
            update: props.update || false
        };
        this.updateForm = this.updateForm.bind(this);
        this.submittedProduct = this.submittedProduct.bind(this)

        this.submitForm = this.submitForm.bind(this);
    }
submittedProduct(){
   this.props.submittedProduct()
}


    updateForm(e){
        let target= e.target.name;
        let value= target==="img"? e.target.files.length ===0 ? '': window.URL.createObjectURL(e.target.files[0]) : e.target.value;

        if (target  != 'img') {
            let new_product = Object.assign({}, this.state.product)
            new_product[target] = value

            this.setState({
                product: new_product
            })
        }
        else{
            this.setState({
                img: value
            })


        }

    }

    submitForm(e){
        this.props.addProduct({
            id: this.state.product.id,
            name: this.state.product.name,
            category: this.state.product.category,
            price: this.state.product.price,
            img: this.state.img

        });

        e.preventDefault();
        this.setState({
            openState: false,
            update: false

        });
        if(this.state.update)
            this.submittedProduct()
    }

    render() {
        let category = [
            {name: 'lenses', value: 'Lenses'},
            {name: 'digital-camera', value: 'Digital Camera'},
        ];
        let name = this.state.product.name.length>0
        const btnClass= ['btn', 'btn-primary', name?'':'disabled'].join(' ')

            return(
                <fieldset>
                    <legend>Product</legend>
            <form onSubmit={this.submitForm}>
              <div className='form-group row'>
                  <label htmlFor="name" className='col-2'>Name:  </label>
                <input className='form-control offset-1 col-md-6' type='text' name='name' value={this.state.product.name} onChange={this.updateForm} id='name'/>
            </div>
                <div className='form-group row'>
                    <label htmlFor="category" className='col-2'>Category:  </label>
                    <select className='form-control offset-1 col-md-8'
                            name='category' value={this.state.product.category}
                            onChange={this.updateForm} id='category'>
                        {category.map((cat, i) =>{
                            return(
                                <option value={cat.value} key={i} name={cat.name}>{cat.value}</option>)
                        })}
                    </select>
                </div>
                <div className='form-group row'>
                    <label htmlFor="price" className='col-2'>Price:  </label>
                    <input className='form-control offset-1 col-md-6' type='number' name='price' value={this.state.product.price} onChange={this.updateForm} id='price'/>
                </div>
                <div className='form-group row'>
                    <label htmlFor="img" className='col-2'>Image:  </label>
                    <input className='form-control offset-1 col-md-6' type='file' ref={this.state.img} name='img' onChange={this.updateForm} />
                </div>
                <div className='form-group'>
                    <button type='submit' className={btnClass} >{this.props.update? 'Update': "Add"}</button>
                    <button className='btn btn-danger' onClick={this.props.cancelProduct}>Cancel</button>
                </div>

            </form>
                </fieldset>

            )
        }


}


export default ProductFormComponent
