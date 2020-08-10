import React from 'react';
import './PerformanceSection.css';
import caliperImage from '../../res/Caliper.png';

class PerformanceSection extends React.Component {

    render () {

        return (

       
            <div className='performance-section'> 
                <div className='performance-title-container'>
                    <div className="page-title-performance">Performance</div>
                    <a href='https://www.hyperledger.org/projects/caliper'>
                         <img src={caliperImage} 
                         className="caliper-image"
                         alt="Caliper logo"></img>
                    </a>
                </div>
                <div className="title-subheading-performance">Hyperledger Caliper is a 
                project that concentrates on performance testing and benchmarking for 
                Hyperledger runtimes (Fabric included). To view published performance 
                reports and learn how to conduct your own performance tests, we recommend 
                visiting the <a href="https://hyperledger.github.io/caliper/" target='_blank'>Hyperledger Caliper</a> performance website.</div>
                
            </div>
        )
    }
}

export default PerformanceSection;

