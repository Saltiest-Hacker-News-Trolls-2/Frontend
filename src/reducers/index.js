import { SET_USER, LOG_OUT, DELETE_FAV, ADD_FAV, GET_COMMENTS } from '../actions'

const initialState = {
    user: '',
    favorites: [],
    salty_comments: [],
    isLoggedIn: false
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){

        case SET_USER:
            return{
                ...state,
                user: action.payload
            }
        case LOG_OUT:
            window.history.push('/')
            return{
                ...state,
                user: '',
                isLoggedIn: false
            }
        case DELETE_FAV:
            if(state.favorites >= 1){
                const newFavs = state.favorites.filter(fav => fav.id !== action.payload.comment_id)
                return{
                    ...state,
                    favorites: [...newFavs]
                }
            } else {
                return {
                    ...state,
                    favorites: []
                }
            }
        case ADD_FAV:
            return{
                ...state,
                favorites: [action.payload.comment_id]
            }
        default:
            return state
    }
}

export default rootReducer;
