export const AddToDo = () => {
    return {
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const DeleteToDo = (id) => {
    return {
        type: "DELETE_TODO",
        id
    }
}
