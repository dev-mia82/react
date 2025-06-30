import { useContext } from 'react';
import { TodoDispatchContext } from '../App';
import './TodoList.css'
import Button from './Button';

const TodoList = () => {
    const {todos, handleUpdate} = useContext(TodoDispatchContext);

    const handleChangeCheckbox = (item) => {
        handleUpdate({
            ...item,
            completed: !item.completed
        })
    }

    return (
        <ul className="todo-list">
            {todos.map((item) => (
                <li key={item.id}
                    className="todo-item">
                    <input
                        id={`todo_${item.id}`}
                        type="checkbox"
                        onChange={() => handleChangeCheckbox(item)}
                        checked={item.completed}
                        />
                    <label className={`todo-text ${item.completed && 'completed'}`}
                        for={`todo_${item.id}`}>{item.text}</label>
                    <Button className="delete-button" text="삭제" />
                </li>
            ))}
        </ul>
    );
};

export default TodoList;