function useDeleteHandler(params, storeValue, setTodo) {
  const handleDelete = () => {
    const updatedTodos = storeValue.filter(
      (_, ind) => ind !== parseInt(params.id)
    );
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodo(updatedTodos);
  };

  return handleDelete;
}

export default useDeleteHandler;
