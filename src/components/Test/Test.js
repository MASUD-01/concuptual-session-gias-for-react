import React, { useState } from 'react';

const Test = ({ count }) => {
    // console.log(count)
    const [counts, setCount] = useState(0)

    // const minus = () => {
    //     setCount(counts - 1)
    // }
    // const plus = () => {
    //     setCount(counts + 1)
    // }
    // console.log(counts)
    return (
        <div>
            <h1>this is test {counts}</h1>
            <div className='count mt-5'>
                <button onClick={() => { setCount(counts + 1) }} className='mt-3 p-3'>+</button>
                <button onClick={() => { setCount(counts - 1) }} className='mt-3 p-3'>-</button>

            </div>
        </div>
    );

};

export default Test;