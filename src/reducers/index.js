import { combineReducers } from 'redux';
import { movieList } from './movieList';
import { movieDetail,movieDetail2 } from './movieDetail';
export default combineReducers({
    movieList,
    movieDetail,
    movieDetail2,
});