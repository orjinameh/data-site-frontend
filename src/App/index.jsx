import React, { useContext, useEffect } from 'react';
import Home from '../pages/home';
import { UserContext, UserProvider } from '../context/Context';
import Sidebar from '../components/sidebar';
import NavBar from '../components/home/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RouteObjs from './routes';
import { UserDataProvider } from '../context/UserContext';

const App = () => {
    const RouteObjS = RouteObjs();
    return (
        <UserProvider>
            <UserDataProvider>
                <Router>
                    <div className="app-container">
                        <NavBar />
                        <Sidebar/>
                        <Routes>
                            {
                                RouteObjS.map((obj)=>
                                <Route key={obj.id} path={obj.path} element={obj.element}></Route>
                                )
                            }
                        </Routes>
                    </div>
                </Router>
            </UserDataProvider>
        </UserProvider>
    );
}

export default App;