import React, { Component } from 'react';
import Cards from '../Component/Cards';
import Explore from '../Component/explore';
class Home extends Component {
    state = {}
    render() {
        return (
            <div className='main_div'>
            <div className='heading_text'>
                <h2>HOTELS, RESORTS, HOSTELS & MORE</h2>
                <h3>Get the best prices on 2,000,000+ properties, worldwide</h3>
            </div>
                <Cards />
                <Explore/>
            </div>
        );
    }
}

export default Home;
