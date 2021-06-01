import React from 'react';
class ProductListItem extends React.Component{

     specificProduct= () => {
        console.log(this.props);
        localStorage.setItem('currentProductId',this.props.product._id);
        this.props.history.push('/product');
     }

    render(){
        let product=this.props.product;

        return(

            <li onClick={this.specificProduct}>{product.product_name} {product.price} <img src={product.product_image}></img></li>
        )

    }
}
export default ProductListItem;