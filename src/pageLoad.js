import createHomePage from './restaurant'
import createTabs from './tabs'

export default function initialLoad(){
    createTabs()
    createHomePage()
}