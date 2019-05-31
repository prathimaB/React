import React from 'react';
import {Link} from "react-router-dom";



class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        collapsed: true,
        };
    }

    toggleNavbar(){
        this.setState({
        collapsed: !this.state.collapsed,
        })
    };

    toggleNavbar=()=>{
        this.setState({
        collapsed: !this.state.collapsed,
        })
    };

    handleClick=(event)=>{
        this.setState({
            collapsed: !this.state.collapsed,
            })
            Array.prototype.slice.call(event.currentTarget.childNodes).filter(val => {
                    return val.classList.remove('active');                                                        
            });
            event.target.parentElement.className = "nav-item active";         

    }   

    render() {
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (

            <nav className="navbar navbar-expand-lg">
            <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
              <div className={`${classOne}`} id="navbarText">      
                    <ul className="navbar-nav" onClick={this.handleClick}>
                        <li className="nav-item active" ><Link to="/" className="nav-link">Home</Link></li>
                        <li className="nav-item" ><Link to="/information" className="nav-link">ReactBasics</Link></li>
                        <li className="nav-item" ><Link to="/services" className="nav-link">ServiceCall</Link></li>
                        <li className="nav-item" ><Link to="/Registration" className="nav-link">Registration</Link></li>
                    </ul>       
            </div> 
           </nav>   
          
                    
        )
      }
  
}

export default Header;