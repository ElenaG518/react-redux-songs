import { combineReducers } from 'redux';

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
    
    return selectedSong;
};

export default combineReducers({
    songs: SongsReducer,
    selectedSong: selectedSongReducer
});