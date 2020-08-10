import React from 'react';
import './HeaderHomepage.css';
// import pageHeaderBackground from '../../res/Fabric website header.png';

class HeaderHomepage extends React.Component {

    render() {
        return (

            <div className="header-container">
                <h1 className="header-title">Using Hyperledger Fabric</h1>
                <div className="header-text-reg"><text style={{ fontWeight: 'bold' }}>Hyperledger 
                Fabric </text> is an enterprise-grade permissioned distributed ledger framework for 
                developing solutions and applications. Its modular and versatile design satisfies a 
                broad range of industry use cases. It offers a unique approach to consensus that 
                enables performance at scale while preserving privacy.</div>
            </div>
            
        )
    }
}

export default HeaderHomepage;


