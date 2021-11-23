export default function AppReducer(state, action) {
    switch (action.type) {
        case "ADD_CHOOSE":
            return { ...state, choose: [...state.choose, action.choose] };
        case "REMOVE_CHOOSE":
            return { ...state, choose: state.choose.filter(item => item.id !== action.choose.id) }
        case "UPDATE_USER_RANDOM":
            return { ...state, userRandom: action.users };
        default:
            return { ...state };
    }
}