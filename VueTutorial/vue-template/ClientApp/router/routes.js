// import all the components and use them in de routes const
import Counter from '../components/counter'
import FetchData from '../components/fetch-data'
import HomePage from '../components/home-page'

export const routes = [
    { name: 'home', path: '/', component: HomePage, display: 'Home', icon: 'home' },
    { name: 'counter', path: '/counter', component: Counter, display: 'Counter', icon: 'graduation-cap' },
    { name: 'fetch-data', path: '/fetch-data', component: FetchData, display: 'Fetch data', icon: 'list' }
];