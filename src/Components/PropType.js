import React from 'react';
import propTypes from 'prop-types'; 

class PropType extends React.Component {
    render() {
        return (
          <div className="valid">
            <p>Please find the Associate details below:<br/>
              Associate Name: <strong>{this.props.name}</strong> <br/>
              Associate ID: <strong>{this.props.id}</strong> <br/>
              Domain: <strong>{this.props.domain}</strong> 
            </p>
          </div>
        );
      }
  
}

PropType.propTypes = {
  name: propTypes.string,
  id: propTypes.number,
  domain :propTypes.string
};

export default PropType;