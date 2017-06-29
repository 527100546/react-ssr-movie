import { MOVIE_DETAIL_REQUEST, MOVIE_DETAIL_SUCCESS, MOVIE_DETAIL_FAILURE ,MOVIE_DETAIL1_REQUEST, MOVIE_DETAIL1_SUCCESS, MOVIE_DETAIL1_FAILURE} from '../constants/actionTypes'
import { CALL_API } from '../middleware/api';
//Request URL:http://m.piaoniu.com/api/v3/activities/23086?areaTicketType=0

function fetchMovieDetail(id) {
    return {
        [CALL_API]: {
            types: [MOVIE_DETAIL_REQUEST, MOVIE_DETAIL_SUCCESS, MOVIE_DETAIL_FAILURE],
            endpoint: `/v3/activities/${id}?areaTicketType=0`,
        }
    };
}

function fetchMovieDetail2(id) {
    return {
        [CALL_API]: {
            types: [MOVIE_DETAIL1_REQUEST, MOVIE_DETAIL1_SUCCESS, MOVIE_DETAIL1_FAILURE],
            endpoint: `/v3/activities/23086?areaTicketType=0`,
        }
    };
}

export function loadMovieDetail(id) {
    return (dispatch, getState) => {
        const { movieDetail } = getState();
        const { receivedAt } = movieDetail;
        const oldId = movieDetail.id;
        if (oldId === id && receivedAt && (Date.now() - receivedAt) < 600000) {
            return null;
        }
        return dispatch(fetchMovieDetail(id))
    };
}

export function loadMovieDetail2(id) {
    return (dispatch, getState) => {
        const { movieDetail2 } = getState();
        const { receivedAt2 } = movieDetail2;
        const oldId = movieDetail2.id;
        if (oldId === id && receivedAt2 && (Date.now() - receivedAt2) < 600000) {
            return null;
        }
        let data2 = fetchMovieDetail2(1291546)
        console.log(data2,'------2-------')
        return dispatch(data2)
    };
}