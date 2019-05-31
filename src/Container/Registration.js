import React from 'react';
import Axios from 'axios';

const initialstate = {}

class Registration extends React.Component {
   
    constructor(props){
        super(props);
        this.state = {
            fname:'',
            middlename:'',
            lname:'',
            city:'',
            email:'',
            terms : false,
            fnameErr :'',
            lnameErr : '',
            cityErr : '',
            emailErr : '',
            termsErr : '',
            requireErr: '', 
        }

    }

    handleOnChange = event =>{
        const value = event.target.type === "text" ? event.target.value : null;
        const name = event.target.name;
        this.setState({[name]: value},() => { this.validateField(name, value) });
    };

    handleCheck = event=> {
        this.setState({
            terms : event.target.checked,
            termsErr : !this.state.terms ? '' : 'Please accept the terms and conditions'
        });

    }

    validateField = (name, value) => {
        let fnameErrMsg = this.state.fnameErr, 
            lnameErrMsg = this.state.lnameErr, 
            cityErrMsg=this.state.termsErr,
            emailErrMsg=this.state.emailErr,
            emailValid=false,
            emailReg= /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;            

        switch(name) {
            case 'fname' :
                fnameErrMsg = this.state.fname.length > 3 ? '' : 'First Name should be more than 3 characters';
                break;
            case 'lname' :
                lnameErrMsg = this.state.lname.length > 2 ? '' : 'Last Name should be more than 2 characters';
                break;
            case 'city' :
                cityErrMsg = this.state.city.length > 3 ? '' : 'City Name should be more than 3 characters';
                break;  
            case 'email' :
                emailValid = emailReg.test(value);
                emailErrMsg = emailValid ? '' : 'Please enter a valid email id';
                break;                    
            default:
              break;
          }
          this.setState({fnameErr:fnameErrMsg,lnameErr:lnameErrMsg,cityErr:cityErrMsg,emailErr:emailErrMsg});
    }

    handleSubmit = event =>{            
        event.preventDefault();

        let requiredFields = true;
        let requireErrMsg = '';
        if (this.state.fname === '' || this.state.lname === '' || this.state.email === '' || this.state.city === ''){
            requiredFields = false;
            requireErrMsg = requiredFields ? '' : "Please enter all the required fields";
            this.setState({requireErr:requireErrMsg});
            return false;
        }
        
        let checkErrMsg;
        checkErrMsg = this.state.terms ? '' : 'Please accept the terms and conditions';
        this.setState({termsErr:checkErrMsg});
        //if (!this.state.terms) return false;

        const {fname,middlename,lname,email,city,} = this.state;
        const user = {
            firstname : fname,
            middlename : middlename,
            lastname : lname,
            email : email,
            city : city
        }  
        
        Axios.post('https://jsonplaceholder.typicode.com/users',{user});
        };

    resetState = () =>{
        this.setState(initialstate);
        console.log(this.state)
    }
      render() {
        return (
          <div className="register component">
                <h3>Registration Form</h3>
               <form onSubmit={this.handleSubmit}>
                    <div className="errorMessage">{this.state.requireErr}</div> 
                    <label>
                        <span className="aestrik">*</span>First Name:
                        <input type="text" name="fname" onBlur={this.handleOnChange}/>
                        <div className="errorMessage">{this.state.fnameErr}</div>
                    </label>                    

                    <label>
                        Middle Name:
                        <input type="text" name="middlename" />
                    </label>

                    <label>
                    <span className="aestrik">*</span>Last Name:
                        <input type="text" name="lname" onBlur={this.handleOnChange}/>
                        <div className="errorMessage">{this.state.lnameErr}</div>
                    </label>
                    
                    <label>
                    <span className="aestrik">*</span>Email:
                        <input type="text" name="email" onBlur={this.handleOnChange}/>
                        <div className="errorMessage">{this.state.emailErr}</div>
                    </label>

                    <label>
                    <span className="aestrik">*</span>City:
                        <input type="text" name="city" onBlur={this.handleOnChange}/>
                        <div className="errorMessage">{this.state.cityErr}</div>
                    </label>
                    
                    <div className="term-sec">
                    <input type="checkbox" name="terms" className="terms-check" onChange={this.handleCheck}/>
                    <label className="term-text">                  
                        I have read the terms and conditions                        
                    </label>                             
                    </div>      
                    <div className="errorMessage">{this.state.termsErr}</div> 
                    
                    <input type="submit" value="Submit" className="submit"/>
                </form>
          </div>
        )
      }
  
}


export default Registration;