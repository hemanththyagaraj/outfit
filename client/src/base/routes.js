import React from 'react'

const Landing = React.lazy(() => import ('../pages/landing/landing'))
const AboutUs = React.lazy(() => import ('../pages/about-us/about-us'))
const Login = React.lazy(() => import('../pages/login/login'))
const Register = React.lazy(() => import('../pages/register/register'))

export const routes = [
    {
        path: '/',
        Component: Landing,
        isProtected: false
    },
    {
        path: '/about_us',
        Component: AboutUs,
        isProtected: false
    },
    {
        path:'/login',
        Component: Login,
        isProtected: false
    },
    {
        path: '/register',
        Component: Register,
        isProtected: false
    }
]