export const changeName = name => {
    return {
        type: 'CHANGE_NAME',
        name
    }
}

export const changeAge = age => {
    return {
        type: 'CHANGE_AGE',
        age
    }
}