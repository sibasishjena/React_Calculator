import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MyInfo from './components/MyInfo'
import ToDoList from './todolist_components/ToDoList'
import Contacts from './contact_card_components/Contacts'
import JokeList from './joke_components/JokeList'
import Calculator from './calculator_components/Calculator'

function MyApp()
{
    return (
        <ul>
            <li>Google</li>
            <li>Facebook</li>
            <li>Instagram</li>
        </ul>
    )
}

ReactDOM.render(<Calculator />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
