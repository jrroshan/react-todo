const TodoList = ({ list, remove }) => {
  return (
    <div className="my-5">
      {list?.length > 0 ? (
        <ul className="flex items-center justify-center flex-col">
          {list.map((entry, index) => (
            <div className="mt-2 bg-blue-100 py-1 rounded py-3 w-[35%] flex items-center justify-between px-5">
              <div>
                <div className="font-bold inline">{index+1} : </div>
                <li key={index} className="inline">
                  {entry}
                </li>
              </div>
              <button
                onClick={() => {
                  remove(entry);
                }}
                className="inline ml-5 bg-red-500 px-2 rounded py-1"
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="my-5">
          <p>No Task Found</p>
        </div>
      )}
    </div>
  );
};

export default TodoList;
