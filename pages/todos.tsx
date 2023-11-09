import styled from "@emotion/styled";
import { addTodo } from "@/src/redux/todos/slice";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";

const Todos = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos);
  const handleTodoAdd = () => {
    dispatch(addTodo({ title: "리액트 공부", id: 1 }));
  };
  return (
    <Container>
      <h1>Todos Page</h1>
      {todos.map((todo) => {
        return (
          <div>
            <span>{todo.title}</span>
          </div>
        );
      })}
      <button onClick={handleTodoAdd}>할 일 추가</button>
    </Container>
  );
};

const Container = styled.div`
  background: #ddd;
  color: #fff;
`;

export default Todos;
