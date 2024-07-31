function useSubmitHandler(params, storeValue, setTodo) {
  const handleSubmit = () => {
    if (params?.id) {
      let updatedTodos = storeValue.map((el, ind) => {
        return ind === parseInt(params.id) ? todo : el;
      });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
    } else {
      localStorage.setItem("todos", JSON.stringify([...storeValue, todo]));
    }
    setTodo(storeValue);
  };

  return handleSubmit;
}

export default useSubmitHandler;
