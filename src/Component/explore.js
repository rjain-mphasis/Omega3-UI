import React, { Component } from 'react';
import { pageDetails } from '../Mock/Mock';

class Explore extends Component {
    state = {}
    render() {
        const explore = pageDetails.map((data) => { return data.explore[0] })
        return (<>
            <h3 className='explore'>Explore more</h3>
            <div className='explore_main'>
                <div className='explore_div'>
                    <h2>Unlock Lesser-Known Wonders of India</h2>
                    {
                        explore[0].style.map((data) => {
                            return (
                                <figure className='figure'>
                                    <img src={data.backgroundImage} alt="not found" />
                                    <figcaption>{data.fig_caption}</figcaption>
                                </figure>
                            )
                        })
                    }
                    {/* <figure className='figure'>
                        <img src="" alt="not found" />
                    </figure> */}
                </div>
            </div>
        </>
        );
    }
}

export default Explore;