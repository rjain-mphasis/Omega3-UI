import React, { Component } from 'react';
import { pageDetails } from '../Mock/Mock';

class Cards extends Component {
    state = {}
    render() {
        const navContent = pageDetails.map((data) => { return data.navbar[0] })
        const pagination = pageDetails.map((data) => { return data.navbar[3] })
        console.log('navContent=>', navContent);
        return (
            <>
                {
                    navContent[0].style.map((data) => {
                        console.log('data=>', data)
                        return (
                            <div className='main_card'>
                                <div className='card'>
                                    <img src={data.backgroundImage} alt="not found" />
                                    <div class="container">
                                        <h4><b>{data.hotelName}</b></h4>
                                        <p>price: {data.price}</p>
                                    </div>
                                    <button className='compare_btn'>Compare</button>
                                    <button className='book_btn'>Book Now</button>
                                </div>
                            </div>
                        )
                    })
                }
                {/* <button>View more</button> */}
                <div className='pagination_div'>
                {
                    pagination[0].style.map((data) => {
                        // const increment = ()=>{ }  
                        
                        return (
                            <div className='pagination_btn'>
                                <a href="" onClick={data.onClick}>{data.type}</a>
                            </div>
                        )
                    })
                }
                </div>
                
            </>
        );
    }
}

export default Cards;