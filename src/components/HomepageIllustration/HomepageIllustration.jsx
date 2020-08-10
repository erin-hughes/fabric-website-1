import React from 'react';
import './HomepageIllustration.css';
import hyperledgerFabricIllustration from '../../res/Fabric website illustration.png';

class HomepageIllustration extends React.Component {

    render () {

        return (
            <div>
                <img src={hyperledgerFabricIllustration} alt="Hyperledger Fabric illustration" className="fabric-illustration"></img>
            </div>
            
        );
    }
}

export default HomepageIllustration;