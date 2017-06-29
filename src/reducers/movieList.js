import { MOVIE_LIST_REQUEST, MOVIE_LIST_SUCCESS, MOVIE_LIST_FAILURE } from '../constants/actionTypes';

export function movieList(state = {
    movies: [],
    isLoading: false,
}, action) {
    switch (action.type) {
        case MOVIE_LIST_SUCCESS:
            //console.log(action.res,'---action.res---')
            const { data, start, receivedAt } = action.res;
            //console.log(subjects,action.res,'---action.res---')

            //subjects.map((el, index) => {
            //    el.rank = start + index + 1;
            //});
            return {
                movies: data,
                receivedAt,
                isLoading: false,
            };
        case MOVIE_LIST_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case MOVIE_LIST_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;
    }
}