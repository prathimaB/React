import React from 'react';
import SupplyProps from '../Components/SupplyProps';
import PropType from '../Components/PropType';

class ReactBasics extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          sum : 0
        }
      }

    calculateSum = (data) => {
            console.log(data);
            this.setState({sum: Math.floor(Math.random() * 10)})
    }

    render() {
        return (
          <div className="component reactBasic">
            <h3>Assignment 3</h3>
            <ul>
              <li>
                <p className="head">Stateful component</p>
                <div className="sumDiv">
                  <button onClick={this.calculateSum}>Get a random number</button>
                  <p>Random number between 1 and 9: <strong>{this.state.sum}</strong></p>
                </div>
              </li>
              <li>
                <p className="head">Supplying the data to Stateless component</p>
                <SupplyProps framework="React" sessionNum="13"></SupplyProps>
                <SupplyProps framework="Angular" sessionNum="10"></SupplyProps>
              </li>
              <li>
                <p className="head">Validating props using PropType</p>
                <PropType name="Associate Name" id={66666} domain="CDB Interactive"></PropType>
              </li>
            </ul>
          </div>
        )
      }
  
}

export default ReactBasics;