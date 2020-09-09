import Landing from "../pages/landing/landing";
import AboutUs from "../pages/about-us/about-us";

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
    }
]