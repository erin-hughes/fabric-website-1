import React from 'react';
import './HeaderOperators.css';

class HeaderOperators extends React.Component {

    render() {
        return (

            <div className="header-container-operators">
                <h1 className="header-title-operators">Operators</h1>
                <div className="header-text-operators">Operators create and maintain Fabric networks. New operators will learn how to stand up their own Fabric network from scratch, then perform operational tasks like adding peers, creating channels or deploying smart contracts that a developer has created.</div>
            </div>
            
        )
    }
}

export default HeaderOperators;