import React from 'react';
import NavBar from '../../../components/NavBar/NavBar';
import NavBarBackground from '../../../components/NavBarBackground/NavBarBackground';
import PageTitle from '../../../components/PageTitle/PageTitle';
import FooterBorder from '../../../components/FooterBorder/FooterBorder';
import FooterContainer from '../../../components/FooterContainer/FooterContainer';
import HeaderOperators from '../../../components/HeaderOperators/HeaderOperators';
import TileContainerOperatorsIntro from '../../../components/TileContainerOperatorsIntro/TileContainerOperatorsIntro';
import TileContainerOperatorsReferences from '../../../components/TileContainerOperatorsReferences/TileContainerOperatorsReferences';
import PerformanceSection from '../../../components/PerformanceSection/PerformanceSection';
import Dropdown from '../../../components/Dropdown/Dropdown';
import '../Page.css';

class OperatorsPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fabricVersion: '2.1 (Latest)'
        }

        this.onSelect =  this.onSelect.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0,0);
    }

    onSelect(e) {
        this.setState({
            fabricVersion: e.target.innerHTML
        });
    }

    render() {
        let fabricOptions = [
            {
                id: 0,
                title: '2.1 (Latest)',
                selected: false,
                key: 'fabricVersion'
            },
            {
              id: 1,
              title: '2.0',
              selected: false,
              key: 'fabricVersion'
            },
            {
              id: 2,
              title: '1.4',
              selected: false,
              key: 'fabricVersion'
            }
        ]


        return (
            <>
                <NavBar />
                <NavBarBackground />
                <HeaderOperators />
                <div className='page-container'>
                    <PageTitle
                        titleName={'Getting started'} 
                        titleSubheading={'First time trying Fabric? Start here!'} />
                    <TileContainerOperatorsIntro />
                    <PageTitle
                        titleName={'References'} 
                        titleSubheading={'The most common reference information for Fabric \
                        operators: keep these resources handy! Commands may vary by version \
                        - if you’re not sure what version to use, check releases on GitHub \
                        for further information.'} />
                    <Dropdown 
                        currentValue={this.state.fabricVersion}
                        title='Select Fabric version' 
                        list={fabricOptions}
                        onSelect={this.onSelect}
                        />
                    <TileContainerOperatorsReferences fabricVersion={this.state.fabricVersion}/>
                    <PerformanceSection />
                    <FooterBorder />
                    <FooterContainer />
                </div>
            </>
        );
    }
}

export default OperatorsPage;
