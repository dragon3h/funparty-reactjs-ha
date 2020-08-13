import React, {Component} from 'react';

import './bouncy-castles.styles.scss';

import bouncyCastles from '../../../../../../funparty-reactjs-ha/src/assets/bouncy-castles.json';
import BouncyCastle from '../../components/bouncy-castle/bouncy-castle.component';

class BouncyCastlesComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      bouncyCastles: bouncyCastles,
    };
  }
  
  render() {
    const {bouncyCastles} = this.state;
    return (
        <div className="bouncy-castles">
          <h1>Bouncy Castles</h1>
          <div className="grid">
            <div className="grid-header">
              <div className="grid-header__row">
                <div className="grid-header__cell">
                  <span className="grid-header__cell-text">
                    Code
                  </span>
                </div>
                <div className="grid-header__cell name">
                  <span className="grid-header__cell-text">
                    Name
                  </span>
                </div>
                <div className="grid-header__cell">
                  <span className="grid-header__cell-text">
                    Preview
                  </span>
                </div>
                <div className="grid-header__cell">
                  <span className="grid-header__cell-text">
                    Category
                  </span>
                </div>
                <div className="grid-header__cell">
                  <span className="grid-header__cell-text">
                    Description
                  </span>
                </div>
                <div className="grid-header__cell">
                  <span className="grid-header__cell-text">
                    Age
                  </span>
                </div>
                <div className="grid-header__cell">
                  <span className="grid-header__cell-text">
                    Max Quantity
                  </span>
                </div>
                <div className="grid-header__cell">
                  <span className="grid-header__cell-text">
                    Water Slide
                  </span>
                </div>
                <div className="grid-header__cell">
                  <span className="grid-header__cell-text">
                    Rent Price
                  </span>
                </div>
                <div className="grid-header__cell action">
                  <span className="grid-header__cell-text">
                    Details
                  </span>
                </div>
              </div>
            </div>
            <div className="grid-body">
              {
                bouncyCastles.map((bouncyCastle) => (
                    <BouncyCastle key={bouncyCastle.id}
                                  bouncyCastle={bouncyCastle}/>
                ))
              }
            </div>
          </div>
        </div>
    );
  }
}

export default BouncyCastlesComponent;