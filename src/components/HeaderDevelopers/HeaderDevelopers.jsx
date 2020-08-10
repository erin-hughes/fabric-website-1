import React from 'react';
import './HeaderDevelopers.css';

class HeaderDevelopers extends React.Component {

    render() {
        return (

            <div className="header-container-developers">
                <h1 className="header-title-developers">Developers</h1>
                <div className="header-text-developers">Developers write code in one of the 
                programming languages supported by Fabric: JavaScript,  TypeScript, Java or Go. They 
                create smart contracts which define the use cases of Fabric networks, or client 
                applications that transact on Fabric networks using the deployed contracts.</div>
            </div>
            
        )
    }
}

export default HeaderDevelopers;