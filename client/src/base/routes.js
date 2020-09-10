import React from 'react'

const Landing = React.lazy(() => import ('../pages/landing/landing'))
const AboutUs = React.lazy(() => import ('../pages/about-us/about-us'))

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
    }
]