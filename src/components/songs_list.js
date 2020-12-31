import React, {Component} from 'react';

const SongsList = props => {
    const {id, movie_name} = (props.location && props.location.state) || {};
    return(
        <div>About Page - data passed - ID = {id} <br/> Movie = {movie_name} </div>
    );
}

export default SongsList;