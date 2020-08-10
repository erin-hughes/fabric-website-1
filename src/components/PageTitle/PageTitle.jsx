import React from 'react';
import './PageTitle.css';


class PageTitle extends React.Component {

    render() {
        return (

            <div>
                <div className="page-title">{this.props.titleName}</div>
                <div className="title-subheading">{this.props.titleSubheading}</div>
            </div>
        )
        }
    }

export default PageTitle;