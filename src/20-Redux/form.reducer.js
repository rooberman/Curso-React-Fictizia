const initialState = {
    name: '',
    age: 0
}

export default function(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_NAME':
            return { ...state, name : action.name }
        case 'CHANGE_AGE':
            return { ...state, age : action.age }
        default:
            return state
    }
}