import { useState } from "react";
import "./TodoList.css";
import TodoItem from "../../components/todoItem/TodoItem";

function TodoList() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handlerInput = (e) => {
    setInputValue(e.target.value);
  };
  const submitTodos = () => {
    setTodoList(() => [...todoList, inputValue]);
    setInputValue("");
  };
  const handleDelete = (index) => {
    // immutable , 不可以直接修改state,即不可直接改变inputValue
    // 对修改的数据先做一份拷贝，再用setState方法更新state数据

    const list = [...todoList];
    list.splice(index, 1);
    setTodoList([...list]);
  };

  const getTodoItem = () => {
    return todoList.map((item, index) => {
      return (
        <div key={index}>
          <TodoItem content={item} index={index} handleDelete={handleDelete} />
        </div>
      );
    });
  };

  return (
    <div className="container">
      <input value={inputValue} onChange={handlerInput} />
      <button onClick={submitTodos}>submit</button>
      {getTodoItem()}
    </div>
  );
}

export default TodoList;
