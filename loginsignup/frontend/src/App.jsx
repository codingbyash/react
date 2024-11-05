import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
    return (
        <div>
            <h1>Login</h1>
            <Login />
            <h1>Signup</h1>
            <Signup />
        </div>
    );
};

export default App;
