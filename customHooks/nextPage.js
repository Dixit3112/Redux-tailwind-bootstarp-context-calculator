function useNextPage(currentPage, totalPages, setCurrentPage) {
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return nextPage;
}

export default useNextPage;
