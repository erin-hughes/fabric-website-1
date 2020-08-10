import React from 'react';
import './FooterItem.css';

class Footer extends React.Component {

    render () {

        return (
             <div className='footer-item'>
                <h3 className="link-heading">{this.props.heading}</h3>
                <div className="links-container">
                    {this.props.links}
                </div>
             </div>
        )
    }
}

export default Footer;