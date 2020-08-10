import React from 'react';
import './TileContainerChatMailingLists.css';
import InteractiveTile from '../InteractiveTile/InteractiveTile';

class TileContainerChatMailingLists extends React.Component {

    render () {

        return (

            <div className='tile-container-chat-mailinglists' >
                
                <InteractiveTile 
                    heading={'Community'}
                    description={'To join any of the \
                    communication channels, check out the \
                    “Community” section on the Fabric Github ReadMe.'} 
                    openInThisTab={false}
                    link={'https://github.com/hyperledger/fabric/blob/master/README.md'} />
                <InteractiveTile 
                    heading={'Contributing guide'}
                    description={'Find out how to contribute effectively to Hyperledger Fabric.'}
                    openInThisTab={false}
                    link={'https://hyperledger-fabric.readthedocs.io/en/release-2.0/CONTRIBUTING.html'} />
            </div>
        )
    }
}

export default TileContainerChatMailingLists;