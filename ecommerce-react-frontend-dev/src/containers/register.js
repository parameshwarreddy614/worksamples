import React,{useState} from 'react';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import { registerNewUser } from '../actions/user';
import {connect} from 'react-redux';


function Register(props){

    console.log('props',props);

     const [state,setState]= useState(
        {
                            username: "",
                            password: "",
                            emailId: ""
        }
     );

    const  captureData = (event) =>{
          var name=event.target.name;
          var value=event.target.value;
          setState( previousState => ({
                                        ...previousState, [name]:value
                                    }));
      }

         const  register=(event)=>{
            event.preventDefault();
            console.log('data',state);
           props.registerNewUser(state);
      }

      return(
           
              <div>
        
         <form className="form-horizontal">
          <fieldset>
            <div id="legend">
              <legend className="">Register</legend>
            </div>
            <div className="control-group">
             
              <label className="control-label"  htmlFor="username">Username</label>
              <div className="controls">
                <input onChange={captureData} type="text" size="50"  name="username" placeholder="" className="input-xlarge"/>
                {/* <p className="help-block">Username can contain any letters or numbers, without spaces</p> */}
                 <p style={ {color:'red'}}></p>
              </div>
            </div>
         
            <div className="control-group">
          
              <label className="control-label" htmlFor="email">E-mail</label>
              <div className="controls">
                <input onChange={captureData} size="50" type="text" id="email" name="emailId" placeholder="" className="input-xlarge"/>
                
              </div>
            </div>
         
            <div className="control-group">
              
              <label className="control-label" htmlFor="password">Password</label>
              <div className="controls">
                <input onChange={captureData} size="50" type="password" id="password" name="password" placeholder="" className="input-xlarge"/>
                <p ></p>
              </div>
            </div>
            <div className="control-group">
              
              <div className="controls">
                <button onClick={register} className="btn btn-success">Register</button>
              </div>
            </div>
          </fieldset>
        </form> 
                        </div>
                )
      

}
function mapStatetoProps(appState){
    return {isUserLoggedIn:appState.isUserLoggedIn}
}
// //export default connect( appState => {isUserLoggedIn:appState.isUserLoggedIn}, dispatch => bindActionCreators({registerNewUser},dispatch) ) (Register);
 export default connect(mapStatetoProps, dispatch => bindActionCreators({registerNewUser},dispatch) ) (Register);



// class Register extends React.Component{

//   constructor(){
//       super();
//        console.log("constructor called");

//        this.state= {
//                 username: "",
//                 password: "",
//                 emailId: ""
//        }

//         this.usernameRef=React.createRef();
//         this.passwordRef= React.createRef();


//   }
//      componentDidMount(){
//          console.log("component did mount called");
//      }
//      componentDidUpdate(){
//          console.log("component did update called");
//      }

//       captureData = (event) =>{
//           var name=event.target.name;
//           var value=event.target.value;

//            if(name == "username"){
//                 if(value == ""){
//                     this.usernameRef.current.innerHTML="username required"
//                 }
//                 else
//                  {
//                   this.usernameRef.current.innerHTML=""
//                  }
                 
//            }
//            if(name == "password"){
                   
//             if(value == ""){
//                 this.passwordRef.current.innerHTML="Password required"
//             }
//             else
//              {
//               this.passwordRef.current.innerHTML=""
//              }
             
//        }
//           this.setState({[name]:value});
//       }
//       register=(event)=>{
//             event.preventDefault();
//             console.log('data',this.state);
//             this.props.registerNewUser(this.state);
//       }
//     render(){

//         console.log("render called");
//         console.log(this.props);
//         return(

          
//                 <div>

//  <form className="form-horizontal">
//   <fieldset>
//     <div id="legend">
//       <legend className="">Register</legend>
//     </div>
//     <div className="control-group">
     
//       <label className="control-label"  htmlFor="username">Username</label>
//       <div className="controls">
//         <input onChange={this.captureData} type="text" size="50"  name="username" placeholder="" className="input-xlarge"/>
//         {/* <p className="help-block">Username can contain any letters or numbers, without spaces</p> */}
//          <p style={ {color:'red'}} ref={this.usernameRef}></p>
//       </div>
//     </div>
 
//     <div className="control-group">
  
//       <label className="control-label" htmlFor="email">E-mail</label>
//       <div className="controls">
//         <input onChange={this.captureData} size="50" type="text" id="email" name="emailId" placeholder="" className="input-xlarge"/>
        
//       </div>
//     </div>
 
//     <div className="control-group">
      
//       <label className="control-label" htmlFor="password">Password</label>
//       <div className="controls">
//         <input onChange={this.captureData} size="50" type="password" id="password" name="password" placeholder="" className="input-xlarge"/>
//         <p ref={this.passwordRef}></p>
//       </div>
//     </div>
//     <div className="control-group">
      
//       <div className="controls">
//         <button onClick={this.register} className="btn btn-success">Register</button>
//       </div>
//     </div>
//   </fieldset>
// </form> 
//                 </div>
//         )
//     }
//     componentWillUnmount(){
//         console.log("component unmounted");
//     }
// }
// function mapStatetoProps(appState){
//     return {isUserLoggedIn:appState.isUserLoggedIn}
// }
// //export default connect( appState => {isUserLoggedIn:appState.isUserLoggedIn}, dispatch => bindActionCreators({registerNewUser},dispatch) ) (Register);
// export default connect(mapStatetoProps, dispatch => bindActionCreators({registerNewUser},dispatch) ) (Register);

