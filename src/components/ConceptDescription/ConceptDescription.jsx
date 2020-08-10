import React from 'react';
import './ConceptDescription.css';


class ConceptDescription extends React.Component {

    render () {
        

        return (
            <div className='concept-description'>
                <div className="description-heading-one">{this.props.heading}</div>
                <div style={{color: '#890300'}}>{this.props.subheadingRed}</div>
                <div style={{color: '#008783'}}>{this.props.subheadingBlue}</div>
                <div style={{color: 'grey'}}>{this.props.subheadingGrey}</div>
                <p className='paragraph'>{this.props.description}</p>
                
            </div>
        )
    }
}

export default ConceptDescription;