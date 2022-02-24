
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import JobsPage from './components/UI/JobsPage';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/jobs" element={<JobsPage/>}></Route>
            </Routes>
        </div>
    );
}

export default App;