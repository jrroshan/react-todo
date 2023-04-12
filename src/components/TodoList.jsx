const TodoList = ({ list, remove }) => {
  return (
    <div className="my-5">
      {list?.length > 0 ? (
        <ul className="flex items-center justify-center">
          {list.map((entry, index) => (
            <div className="bg-blue-200 py-1 rounded-full w-6/12 flex items-center justify-between px-5">
              <div>
                <div className="font-bold inline">{index} : </div>
                <li key={index} className="inline">
                  {entry}
                </li>
              </div>
              <button
                onClick={() => {
                  remove(entry);
                }}
                className="inline ml-5 bg-red-500 px-2 rounded-full"
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
