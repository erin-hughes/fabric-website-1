import React from 'react';
import './HeaderCommunityContributors.css';

class HeaderCommunityContributors extends React.Component {

    render() {
        return (

            <div className="header-container-community">
                <h1 className="header-title-community">Community</h1>
                <div className="header-text-community">Contribute to the Fabric codebase, or join 
                the discussion with other users.</div>
            </div>
            
        )
    }
}

export default HeaderCommunityContributors;