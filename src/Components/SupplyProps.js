import React from 'react';

class supplyProps extends React.Component {

    render() {
        return (
          <div className="valid">
            <p>Welcome to <strong>{this.props.framework}</strong> sessions.
            The number of the session is <strong>{this.props.sessionNum}</strong>
            </p>
          </div>
        );
      }
  
}

export default supplyProps;