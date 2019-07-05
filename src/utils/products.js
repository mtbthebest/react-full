import Product from "./product";
import nixon from '../assets/images/nixon.jpg'
import gizmon from '../assets/images/gizmon.jpeg'
import mark2 from '../assets/images/mark2.jpg'



class Products{

    constructor(){
        this._products = [
            new Product(1,'Nixon + SD','Digital Camera', '500', nixon),
            new Product(2,'M10 MARK 2','Digital Camera', '500', mark2),
            new Product(3,'Gizmon','Lenses', '100', gizmon)

        ]
    }
    get products() {
        return this._products
    }

}
export default Products
