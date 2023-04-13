const TodoInput = ({ todo, setTodo, addTodo }) => {
  return (
    <div>
      <input
        className="bg-white py-2 rounded px-2 inline"
        type="text"
        name="todo"
        value={todo}
        placeholder="Enter Task"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button
        onClick={addTodo}
        className="ml-5 bg-blue-800 rounded px-5 rounded py-2"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
