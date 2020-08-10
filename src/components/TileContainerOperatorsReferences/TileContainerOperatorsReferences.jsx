import React from 'react';
import './TileContainerOperatorsReferences.css';
import InteractiveTile from '../InteractiveTile/InteractiveTile';

class TileContainerOperatorsReferences extends React.Component {

    render () {
        let version;
        let tileOneLink;
        let tileTwoLink;
        let tileThreeLink;

        if (this.props.fabricVersion === '1.4') {
            version = this.props.fabricVersion;
            tileOneLink = 'https://hyperledger-fabric.readthedocs.io/en/release-1.4/ops_guide.html';
            tileTwoLink = 'https://hyperledger-fabric.readthedocs.io/en/release-1.4/command_ref.html';

            return ( 

                <div className='tile-container-operators'> 
                    <InteractiveTile
                            heading={'Operations guides'}
                            version={version}
                            description={'Task-level guidance on how to go about some of the most \
                            common Fabric operational tasks.'}
                            openInThisTab={false}
                            link={tileOneLink}/>
                    <InteractiveTile 
                            heading={'Commands reference'}
                            version={version}
                            description={'Directory of Fabric commands used in operational tasks.'}
                            openInThisTab={false}
                            link={tileTwoLink}/>
                </div>


            )
            
        } else {
            version = this.props.fabricVersion;
            if (version === '2.0') {
                tileOneLink = 'https://hyperledger-fabric.readthedocs.io/en/release-2.0/ops_guide.html';
                tileTwoLink = 'https://hyperledger-fabric.readthedocs.io/en/release-2.0/command_ref.html';
                tileThreeLink = 'https://hyperledger-fabric.readthedocs.io/en/release-2.0/deployment_guide_overview.html';
            } else {
                tileOneLink = 'https://hyperledger-fabric.readthedocs.io/en/latest/ops_guide.html';
                tileTwoLink = 'https://hyperledger-fabric.readthedocs.io/en/latest/command_ref.html';
                tileThreeLink = 'https://hyperledger-fabric.readthedocs.io/en/latest/deployment_guide_overview.html';
            }
            return (

                <div className='tile-container-operators'> 
                    <InteractiveTile
                            heading={'Operations guides'}
                            version={version}
                            description={'Task-level guidance on how to go about some of the most \
                            common Fabric operational tasks.'}
                            openInThisTab={false}
                            link={tileOneLink}/>
                    <InteractiveTile 
                            heading={'Commands reference'}
                            version={version}
                            description={'Directory of Fabric commands used in operational tasks.'}
                            openInThisTab={false}
                            link={tileTwoLink}/>
                    <InteractiveTile
                            heading={'Deployment guide'}
                            version={version}
                            description={'A high level overview of the sequence for setting up \
                            production Fabric network components, as well as best \
                            practices when deploying.'}
                            openInThisTab={false}
                            link={tileThreeLink}/>
                </div>
            )
        }
    }
}


export default TileContainerOperatorsReferences;
