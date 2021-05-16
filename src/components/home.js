import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const posterPath = "../images/";
const getURL = 'http://localhost/lirical_site/get_movies_list.php';
const titleStyle = { marginLeft: 15, fontSize: "150%", color: 'green', fontWeight: 'bold' };

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            movieData: [],
        };
    }

    componentDidMount() {
        axios.get(getURL)
            .then(response => {
                this.setState({
                    isLoaded: true,
                    movieData: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        const { isLoaded, movieData } = this.state;
        if (!isLoaded) {
            return (
                <div className="col">
                    Loading...
                </div>
            );
        }
        else {
            let poster = posterPath + movieData[0].poster;
            console.log(poster);
            return (
                <div className="container">
                    <form>
                        <React.Fragment>
                            {this.state.movieData.map(movie => (
                                <div key={movie.mID} className="content shadow" id={movie.mID}>
                                    <Link to={{ 
                                            pathname: "/songs_list", 
                                            state: {id: movie.mID, movie_name: movie.movie_name} 
                                            }}>
                                    <div className="item">                                       
                                            <img src={posterPath + movie.poster} height="200" width="300" alt={poster} />
                                            <label style={titleStyle}>{movie.movie_name}</label>
                                        
                                    </div></Link>
                                </div>
                            ))}
                        </React.Fragment>
                        
                    </form>
                    <input type="text" className="form-control shadow" data-testid='text1' placeholder="Enter your Name"/>
                </div>
            );
        }

    }
}