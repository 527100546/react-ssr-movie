import { MOVIE_LIST_REQUEST, MOVIE_LIST_SUCCESS, MOVIE_LIST_FAILURE } from '../constants/actionTypes'
import { CALL_API } from '../middleware/api';

function fetchMovieList() {
    return {
        [CALL_API]: {
            types: [MOVIE_LIST_REQUEST, MOVIE_LIST_SUCCESS, MOVIE_LIST_FAILURE],
            endpoint: '/v2/activities?pageIndex=1&pageSize=10&categoryId=1',
        }
    };
}

export function loadMovieList() {
    return (dispatch, getState) => {
        const { receivedAt } = getState().movieList;

        if (receivedAt && (Date.now() - receivedAt) < 1000) {
            return null;
        }
        let data  = fetchMovieList();
        //data = {data:[{name:2}]}
        //console.log(data,'-----1-------')
        return dispatch(data)
    };
}