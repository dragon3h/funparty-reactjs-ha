import React, {Component} from 'react';

import './bouncy-castle.styles.scss';

import CustomButton from '../../../../shared/components/custom-button/custom-button.component';

class BouncyCastle extends Component {
  constructor(props) {
    super(props);
  }
  
  ShowDetails(event) {
    console.log(event.target.id);
  }
  
  render() {
    const {bouncyCastle} = this.props;
    return (
        <div className="grid-body__row">
          <div className="grid-body__cell">{bouncyCastle.code}</div>
          <div className="grid-body__cell">{bouncyCastle.name}</div>
          <div className="grid-body__cell">{bouncyCastle.img}</div>
          <div
              className="grid-body__cell">Category: {bouncyCastle.category}</div>
          <div className="grid-body__cell">{bouncyCastle.description}</div>
          <div
              className="grid-body__cell">{bouncyCastle.restrictions.minAge} - {bouncyCastle.restrictions.maxAge}</div>
          <div
              className="grid-body__cell">{bouncyCastle.restrictions.maxQuantity}</div>
          <div className="grid-body__cell">{bouncyCastle.isWater ?
              'Yes' :
              'No'}</div>
          <div className="grid-body__cell">{bouncyCastle.rentPrice} CAD</div>
          <div className="grid-body__cell action">
            <CustomButton onClick={this.ShowDetails} id={bouncyCastle.id}>
              Details
            </CustomButton>
          </div>
        </div>
    );
  }
  
};

export default BouncyCastle;
