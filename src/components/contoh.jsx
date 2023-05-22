import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function contoh(props) {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/contoh' element={<Contoh/>}></Route>
                    <Route path='/contoh' element={<Contoh/>}></Route>
                    <Route path='/contoh' element={<Contoh/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default contoh;