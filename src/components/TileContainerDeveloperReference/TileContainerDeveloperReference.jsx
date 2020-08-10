import React from 'react';
import './TileContainerDeveloperReference.css';
import InteractiveTileColour from '../InteractiveTileColour/InteractiveTileColour';
import nodeLogo from '../../res/nodejs.png';
import javaLogo from '../../res/java.png';
import goLogo from '../../res/go.png';


class TileContainerDeveloperReference extends React.Component {

    render () {

        return (
            <>
                <div className='chaincode-development'>
                    <h1 className='development-header'>Chaincode development</h1>
                    <p className='development-paragraph'>Get started on developing smart contracts. Explore the links below to 
                    check out the latest versions of the documentation for Java, node.js and Go. </p>
                    <div className='tile-container-developer-reference'> 
                        <InteractiveTileColour
                            customStyle={'node-styling'}
                            headingColour={'node.js'} 
                            version={'v2.1'}
                            descriptionColour={'Go to the API docs'} 
                            logo={nodeLogo} 
                            logoStyle='tall-logo-style' 
                            link={'https://hyperledger.github.io/fabric-chaincode-node/'}/>
                        <InteractiveTileColour
                            customStyle={'java-styling'}
                            headingColour={'Java'}
                            version={'v2.1'}
                            descriptionColour={'Go to the API doc'} 
                            logo={javaLogo} 
                            logoStyle='tall-logo-style' 
                            link={'https://hyperledger.github.io/fabric-chaincode-java/'}/>
                        <InteractiveTileColour
                            customStyle={'go-styling'}
                            headingColour={'Go'}
                            version={'v1.0'}
                            descriptionColour={'Go to the GitHub repo'} 
                            logo={goLogo} 
                            logoStyle='short-logo-style'
                            link={'https://github.com/hyperledger/fabric-contract-api-go'}/>
                    </div>
                </div>

                <div className='gatewaysdk-development'>
                    <h1 className='development-header'>Gateway SDK development</h1>
                    <p className='development-paragraph'>The Fabric Gateway SDK allows applications to interact with a Fabric Blockchain network. Learn more
                    about getting started with Fabric Gateway SDKs below. </p>
                <div className='tile-container-developer-reference'> 
                    <InteractiveTileColour
                     customStyle={'node-styling'}
                         headingColour={'node.js'}
                         version={'v2.0'} 
                         descriptionColour={'Go to the API doc'} 
                         logo={nodeLogo} 
                         logoStyle='tall-logo-style'
                         link={'https://hyperledger.github.io/fabric-sdk-node/master/index.html'} />
                     <InteractiveTileColour
                     customStyle={'java-styling'}
                         headingColour={'Java'}
                         version={'v2.0'} 
                         descriptionColour={'Go to the API doc'} 
                         logo={javaLogo} 
                         logoStyle='tall-logo-style'
                         link={'https://hyperledger.github.io/fabric-gateway-java/'} />
                     <InteractiveTileColour
                         customStyle={'go-styling'}
                         headingColour={'Go'}
                         version={'v1.0.0-beta1'} 
                         descriptionColour={'Go to the GitHub repo'} 
                         logo={goLogo} 
                         logoStyle='short-logo-style'
                         link={'https://github.com/hyperledger/fabric-sdk-go'} />
                    </div>
                </div>
            </>
        )
    }
}

export default TileContainerDeveloperReference;