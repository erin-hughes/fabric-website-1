import React from 'react';
import './TileContainerDeveloperIntro.css';
import InteractiveTile from '../InteractiveTile/InteractiveTile';

class TileContainerDeveloperIntro extends React.Component {

    render () {

        return (

            <div className='tile-container-developer' >
                
                <InteractiveTile 
                    heading={'Install developer tools'}
                    description={'A free, open source extension \
                    for Visual Studio Code (provided by IBM) that \
                    comes with tutorials.'} 
                    openInThisTab={false}
                    link={'https://marketplace.visualstudio.com/items?itemName=IBMBlockchain.ibm-blockchain-platform'}/>
                <InteractiveTile 
                    heading={'Commercial paper tutorial'}
                    description={'A tutorial themed on \
                    financial assets examining all aspects of a \
                    solution built on Fabric.'} 
                    openInThisTab={false}
                    link={'https://hyperledger-fabric.readthedocs.io/en/release-1.4/tutorial/commercial_paper.html'}/>
            </div>
        )
    }
}

export default TileContainerDeveloperIntro;



/* how do you get the link to open in a new tab automatically? */