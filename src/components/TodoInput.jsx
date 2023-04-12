const TodoInput = ({ todo, setTodo, addTodo }) => {
  return (
    <div>
      <input
        className="bg-yellow-300 rounded-full px-2 inline"
        type="text"
        name="todo"
        value={todo}
        placeholder="Create a new Todo"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button
        onClick={addTodo}
        className="ml-5 bg-green-700 rounded px-5 rounded-full"
      >
        Add
      </button>
    </div>
  );
};

export default TodoInput;
