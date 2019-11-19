import { SET_USER, LOG_OUT} from '../actions'

const initialState = {
    user: {
        username: '',
        favorites: []
    },
    favorites: [],
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
            return{
                ...state,
                user: '',
                isLoggedIn: false
            }
        default:
            return state
    }
}

export default rootReducer;