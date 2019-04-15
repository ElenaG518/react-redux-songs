import React from 'react';
// connect component is written lower case
import { connect} from 'react-redux';

class SongList extends React.Component {    
    render() {
        console.log(this.props);
        return <div>SongList</div>
    };
}

const mapStateToProps = state => {    
    return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);