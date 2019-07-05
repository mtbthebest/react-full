import nixon from '../assets/images/nixon.jpg'
class Product {
    constructor(id=10000, name='Nixon', category = 'Digital Camera',price=100, img=''){
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.img=img.length >0?img:nixon ;
    }

}
export default Product
