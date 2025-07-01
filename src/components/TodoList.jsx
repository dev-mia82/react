import { useContext } from 'react';
import { TodoDispatchContext } from '../hoc/TodoContext'
import TodoButton from './TodoButton';
import { Checkbox, ListItem, ListItemIcon, ListItemButton, ListItemText } from '@mui/material';

const TodoList = ({ filteredTodos }) => {
    const {handleUpdate, handleDelete } = useContext(TodoDispatchContext);

    const handleChangeCheckbox = (item) => {
        handleUpdate({
            ...item,
            completed: !item.completed,
        })
    }

    const onDelete = (e, item) => {
        e.stopPropagation()
        handleDelete(item.id)
    }

    return (
        <>
            {filteredTodos.map((item) => (
                <ListItem
                    key={item.id}
                    >
                    <ListItemButton role={undefined} onClick={() => handleChangeCheckbox(item)} dense>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={item.completed}
                                tabIndex={-1}
                                disableRipple
                                />
                        </ListItemIcon>
                        <ListItemText primary={item.text}/>
                    </ListItemButton>
                    <TodoButton text="삭제" type="WARNING" onClick={(e) => onDelete(e, item)} />
                </ListItem>
            ))}
        </>
        
    );
};

export default TodoList;

