import React, { useEffect, useState } from 'react';
import Singalproduct from '../Singleproduct/Singalproduct';

const Allproducts = (props) => {
    const { setCartCount } = props;
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1>all products</h1>
            <div className='row container'>
                {
                    products.map(pd => <Singalproduct setCartCount={setCartCount} key={pd.id} product={pd}></Singalproduct>)
                }
            </div>
        </div>
    );
};

export default Allproducts;