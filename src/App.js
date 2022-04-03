import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import MedList from './pages/MedList/MedList';
import AddMedication from './pages/AddMedication/AddMedication';
import UpdateInstructions from './pages/UpdateInstructions/UpdateInstructions';



const App = () => {
    return (
        <BrowserRouter >
            <Nav />
            <Switch>
                <Route path='/' exact component={MedList} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <Route path='/medications/add' component={AddMedication} />
                <Route path='/medications/update' component={UpdateInstructions} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
