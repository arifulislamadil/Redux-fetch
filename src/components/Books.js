import React from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

const Books = () => {
    return (
        <div>
            <div>
                <h3>Book 1</h3>
                <h3>Book 2</h3>
                <h3>Book 3</h3>
                <Outlet />
            </div>
        </div>
    );
};

export default Books;