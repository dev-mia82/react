import { Button } from "@mui/material";

const TodoButton = ({text, onClick, type}) => {
    let styleObj;
    if(type === 'WARNING') {
        styleObj = {
            variant: 'contained',
            color: 'error'
        }
    } else if(type === 'SUCCESS') {
        styleObj = {
            variant: 'contained',
            color: 'success'
        }
    }
    return (
        <Button
            onClick={onClick}
            {...styleObj}>
                {text}
        </Button>
    );
};

export default TodoButton;