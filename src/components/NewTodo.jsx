import { InputBase, IconButton, Paper } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useContext, useState } from "react";
import { TodoDispatchContext } from "../hoc/TodoContext";

const NewTodo = ({year, month}) => {
    const { handleCreate } = useContext(TodoDispatchContext)
    const [ text, setText ] = useState('');


    const onCreate = () => {
        handleCreate({
            text: text,
            year,
            month
        })
        setText('')
    }

    const onEnter = (e) => {
        if(e.key === 'Enter') {
            onCreate()
        }
    }
    return (
        <Paper
            fullWidth
            sx={{ p: '2px 4px', m: '10px 0px', display: 'flex', alignItems: 'center'}}>
             <InputBase
                sx={{ m: '10px', flex: 1 }}
                placeholder="Please type your todo"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyUp={onEnter}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <AddBoxIcon
                    onClick={onCreate} />
            </IconButton>
        </Paper>
    );
};

export default NewTodo;