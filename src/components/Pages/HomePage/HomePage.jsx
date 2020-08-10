import React from 'react';
import NavBar from '../../../components/NavBar/NavBar';
import NavBarBackground from '../../../components/NavBarBackground/NavBarBackground';
import HeaderHomepage from '../../../components/HeaderHomepage/HeaderHomepage';
import PageTitle from '../../../components/PageTitle/PageTitle';
import ConceptDescriptionContainer from '../../../components/ConceptDescriptionContainer/ConceptDescriptionContainer';
import HomepageIllustration from '../../../components/HomepageIllustration/HomepageIllustration';
import FooterBorder from '../../../components/FooterBorder/FooterBorder';
import FooterContainer from '../../../components/FooterContainer/FooterContainer';
import TileContainerHome from '../../../components/TileContainerHome/TileContainerHome';
import '../Page.css';


class HomePage extends React.Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <>
                <NavBar />
                <NavBarBackground />
                <HeaderHomepage />
                <div className='page-container'>
                    <PageTitle 
                        titleName={'What would you like to use Hyperledger Fabric for?'}
                        titleSubheading={'The best place to start depends on whether you \
                        want to operate Fabric networks or develop smart contracts and/or \
                        client applications. This short overview will help you pick!'} />
                    <ConceptDescriptionContainer />
                    <HomepageIllustration />
                    <TileContainerHome />
                    <FooterBorder />
                    <FooterContainer />
                    </div>
            </>
        );
    }

}

export default HomePage;