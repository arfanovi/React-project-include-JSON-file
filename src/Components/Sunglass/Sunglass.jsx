import React from 'react';
import './Sunglass.css';
import Watch from '../Watch/Watch';
import { add, multiply, sub } from '../../Utilities/Calculator';
// import add from '../../Utilities/Calculator';
const Sunglass = () => {
    const first = 50;
    const second = 50;
    // const sum = add(first, second)
    const sum = add(first,second);
    const sub = sub(first,second)
    const mul = multiply(first,second);
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;