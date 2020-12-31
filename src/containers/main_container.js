import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Users from '../components/users';
import Home from '../components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import "../styles/custom.css";
import SongsList from '../components/songs_list';

export default class HomePage extends Component {


    render() {
        return (
            <Router>
                <div className="navbar navbar-expand-lg navbar-dark">
                    <Link to={'/home'} className="navbar-brand"><strong>Kannada Song Lyrics</strong></Link>
                    <div className="collapse navbar-collapse" id="navbar-content">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={'/home'} className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/users'} className="nav-link">Users</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/users" component={Users} />
                    <Route path="/songs_list" component={SongsList} />
                </Switch>
            </Router>
        );
    }
}