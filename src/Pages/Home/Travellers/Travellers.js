import React from 'react';
import Traveller from '../Traveller/Traveller'
import traveller1 from '../../../images/reviewer/reviewer-1.png';
import traveller2 from '../../../images/reviewer/reviewer-2.png';
import traveller3 from '../../../images/reviewer/reviewer-3.png';

const travellers = [
    {
        id: 1,
        img: traveller1,
        name: 'Dina James',
        comment: '"Thank you very much for organising a wonderful stay and for providing individual care. we really enjoyed the cultural programmes organised in the evenings and the houseboat cruise was marvellous....."'
    },
    {
        id: 2,
        img: traveller2,
        name: 'Zahed Hassan',
        comment: '"Thank you very much for organising a wonderful stay and for providing individual care. we really enjoyed the cultural programmes organised in the evenings and the houseboat cruise was marvellous....."'
    },
    {
        id: 3,
        img: traveller3,
        name: 'Shwan Poll',
        comment: '"Thank you very much for organising a wonderful stay and for providing individual care. we really enjoyed the cultural programmes organised in the evenings and the houseboat cruise was marvellous....."'
    }
]

const Travellers = () => {
    return (
        <div id="travellers" className="container">
            <h4 className=" my-5">Our Traveller Say</h4>
            <h2>What Our Traveller Say About Us</h2>
            <div className="row">
            {
                travellers.map(traveller =><Traveller
                key={traveller.id}
                traveller={traveller}></Traveller>)
            }
            </div>
        </div>
    );
};

export default Travellers;