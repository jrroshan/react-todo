const TodoInput = ({ todo, setTodo, addTodo }) => {
    return (
        <div>
            <input type="text" name="todo" value={todo} placeholder="Create a new Todo" onChange={(e) => {
                setTodo(e.target.value);
            }} />
            <button onClick={addTodo}>Add</button>
        </div>
    )
}

export default TodoInput;