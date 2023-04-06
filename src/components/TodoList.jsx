const TodoList = ({list, remove}) =>{
    return (
        <div>
            {list?.length > 0 ? (
                <ul>
                    {list.map((entry, index) =>(
                        <div>
                            <li key={index}>{ entry }</li>
                            <button onClick={() => {
                                remove(entry);
                            }}>Delete</button>
                        </div>
                    ))}
                </ul>
            ) : (
                <div>
                    <p>No Task Found</p>
                </div>
            )}
        </div>
    )
}

export default TodoList;