// import all the components and use them in de routes const
import HomePage from '../components/home-page'
import Counter from '../components/counter'
import FetchData from '../components/fetch-data'

export const routes = [
    { name: 'home', path: '/', component: HomePage, display: 'Home', icon: 'home' },
    { name: 'counter', path: '/counter', component: Counter, display: 'Counter', icon: 'graduation-cap' },
    { name: 'fetch-data', path: '/fetchdata', component: FetchData, display: 'Fetch data', icon: 'list' }
];