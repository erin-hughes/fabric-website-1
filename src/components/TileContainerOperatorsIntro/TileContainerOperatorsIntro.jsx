import React from 'react';
import './TileContainerOperatorsIntro.css';
import InteractiveTile from '../InteractiveTile/InteractiveTile';

class TileContainerOperatorsIntro extends React.Component {



    render () {

        return (

            <div className='tile-container-operators'>
                
                <InteractiveTile 
                    heading={'Using the Fabric test network'}
                    description={'Use the test network to learn about Fabric by running nodes on your local machine.'}
                    openInThisTab={false}
                    link={'https://hyperledger-fabric.readthedocs.io/en/release-2.0/test_network.html'}/>
            </div>
        )
    }
}

export default TileContainerOperatorsIntro;