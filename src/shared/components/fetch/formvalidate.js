// import React, { useState } from "react";
// function FormValidationComponent() {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm(formData);
//     if (Object.keys(validationErrors).length === 0) {
//       // Form is valid, submit the data
//       console.log("Form submitted:", formData);
//       // Retrieve existing data from localStorage or initialize as an empty array
//       const existingFormData =
//         JSON.parse(localStorage.getItem("formData")) || [];
//       // Add new form data to the existing array
//       const updatedFormData = [...existingFormData, formData];
//       // Store the updated array in localStorage
//       localStorage.setItem("formData", JSON.stringify(updatedFormData));
//       // Reset form data
//       setFormData({
//         username: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//       });
//       // Clear errors
//       setErrors({});
//     } else {
//       // Form has errors, set the errors state
//       setErrors(validationErrors);
//     }
//   };

//   const validateForm = (data) => {
//     let errors = {};
//     if (!data.username.trim()) {
//       errors.username = "Username is required";
//     }
//     if (!data.email.trim()) {
//       errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(data.email)) {
//       errors.email = "Email is invalid";
//     }
//     if (!data.password.trim()) {
//       errors.password = "Password is required";
//     } else if (data.password.length < 6) {
//       errors.password = "Password must be at least 6 characters";
//     }
//     if (data.confirmPassword !== data.password) {
//       errors.confirmPassword = "Passwords do not match";
//     }
//     return errors;
//   };

//   return (
//     <div className="mt-40 flex flex-col bg-slate-400 p-32 items-center gap-5 justify-center w-full">
//       <h2 className="text-center text-blue-600 font-extrabold text-2xl">
//         Form Validation
//       </h2>
//       <form
//         onSubmit={handleSubmit}
//         className="border-2 grid gap-5 w-[500px] p-5 rounded-xl bg-green-700 text-white"
//       >
//         <div className="flex gap-2 justify-between w-full">
//           <label>Username:</label>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             className="border w-[300px] text-green-700 p-1 rounded-md"
//           />
//           {errors.username && <span>{errors.username}</span>}
//         </div>
//         <div className="flex gap-2 justify-between w-full">
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="border w-[300px] text-green-700 p-1 rounded-md"
//           />
//           {errors.email && <span>{errors.email}</span>}
//         </div>
//         <div className="flex gap-2 justify-between w-full">
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="border w-[300px] text-green-700 p-1 rounded-md"
//           />
//           {errors.password && <span>{errors.password}</span>}
//         </div>
//         <div className="flex gap-2 justify-between w-full">
//           <label>Confirm Password:</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             className="border w-[300px] text-green-700 p-1 rounded-md"
//           />
//           {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
// export default FormValidationComponent;

//+++++++++++++++++++++++++****Validaation Form******++++++++++

// import React, { useState, useEffect } from "react";

// function FormValidationComponent() {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [storedFormData, setStoredFormData] = useState([]);

//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem("formData")) || [];
//     setStoredFormData(storedData);
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm(formData);
//     if (Object.keys(validationErrors).length === 0) {
//       // Check if the data already exists
//       const exists = storedFormData.some(
//         (data) =>
//           data.username === formData.username && data.email === formData.email
//       );
//       if (exists) {
//         // Show error if the data already exists
//         setErrors({
//           submit: "This value is already stored. Try another value.",
//         });
//       } else {
//         // Form is valid, submit the data
//         const updatedFormData = [...storedFormData, formData];
//         localStorage.setItem("formData", JSON.stringify(updatedFormData));
//         setStoredFormData(updatedFormData);
//         // Reset form data
//         setFormData({
//           username: "",
//           email: "",
//           password: "",
//           confirmPassword: "",
//         });
//         // Clear errors
//         setErrors({});
//       }
//     } else {
//       // Form has errors, set the errors state
//       setErrors(validationErrors);
//     }
//   };

