import {loadCurrentUser} from "./currentUserApi";

export const currentUserReducer = (state = {}, action) => {
    if (action.type == 'edit-current-user-name') {
        return {
            name: action.payload.name
        }
    }
    return state;
}

export const currentUserData = {
    name: 'Joe shmoe'
}

export const selectName = (state) => {
    return state.currentUser.name;
}


// Action creator
export const editName = (newName) => {
    return {
        type: 'edit-current-user-name',
        payload: {
            name: newName
        }
    }
}

// Redux Thunk
// Also action creator
export const loadUser = () => {
    return (dispatch, getState) => {
        return loadCurrentUser().then((loadUser) => {
            dispatch(editName(loadUser.name))
        })
    }
}