import React from 'react';
import NavBar from '../../../components/NavBar/NavBar';
import NavBarBackground from '../../../components/NavBarBackground/NavBarBackground';
import PageTitle from '../../../components/PageTitle/PageTitle';
import FooterBorder from '../../../components/FooterBorder/FooterBorder';
import FooterContainer from '../../../components/FooterContainer/FooterContainer';
import HeaderCommunityContributors from '../../../components/HeaderCommunityContributors/HeaderCommunityContributors';
import TileContainerGithubRepos from '../../../components/TileContainerGithubRepos/TileContainerGithubRepos';
import TileContainerChatMailingLists from '../../../components/TileContainerChatMailingLists/TileContainerChatMailingLists';
import '../Page.css';

class CommunityContributors extends React.Component {
    
    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <>
                <NavBar />
                <NavBarBackground />
                <HeaderCommunityContributors />
                <div className='page-container'>
                <PageTitle
                    titleName={'Repositories'} />
                <TileContainerGithubRepos />
                <PageTitle
                    titleName={'Chat, mailing lists & more'} 
                    titleSubheading={'Fabric has its own channels on \
                    Hyperledger’s preferred chat platform (Rocket.Chat), \
                    as well as mailing lists, community calls, contributing \
                    guides and wikis.'} />
                <TileContainerChatMailingLists />
                <FooterBorder />
                <FooterContainer />
                </div>
            </>
        )
    }
}

export default CommunityContributors;