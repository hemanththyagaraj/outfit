import React from 'react'

const Landing = React.lazy(() => import ('../pages/landing/landing'))
const AboutUs = React.lazy(() => import ('../pages/about-us/about-us'))
const Login = React.lazy(() => import('../pages/login/login'))
const Register = React.lazy(() => import('../pages/register/register'))
const NewProduct = React.lazy(() => import('../pages/add-new-product/add-new-product'))

export const routes = [
    {
        path: '/',
        component: Landing,
        isProtected: false
    },
    {
        path: '/about_us',
        component: AboutUs,
        isProtected: false
    },
    {
        path:'/login',
        component: Login,
        isProtected: false
    },
    {
        path: '/register',
        component: Register,
        isProtected: false
    },
    {
        path: '/add_product',
        component: NewProduct,
        isProtected: false
    }
]