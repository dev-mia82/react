import { useRef, useReducer, createContext, useEffect } from "react";
import reducer from "../reducer/todo-reducer";

export const TodoDispatchContext = createContext();

const TodoContext = ({children}) => {
    const newId = useRef(0);
    const [todos, dispatch] = useReducer(reducer, []);
    
    const handleCreate = (data) => {
        dispatch({
            type: 'CREATE',
            data: {
                id: newId.current++,
                completed: false,
                ...data
            }
        })
    }

    const handleUpdate = (data) => {
        dispatch({
            type: 'UPDATE',
            data: data
        })
    }

    const handleDelete = (id) => {
        dispatch({
            type: 'DELETE',
            data: {
                id: id
            }
        })
    }

    useEffect(() => {
        let orgTodos = localStorage.getItem("todos")

        if(!orgTodos) return
        orgTodos = JSON.parse(orgTodos)

        dispatch({
            type: 'INIT',
             data: orgTodos
        })
        
        //newId reloading
        if(orgTodos.length > 0) {
            let maxId = 0
            orgTodos.forEach((item) => {
                if(Number(item.id) > Number(maxId)) {
                    maxId = item.id
                }
            })
            newId.current = Number(maxId) + 1
        }
    }, [])


    return (
        <TodoDispatchContext value={{todos, handleCreate, handleUpdate, handleDelete}}>
            {children}
        </TodoDispatchContext>
    );
};

export default TodoContext;