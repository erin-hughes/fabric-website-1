import React from 'react';
import './TileContainerGithubRepos.css';
import InteractiveTile from '../InteractiveTile/InteractiveTile';

class TileContainerGithubRepos extends React.Component {

    render () {

        return (

            <div className='tile-container-github-repos' >
                
                <InteractiveTile 
                    heading={'Main repository'}
                    description={'The Hyperledger Fabric repository is \
                    the main repo for contributing to Fabric.'}
                    openInThisTab={false}
                    link={'https://github.com/hyperledger/fabric'} />
                <InteractiveTile
                    heading={'Issue tracking'}
                    description={'Fabric issues are tracked using Jira. \
                    Visit the Jira dashboard to learn more.'}
                    openInThisTab={false}
                    link={'https://jira.hyperledger.org/projects/FAB/issues/'} />
                <InteractiveTile 
                    heading={'Samples'}
                    description={'The Fabric samples repo is not part of the \
                    main code-base, this repo contains demos and samples of \
                    Fabric projects, applications etc.'}
                    openInThisTab={false}
                    link={'https://github.com/hyperledger/fabric-samples'} />
           
            </div>
        )
    }
}

export default TileContainerGithubRepos;