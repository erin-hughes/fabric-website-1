import React from 'react';
import ConceptDescription from '../ConceptDescription/ConceptDescription';
import './ConceptDescriptionContainer.css';

class ConceptDescriptionContainer extends React.Component {
    render() {
        return (
            <div className="concept-description-container">
                <ConceptDescription 
                  heading={'Fabric network'}
                  subheadingRed={'Created and maintained by operators'}
                  description={'Flexible, modular environment with infrastructure such as peers, an ordering service and channels. Smart Contracts need a Fabric network to run on.'}
                />
                <ConceptDescription 
                  heading={'Client applications'}
                  subheadingBlue={'Created by developers'}
                  description={'Invoke transactions using one of Fabric\'s client SDKs. Client apps are how end-users interact with a Fabric network.'}
                />
                <ConceptDescription 
                  heading={'Smart Contracts'}
                  subheadingGrey={'Created by developers, deployed by operators'}
                  description={'Use smart contracts to define transactions available to interact with the ledger, thereby dictating the use case of a Fabric network.'}
                />
            </div>
        );
    }

}

export default ConceptDescriptionContainer;