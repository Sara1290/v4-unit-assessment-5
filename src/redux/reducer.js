//set up of initial state with username and profile picture
//does it know?? does it know that initial state is my "user object" as per the instructions.
const initialState = {
    username: "",
    profile_pic: ""
}

//action type//
const UPDATE_USER = "UPDATE_USER";
const LOGOUT = "LOGOUT";

//action creator//
export function updateUser(user){
    console.log(user)
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export function logout(){
    return {
        type: LOGOUT

    }
}

//reducer function//
export default function reducer (state = initialState, action){
    switch(action.type) {
        case UPDATE_USER: 
            return {
                ...state, 
                username: action.payload.username,
                profile_pic: action.payload.profile_pic
        }
        case LOGOUT:
            return initialState
        default: return state;
    }
}