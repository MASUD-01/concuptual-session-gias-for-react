import React from 'react';
import ModalReact from '../Modal/ModalReact';

const Singalproduct = (props) => {
    // console.log(props.product)
    const { setCartCount } = props;
    return (
        <div data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1500" className='col-md-4'>
            <div className='card p-3 border'>
                <img className='w-50  m-auto' src={props.product.image} alt="" />
                <h1>{props.product.title.slice(0, 20)}</h1>
                <div className='d-flex justify-content-around'>
                    <button onClick={setCartCount} className='btn btn-success'>Add to cart</button>
                    <button className='btn btn-danger'>deletes</button>
                    <ModalReact product={props.product}></ModalReact>
                    {/* <button className='btn btn-info'>details</button> */}
                </div>
            </div>
        </div>
    );
};

export default Singalproduct;