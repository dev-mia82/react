import { useParams } from "react-router-dom";
import Header from "../components/Header";
import TodoButton from "../components/TodoButton";
import TodoList from "../components/TodoList";
import NewTodo from "../components/NewTodo";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TodoDispatchContext } from "../hoc/TodoContext";

const checkDateValidate = (year, month) => {
    const nav = useNavigate();

    //year, month validation check
    if(isNaN(Number(year)) || isNaN(Number(month))) {
        window.alert('형식에 맞지 않는 접근입니다.')
        nav(-1)
    }

    const monthDate = new Date(year, Number(month) -1, 1)

    if(monthDate < new Date(0)) {
        return false
    }
    return true
}

const Todos = () => {
    const {year, month} = useParams();
    const { todos } = useContext(TodoDispatchContext)

    if(!checkDateValidate(year, month)) {
        return null
    }
    
    const filteredTodos = todos.filter((item) => Number(year) === Number(item.year) && Number(month) === Number(item.month))

    return (
        <div>
            <Header 
                leftElement={<TodoButton text="<" onClick={() => handleMoveMonth(-1)}/>}
                centerElement={`${year}년 ${month.padStart(2,"0")}월`}
                rightElement={<TodoButton text=">" onClick={() => handleMoveMonth(1)}/>}
            />
            <NewTodo 
                year={year}
                month={month}
                />
            <TodoList
                filteredTodos={filteredTodos} />
        </div>
    );
};

export default Todos;