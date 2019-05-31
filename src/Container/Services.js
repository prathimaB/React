import React from 'react';
import Axios from 'axios';

class Registration extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            personData:[]
        }
    }

    componentDidMount() {
        Axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const persons = res.data;
            console.log(persons);
            this.setState({ personData:persons });
          })
      }

      render() {
        return (
            <div className="table-responsive component">
                <table className="table">
                    <thead className="thead-light ">
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        </tr>
                    </thead>
                    <tbody>                       
                            {this.state.personData.map(person =>  <tr key={person.id}><td>{person.id}</td><td>{person.name}</td><td>{person.username}</td><td>{person.email}</td><td>{person.address.street}, {person.address.suite}, {person.address.city}</td></tr>)}
                    </tbody>
                </table>
                
                    
             </div>
        )
      }
}


export default Registration;