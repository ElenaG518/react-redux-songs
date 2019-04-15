import { combineReducers } from 'redux';
// curly braces means we are importing a named export from the referenced file
import {SelectSong} from '../actions';

const SongsReducer = () => {
    return [
        {title: 'No Scrubs' , duration: '4:05'},
        {title: 'Macarena', duration: '2:30'},
        {title: 'All Star', duration: '3:15'},
        {title: 'We Are the World', duration: '1:45'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    
    return SelectSong;
};

export default combineReducers({
    songs: SongsReducer,
    selectedSong: selectedSongReducer
});