//import { MOVIE_DETAIL_REQUEST, MOVIE_DETAIL_SUCCESS, MOVIE_DETAIL_FAILURE } from '../constants/actionTypes';
import { MOVIE_DETAIL_REQUEST, MOVIE_DETAIL_SUCCESS, MOVIE_DETAIL_FAILURE ,MOVIE_DETAIL1_REQUEST, MOVIE_DETAIL1_SUCCESS, MOVIE_DETAIL1_FAILURE} from '../constants/actionTypes'

export function movieDetail(state = {
    isLoading: false,
}, action) {
    switch (action.type) {
        case MOVIE_DETAIL_SUCCESS:
            return {
                ...action.res,
                isLoading: false,
            };
        case MOVIE_DETAIL_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case MOVIE_DETAIL_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;
    }
}


export function movieDetail2(state = {
    isLoading: false,
}, action) {
    switch (action.type) {
        case MOVIE_DETAIL1_SUCCESS:
            return {
                ...action.res,
                isLoading: false,
            };
        case MOVIE_DETAIL1_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case MOVIE_DETAIL1_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;
    }
}