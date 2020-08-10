import React from 'react';
import './FooterContainer.css';
import FooterItem from '../FooterItem/FooterItem';

class FooterContainer extends React.Component {
    render () {
        return (
            <div className='footer-container'>
                <div className="footer-links-container">
                    <FooterItem
                        heading='Hyperledger Fabric'
                        links={[
                            <a href='/'>Home</a>,
                            <a href='https://stackoverflow.com/questions/tagged/hyperledger-fabric' target='_blank'>StackOverflow</a>,
                            <a href='https://wiki.hyperledger.org/display/fabric/Hyperledger+Fabric' target='_blank'>Hyperledger Fabric Wiki</a>,
                            <a href='https://hyperledger-fabric.readthedocs.io/en/release-2.0/' target='_blank'>Documentation</a>
                        ]}
                    />    
                    <FooterItem
                        heading='Find us'
                        links={[
                            <a href='https://github.com/hyperledger/fabric' target='_blank'>GitHub</a>,
                            <a href='https://chat.hyperledger.org/home' target='_blank'>Rocket.Chat</a>,
                            <a href='https://twitter.com/Hyperledger?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' target='_blank'>Twitter</a>,
                            <a href='https://www.youtube.com/channel/UCCFdgCWH_1vCndMPVqQlwZw' target='_blank'>YouTube</a>
                        ]}
                    />
                    <FooterItem
                        heading='Linux Foundation'
                        links={[
                            <a href='https://www.linuxfoundation.org/privacy/' target='_blank'>Privacy Policy</a>,
                            <a href='https://www.linuxfoundation.org/terms/' target='_blank'>Terms of Service</a>
                        ]}
                    />
                </div>
                <p className='copyright'>Copyright© 2020 contributors to Hyperledger Fabric</p>
            </div>
        )
    }
}

export default FooterContainer;
