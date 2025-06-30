import { BrowserRouter, Routes, Route, data } from "react-router-dom";
import MonthlyTodo from "./pages/MonthlyTodo";
import Todos from "./pages/Todos";
import NotFound from "./pages/NotFound";
import { useRef, useReducer, createContext } from "react";

const sampleTodos = [
  { id: 1, text: 'React 프로젝트 구조 잡기', completed: false },
  { id: 2, text: '컴포넌트 분리하기', completed: false },
  { id: 3, text: '할 일 추가 기능 구현', completed: true },
  { id: 4, text: '할 일 완료 상태 토글 기능 구현', completed: false },
  { id: 5, text: '할 일 삭제 기능 구현', completed: false }
]

const reducer = (todos, action) => {
  switch(action.type) {
    case 'CREATE':
      return [
        action.data,
        ...todos
      ] 
    case 'UPDATE':
      return todos.map((item) => {
        if( item.id === action.data.id) {
          return action.data
        } else {
          return item
        }
      })
    case 'DELETE':
      return todos.filter((item) => item.id === action.data.id)
  }
}

export const TodoDispatchContext = createContext();

function App() {
  const newId = useRef(6);
  const [todos, dispatch] = useReducer(reducer, sampleTodos);

  const handleCreate = (data) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: newId.current++,
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

  return (
      <TodoDispatchContext value={{todos, handleCreate, handleUpdate, handleDelete}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MonthlyTodo />} />
            <Route path="/:year/:month" element={<Todos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TodoDispatchContext>
  )
}

export default App
