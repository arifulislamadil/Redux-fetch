import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../features/posts/PostsSlice';

const Counter = () => {
    const countNumber = useSelector(state=>state.count.value)
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(increment())}>+</button>
            {countNumber}
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
};

export default Counter;