//   const validateForm = (data) => {
//     let errors = {};
//     if (!data.username.trim()) {
//       errors.username = "Username is required";
//     }
//     if (!data.email.trim()) {
//       errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(data.email)) {
//       errors.email = "Email is invalid";
//     }
//     if (!data.password.trim()) {
//       errors.password = "Password is required";
//     } else if (data.password.length < 6) {
//       errors.password = "Password must be at least 6 characters";
//     }
//     if (data.confirmPassword !== data.password) {
//       errors.confirmPassword = "Passwords do not match";
//     }
//     return errors;
//   };

//   const handleEdit = (index) => {
//     const dataToEdit = storedFormData[index];
//     setFormData(dataToEdit);
//     // Remove the data from storedFormData
//     const updatedFormData = [
//       ...storedFormData.slice(0, index),
//       ...storedFormData.slice(index + 1),
//     ];
//     setStoredFormData(updatedFormData);
//     // Update localStorage
//     localStorage.setItem("formData", JSON.stringify(updatedFormData));
//     // Clear errors
//     setErrors({});
//   };

//   return (
//     <div className="mt-40 flex flex-col bg-slate-400 p-32 items-center gap-5 justify-center w-full">
//       <h2 className="text-center text-blue-600 font-extrabold text-2xl">
//         Form Validation
//       </h2>
//       <form
//         onSubmit={handleSubmit}
//         className="border-2 grid gap-5 w-[500px] p-5 rounded-xl bg-green-700 text-white"
//       >
//         <div className="flex gap-2 justify-between w-full">
//           <label>Username:</label>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             className="border w-[300px] text-green-700 p-1 rounded-md"
//           />
//           {errors.username && <span>{errors.username}</span>}
//         </div>
//         <div className="flex gap-2 justify-between w-full">
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="border w-[300px] text-green-700 p-1 rounded-md"
//           />
//           {errors.email && <span>{errors.email}</span>}
//         </div>
//         <div className="flex gap-2 justify-between w-full">
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="border w-[300px] text-green-700 p-1 rounded-md"
//           />
//           {errors.password && <span>{errors.password}</span>}
//         </div>
//         <div className="flex gap-2 justify-between w-full">
//           <label>Confirm Password:</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             className="border w-[300px] text-green-700 p-1 rounded-md"
//           />
//           {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
//         </div>
//         {errors.submit && <span className="text-red-500">{errors.submit}</span>}
//         <button type="submit">Submit</button>
//       </form>
//       <div>
//         <h2 className="text-blue-600 font-extrabold text-2xl mt-8">
//           Stored Form Data
//         </h2>
//         {storedFormData.map((data, index) => (
//           <div key={index} className="flex gap-2 mt-2">
//             <div>{`Username: ${data.username}, Email: ${data.email}`}</div>
//             <button onClick={() => handleEdit(index)}>Edit</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default FormValidationComponent;

//++++++++++++++++++++++++++++++ Pagination  +++++++++++++++++++++++++++++++++++++++

// pagination button

// import React, { useState, useEffect } from "react";
// import "../fetch/quote.scss";

// export default function Api() {
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const limitPerPage = 10;
//   const buttonsToShow = 6;

//   useEffect(() => {
//     const offset = (currentPage - 1) * limitPerPage;
//     fetch(`https://dummyjson.com/quotes?limit=${limitPerPage}&skip=${offset}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data.quotes);
//         setTotalPages(Math.ceil(data.total / limitPerPage));
//       })
//       .catch((error) => console.log("Error fetching data:", error));
//   }, [currentPage, limitPerPage]);

//   const nextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const goToPage = (page) => {
//     setCurrentPage(page);
//   };

//   const renderPaginationButtons = () => {
//     const paginationButtons = [];
//     const totalPagesToShow = Math.min(totalPages, 101); // Limit total pages to 101

