import React from 'react';
import './InteractiveTile.css';
import goToPage from '../../res/arrow--right.svg';
import openNewTab from '../../res/launch.svg';

class InteractiveTile extends React.Component {

    constructor(props) {
        super(props);

        this.redirectToLink = this.redirectToLink.bind(this);
    }
    
    redirectToLink() {
        if (this.props.openInThisTab === true) {
            window.open(this.props.link, '_self');
        } else {
            window.open(this.props.link, '_blank');
        }
    }

    render () {
        let icon;
        if(this.props.openInThisTab === true) {
            icon = goToPage;
        } else {
            icon = openNewTab;
        }

        return (
            <div className='interactive-tile' onClick={this.redirectToLink}> 
                 
                 <h3 className='tile-heading'>{this.props.heading}</h3>
                 <p className='version-number'>{this.props.version}</p>
                 <p>{this.props.description}</p>
                 <img src={icon} alt="Let's go" className="go-to-page-icon"></img>
 
            </div>
        )
    }
}

export default InteractiveTile;