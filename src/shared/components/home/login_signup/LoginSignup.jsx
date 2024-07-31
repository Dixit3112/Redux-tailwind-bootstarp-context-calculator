import React, { useEffect, useState } from 'react';
import "./loginsignup.scss";
import { IoPersonSharp } from "react-icons/io5";
import { MdLock, MdOutlineMail } from "react-icons/md"

export default function LoginSignup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('');
    const [action, setAction] = useState('Sign Up'); // Action is either "Sign Up" or "Log In"

    const handleSignIn = () => {
        // Retrieve user credentials from local storage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the entered email id and password match any stored credentials
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            // If credentials match, set flag indicating successful login
            setIsLoggedIn(true);
            // Redirect user to the next page or perform other actions
            // For now, let's just clear the form fields
            setEmail('');
            setPassword('');
        } else {
            // If credentials don't match, display error message
            setError('Invalid email id or password');
        }
    };
    // const [quotes, setQuotes] = useState([]);
//   useEffect(() => {
//     fetch('https://dummyjson.com/quotes')
//       .then((res) => {
//         return res.json();
//       })
//         .then((quote) => {
//             const qouteMain = quote.quotes;
//             setQuotes(qouteMain.slice(0,10));
//       });
//   }, []);

    return (
        <div className="container">
            <div className='mainForm'>
                <div className='header'>
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    {
                        action === 'Login' ? <div></div> : <div className="input">
                        <IoPersonSharp className='icon' />
                        <input type="text" placeholder="Name" />
                    </div>
                    }
                    <div className="input">
                        <MdOutlineMail className='icon' />
                        <input
                            type="text"
                            placeholder="Email Id"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input">
                        <MdLock className='icon' />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="error">{error}</div>
                <div className="subbtn">
                    <div className={action === "Login" ? "btn blue" : "btn"} onClick={() => {setAction("Sign Up")}}>{action}</div>
                    <div className={action === "Sign Up" ? "btn blue" : "btn"} onClick={() => {setAction("Login")}}>Login</div>                </div>
            </div>
            {/* {
                quotes.map((quotes) => (
                    <div key={quotes.id} style={{display: 'flex', justifyContent: "center", marginLeft: "200px"}}>
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'space-between', width: '1280px' }}>
                        <p>{quotes.quote}</p>
                        <h4 style={{fontSize: '18px', margin: '0px', padding: '0px', color: 'Highlight' , fontWeight: '700'}}>{quotes.author}</h4>
                        </div>
                    </div>
                ))
            } */}
        </div>
    );
}

// import React, { useEffect, useState } from 'react';
// import "./loginsignup.scss";
// import { IoPersonSharp } from "react-icons/io5";
// import { MdLock, MdOutlineMail } from "react-icons/md"

// export default function LoginSignup() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [error, setError] = useState('');
//     const [action, setAction] = useState('Sign Up'); // Action is either "Sign Up" or "Log In"
//     const [quotes, setQuotes] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [quotesPerPage] = useState(15);

//     useEffect(() => {
//         fetch('https://dummyjson.com/quotes')
//             .then((res) => {
//                 return res.json();
//             })
//             .then((quote) => {
//                 const qouteMain = quote.quotes;
//                 setQuotes(qouteMain);
//             });
//     }, []);

//     // Get current quotes
//     const indexOfLastQuote = currentPage * quotesPerPage;
//     const indexOfFirstQuote = indexOfLastQuote - quotesPerPage;
//     const currentQuotes = quotes.slice(indexOfFirstQuote, indexOfLastQuote);

//     // Change page
//     const paginate = (pageNumber) => setCurrentPage(pageNumber);
//     const nextPage = () => {
//         if (currentPage < Math.ceil(quotes.length / quotesPerPage)) {
//             setCurrentPage(currentPage + 1);
//         }
//     };
//     const prevPage = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//         }
//     };

//     const handleSignIn = () => {
//         // Retrieve user credentials from local storage
//         const users = JSON.parse(localStorage.getItem('users')) || [];

//         // Check if the entered email id and password match any stored credentials
//         const user = users.find(user => user.email === email && user.password === password);

//         if (user) {
//             // If credentials match, set flag indicating successful login
//             setIsLoggedIn(true);
//             // Redirect user to the next page or perform other actions
//             // For now, let's just clear the form fields
//             setEmail('');
//             setPassword('');
//         } else {
//             // If credentials don't match, display error message
//             setError('Invalid email id or password');
//         }
//     };

//     return (
//         <div className="container">
//             <div className='mainForm'>
//                 <div className='header'>
//                     <div className="text">{action}</div>
//                     <div className="underline"></div>
//                 </div>
//                 <div className="inputs">
//                     {
//                         action === 'Login' ? <div></div> : <div className="input">
//                             <IoPersonSharp className='icon' />
//                             <input type="text" placeholder="Name" />
//                         </div>
//                     }
//                     <div className="input">
//                         <MdOutlineMail className='icon' />
//                         <input
//                             type="text"
//                             placeholder="Email Id"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                         />
//                     </div>
//                     <div className="input">
//                         <MdLock className='icon' />
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </div>
//                 </div>
//                 <div className="error">{error}</div>
//                 <div className="subbtn">
//                     <div className={action === "Login" ? "btn blue" : "btn"} onClick={() => { setAction("Sign Up") }}>{action}</div>
//                     <div className={action === "Sign Up" ? "btn blue" : "btn"} onClick={() => { setAction("Login") }}>Login</div>
//                 </div>
//             </div>
//             {/* Pagination */}
//             <ul className="pagination bg-slate-700 h-14 w-full">
//                 <li>
//                     <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
//                 </li>
//                 {Array.from({ length: Math.ceil(quotes.length / quotesPerPage) }, (_, i) => (
//                     <li key={i} className={currentPage === i + 1 ? 'active' : ''}>
//                         <button onClick={() => paginate(i + 1)}>{i + 1}</button>
//                     </li>
//                 ))}
//                 <li>
//                     <button onClick={nextPage} disabled={currentPage === Math.ceil(quotes.length / quotesPerPage)}>Next</button>
//                 </li>
//             </ul>
//             {/* Quotes */}
//             {currentQuotes.map((quote) => (
//                 <div key={quote.id} style={{ display: 'flex', justifyContent: "center", marginLeft: "200px" }}>
//                     <div style={{ display: 'flex', gap: '10px', alignItems: 'center', justifyContent: 'space-between', width: '1280px' }}>
//                         <p>{quote.quote}</p>
//                         <h4 style={{ fontSize: '18px', margin: '0px', padding: '0px', color: 'Highlight', fontWeight: '700' }}>{quote.author}</h4>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }
