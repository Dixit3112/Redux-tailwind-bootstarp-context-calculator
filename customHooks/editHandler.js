function useEditHandler(params, storeValue, setTodo) {
  const handleEdit = () => {
    const updatedTodos = storeValue.map((el, ind) => {
      return ind === parseInt(params.id) ? { ...todo, isEditing: true } : el;
    });
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    setTodo(updatedTodos);
  };

  return handleEdit;
}

export default useEditHandler;
