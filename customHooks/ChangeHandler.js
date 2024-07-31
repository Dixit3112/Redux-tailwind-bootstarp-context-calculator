function useChangeHandler(setTodo) {
  const handleChange = (element) => {
    const { name, value } = element.target;
    const updatedTodo = { ...todo, [name]: value };
    setTodo(updatedTodo);
  };

  return handleChange;
}

export default useChangeHandler;
