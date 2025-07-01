
const reducer = (todos, action) => {
    let newTodos = []
    switch(action.type) {
        case 'INIT':
            return action.data
        case 'CREATE':
            newTodos = [
                action.data,
                ...todos
            ]
            break
        case 'UPDATE':
            newTodos = todos.map((item) => {
                if( Number(item.id) === Number(action.data.id)) {
                    return action.data
                } else {
                    return item
                }
            })
            break
        case 'DELETE':
            newTodos = todos.filter((item) => Number(item.id) !== Number(action.data.id))
            break
    }

    localStorage.setItem("todos", JSON.stringify(newTodos))

    return newTodos
}

export default reducer;