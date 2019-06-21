import React, {Component}from 'react';

import AppNav from "./components/AppNav"
import ShoppingList from "./components/ShoppingList"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemModal from "./components/ItemModal"
import './App.css'
import {Container} from "reactstrap"


import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
    render() {
        return (
            <Provider store ={store}>
            <div className="App">
                <AppNav/>
                <Container>
                <ItemModal/>
                <ShoppingList/>>
                </Container>
            </div>
            </Provider>
        );
    }
}

export default App;
