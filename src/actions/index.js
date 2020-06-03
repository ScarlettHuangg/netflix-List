
export const addMovie = id => {
    return {
        type:"ADD_MOVIE",
        data: id
    }
}

export const deleteMovie = id => {
    return {
        type:"DELETE_MOVIE",
        data: id
    }
}