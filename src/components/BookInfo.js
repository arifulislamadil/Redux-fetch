import React from 'react';
import { useParams } from 'react-router-dom';

const BookInfo = () => {
    const {id} = useParams()
    return (
        <div>
            <h5>Book Details {id}</h5>
        </div>
    );
};

export default BookInfo;