import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import TodoList from "../components/TodoList";
const Todos = () => {
    const {year, month} = useParams();
    return (
        <div>
            <Header 
                leftElement={<Button text="<"/>}
                centerElement={`${year}년 ${month}월`}
                rightElement={<Button text=">"/>}
            />
            <TodoList />
        </div>
    );
};

export default Todos;