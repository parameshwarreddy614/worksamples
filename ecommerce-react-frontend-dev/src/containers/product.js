
import React from 'react';
import {bindActionCreators} from 'redux';
import {getSpecificProduct} from '../actions/product';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';

class Product extends React.Component{

     componentDidMount(){
       this.props.getSpecificProduct(localStorage.getItem('currentProductId'))
     }
    render(){

         console.log('currentProduct',this.props.currentProduct);
        return(
                <div className="container">
  <h2>Product View</h2>
  <div className="card" style={{width:'400px'}}>
    <img className="card-img-top" src={this.props.currentProduct.product_image} alt="Card image" style={{width:'100px'}}/>
    <div className="card-body">
      <h4 className="card-title">{this.props.currentProduct.product_name}</h4>
      <p className="card-text">The price of the product is {this.props.currentProduct.price}</p>
      <a href="#" className="btn btn-primary">Add to Cart</a>
      <NavLink to="/" className="btn btn-primary">back</NavLink>
    </div>
  </div>
  <br></br>

  </div>
        )
       
    }
}

function mapStatetoProps(appState){
    return {
        currentProduct:appState.currentProduct
    }
}
// //export default connect( appState => {isUserLoggedIn:appState.isUserLoggedIn}, dispatch => bindActionCreators({registerNewUser},dispatch) ) (Register);
 export default connect(mapStatetoProps, dispatch => bindActionCreators({getSpecificProduct},dispatch) ) (Product);

