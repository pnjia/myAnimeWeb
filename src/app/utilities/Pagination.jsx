const Pagination = ({ page, setPage, lastPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    } else {
      return;
    }
    scrollTop();
  };
  const handleNextPage = () => {
    if (page < lastPage) {
      setPage((prevPage) => prevPage + 1);
    } else {
      return;
    }
    scrollTop();
  };

  return (
    <div>
      <div className="flex justify-center items-center gap-3 text-center text-color-primary text-xl my-4">
        <button className="hover:text-color-accent transition-all" onClick={handlePrevPage}>
          Prev
        </button>
        <h1>
          {page} of {lastPage}
        </h1>
        <button className="hover:text-color-accent transition-all" onClick={handleNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};
export default Pagination;
