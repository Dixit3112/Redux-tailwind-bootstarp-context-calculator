import React, { useState, useEffect } from "react";
import "../fetch/quote.scss";
import Slider from "react-slick";

export default function QuotesComponent() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limitPerPage = 10;
  const buttonsToShow = 6;
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const offset = (currentPage - 1) * limitPerPage;
  //   fetch(`https://dummyjson.com/quotes?limit=${limitPerPage}&skip=${offset}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProducts(data.quotes);
  //       setTotalPages(Math.ceil(data.total / limitPerPage));
  //     })
  //     .catch((error) => console.log("Error fetching data:", error));
  // }, [currentPage, limitPerPage]);

  useEffect(() => {
    const offset = (currentPage - 1) * limitPerPage;
    fetch(`https://dummyjson.com/products?limit=${limitPerPage}&skip=${offset}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setTotalPages(Math.ceil(data.total / limitPerPage));
      });
  }, [currentPage, limitPerPage]);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const renderPaginationButtons = () => {
    const paginationButtons = [];
    const totalPagesToShow = Math.min(totalPages, 101); // Limit total pages to 101

    // let startPage = 1;
    // let endPage = totalPagesToShow;
    // if (totalPagesToShow > buttonsToShow) {
    //   const halfButtonsToShow = Math.floor(buttonsToShow / 2);
    //   if (currentPage > halfButtonsToShow) {
    //     startPage = currentPage - halfButtonsToShow;
    //     endPage = currentPage + halfButtonsToShow;
    //     if (endPage > totalPagesToShow) {
    //       endPage = totalPagesToShow;
    //       startPage = totalPagesToShow - buttonsToShow + 1;
    //     }
    //   } else {
    //     endPage = buttonsToShow;
    //   }
    // }

    for (let page = 1; page <= totalPagesToShow; page++) {
      if (
        page === 1 ||
        page === totalPagesToShow ||
        (page >= currentPage - buttonsToShow / 2 &&
          page <= currentPage + buttonsToShow / 2)
      ) {
        paginationButtons.push(
          <button
            key={page}
            onClick={() => goToPage(page)}
            className={page === currentPage ? "selected" : ""}
          >
            {page}
          </button>
        );
      }
    }

    return paginationButtons;
  };

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  return (
    <div className="data-table flex flex-col items-center justify-center py-[110px] bg-slate-700">
      <div className="table-container w-[1200px] p-2 items-center bg-sky-400 border-2 border-blue-900 rounded-xl">
        <table className="h-[500px] text-center w-[1100px] ">
          <thead>
            <tr className="border border-blue-800">
              {/* <th>ID</th>
              <th>Quotes</th>
              <th>Name</th>
              <th>Age</th>
              <th>Story</th>*/}
              <th className="w-5">Number</th>
              <th className="w-20">Title</th>
              <th className="w-52">Description</th>
              <th className="w-20">price</th>
              <th className="w-20">thumbnail</th>
              <th className="max-w-20">
                <p className="text-center">Images</p>
              </th>
              <th className="w-20">discount Percentage</th>
              <th className="w-20">rating</th>
            </tr>
          </thead>
          {/* E-commerce API data */}
          <tbody>
            {products.map((product, index) => {
              console.log("****", product);
              return (
                <tr key={index} className="text-center border border-blue-800">
                  {/* <td className="w-10 text-center">{product.id}</td>
                <td>{product.quote}</td>
                <td>{product.author}</td> */}
                  <td className="w-10">{product.id}</td>
                  <td className="w-28">{product.title}</td>
                  <td className="w-56">{product.description}</td>
                  <td className="w-20">`${product.price}`</td>
                  <td className="max-w-24">
                    <img
                      src={product.thumbnail}
                      alt="iPhone"
                      className="max-h-10"
                    />
                  </td>
                  <td className="flex justify-center items-center h-32">
                    <div className="w-32 max-w-40 ">
                      <Slider {...settings}>
                        {product.images.map((items, index) => {
                          return (
                            <div className="img max-h-10 max-w-20" key={index}>
                              <img src={items} alt="" className="w-32 h-full" />
                            </div>
                          );
                        })}
                      </Slider>
                    </div>
                  </td>
                  <td>{product.discountPercentage}</td>
                  <td>{product.rating}</td>

                  {/* <td>{product.age}</td> */}
                  {/* <td>{product.stories}</td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="pagination-container w-[900px] flex justify-between bg-slate-700">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-slate-800 rounded-xl text-white"
        >
          Previous
        </button>
        {renderPaginationButtons()}
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-slate-800 rounded-xl text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}
