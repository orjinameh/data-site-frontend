import React from 'react'
import Home from '../pages/home'
import About from '../pages/About'
import Signin from '../pages/auth/signin'
import Signup from '../pages/auth/signup'
import PaystackFund from '../components/paystack'
import Data from '../components/Data'

export default function RouteObjs() {
    return (
        [
            {
                id: 1,
                path: '/',
                element: <Home />
            },
            {
                id: 2,
                path: '/dashboard',
                element: <Home />
            },
            {
                id: 3,
                path: 'auth/login',
                element: <Signin />
            },
            {
                id: 4,
                path: 'auth/signup',
                element: <Signup />
            },
            {
                id: 5,
                path: '/data-sub',
                element: <Data />
            },
            {
                id: 6,
                path: '/fund',
                element: <PaystackFund />
            },
            {
                id: 7,
                path: '/notification',
                element: <Notification />
            },
        ]
    )
}
