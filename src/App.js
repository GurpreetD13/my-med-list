import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Profile from './pages/Profile/Profile';



const App = () => {
    return (
        <BrowserRouter >
            <Nav />
            <main className='main'>
                <div className='main__container'>
                    <Switch >
                        <Route path='/' exact component={Profile} />
                        <Route path='/login' component={Login} />
                        <Route path='/signup' component={Signup} />
                    </Switch>
                </div>
            </main>

        </BrowserRouter>
    );
}

export default App;
