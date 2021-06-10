import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Filme from './components/Filme'
import Favoritos from './components/Favoritos'
import NotFound from './components/NotFound'

const Routes = () => {
    return(
        <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/filme/:id' component={Filme}></Route>
                <Route exact path='/favoritos' component={Favoritos}></Route>
                <Route path='*' component={NotFound}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes