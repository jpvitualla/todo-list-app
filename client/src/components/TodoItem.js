

const TodoItem = (props) => {
  return (
    <>
      <div>{props.taskName}</div>
      <div>{props.description}</div>
    </>
  );
};

export default TodoItem;