//     // let startPage = 1;
//     // let endPage = totalPagesToShow;
//     // if (totalPagesToShow > buttonsToShow) {
//     //   const halfButtonsToShow = Math.floor(buttonsToShow / 2);
//     //   if (currentPage > halfButtonsToShow) {
//     //     startPage = currentPage - halfButtonsToShow;
//     //     endPage = currentPage + halfButtonsToShow;
//     //     if (endPage > totalPagesToShow) {
//     //       endPage = totalPagesToShow;
//     //       startPage = totalPagesToShow - buttonsToShow + 1;
//     //     }
//     //   } else {
//     //     endPage = buttonsToShow;
//     //   }
//     // }

//     for (let page = 1; page <= totalPagesToShow; page++) {
//       if (
//         page === 1 ||
//         page === totalPagesToShow ||
//         (page >= currentPage - buttonsToShow / 2 &&
//           page <= currentPage + buttonsToShow / 2)
//       ) {
//         paginationButtons.push(
//           <button
//             key={page}
//             onClick={() => goToPage(page)}
//             className={page === currentPage ? "selected" : ""}
//           >
//             {page}
//           </button>
//         );
//       }
//     }

//     return paginationButtons;
//   };

//   return (
//     <div className="data-table flex flex-col items-center justify-center mt-[110px] bg-slate-700">
//       <div className="table-container w-[1000px] p-2 items-center bg-sky-400 border-2 border-blue-900 rounded-xl">
//         <table className="h-[500px]">
//           <thead>
//             <tr className="border border-blue-800">
//               <th>ID</th>
//               <th>Quote</th>
//               <th>Author</th>
//             </tr>
//           </thead>
//           <tbody>
//             {products.map((product, index) => (
//               <tr key={index} className="border border-blue-800">
//                 <td className="w-10 text-center">{product.id}</td>
//                 <td>{product.quote}</td>
//                 <td>{product.author}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <div className="pagination-container w-[900px] flex justify-between bg-slate-700">
//         <button
//           onClick={prevPage}
//           disabled={currentPage === 1}
//           className="px-4 py-2 bg-slate-800 rounded-xl text-white"
//         >
//           Previous
//         </button>
//         {renderPaginationButtons()}
//         <button
//           onClick={nextPage}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 bg-slate-800 rounded-xl text-white"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// scroll pagination

// import React, { useState, useEffect, useCallback } from "react";

// export default function Api() {
//   const [products, setProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [isLoading, setIsLoading] = useState(false);
//   const [allDataLoaded, setAllDataLoaded] = useState(false);
//   const itemsPerPage = 10;

//   const fetchData = useCallback(async () => {
//     setIsLoading(true);
//     const offset = (currentPage - 1) * itemsPerPage;
//     try {
//       const response = await fetch(
//         `https://dummyjson.com/quotes?limit=${itemsPerPage}&skip=${offset}`
//       );
//       const data = await response.json();
//       if (data.quotes.length === 0) {
//         setAllDataLoaded(true);
//       } else {
//         setProducts((prevProducts) => [...prevProducts, ...data.quotes]);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   }, [currentPage, itemsPerPage]);

//   const handleScroll = useCallback(() => {
//     if (
//       window.innerHeight + document.documentElement.scrollTop ===
//         document.documentElement.offsetHeight &&
//       !isLoading &&
//       !allDataLoaded
//     ) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   }, [isLoading, allDataLoaded]);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [handleScroll]);

//   useEffect(() => {
//     if (!allDataLoaded) {
//       fetchData();
//     }
//   }, [currentPage, fetchData, allDataLoaded]);

//   return (
//     <div className="table-container mt-32">
//       <table className="mt-32">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Quote</th>
//             <th>Author</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map((product, index) => (
//             <tr key={index}>
//               <td>{product.id}</td>
//               <td>{product.quote}</td>
//               <td>{product.author}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       {isLoading && <p>Loading...</p>}
//       {allDataLoaded && <p>All data loaded</p>}
//     </div>
//   );
// }
