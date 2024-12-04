
// // // // export default App;
// // // import React, { useState } from 'react';
// // // import axios from 'axios';
// // // import './App.css'; // Include your styles
// // // import BannerImage from './forweb-app.jpg'; // Ensure this file exists in the "src" directory
// // // import React, { useState } from 'react';
// // // import axios from 'axios';
// // // import './App.css';
// // // import BannerImage from './forweb-app.jpg';
// // // function App() {
// // //   const [name, setName] = useState('');
// // //   const [email, setEmail] = useState('');
// // //   const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

// // //   const addUser = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       await axios.post(`${backendUrl}/api/users`, { name, email });
// // //       setName('');
// // //       setEmail('');
// // //     } catch (error) {
// // //       console.error('Error adding user:', error.response?.data || error.message);
// // //     }
// // //   };

// // //   return (
// // //     <div className="container">
// // //       <div className="form-wrapper">
// // //         <img src={BannerImage} alt="Banner" className="banner-image" />
// // //         <h1>User Management App</h1>
// // //         <form onSubmit={addUser} className="user-form">
// // //           <input
// // //             type="text"
// // //             placeholder="Name"
// // //             value={name}
// // //             onChange={(e) => setName(e.target.value)}
// // //             required
// // //             className="input-field"
// // //           />
// // //           <input
// // //             type="email"
// // //             placeholder="Email"
// // //             value={email}
// // //             onChange={(e) => setEmail(e.target.value)}
// // //             required
// // //             className="input-field"
// // //           />
// // //           <button type="submit" className="submit-button">Add User</button>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default App;
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import './App.css';
// // import BannerImage from './forweb-app.jpg';

// // function App() {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');

// //   // Use environment variable with fallback
// //   // const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
// //   const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

// //   const addUser = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.post(`${backendUrl}/api/users`, { name, email });
// //       setName('');
// //       setEmail('');
// //       alert('User added successfully!');
// //     } catch (error) {
// //       console.error('Error adding user:', error.response?.data || error.message);
// //       alert('Failed to add user');
// //     }
// //   };

// //   return (
// //     <div className="container">
// //       <div className="form-wrapper">
// //         <img src={BannerImage} alt="Banner" className="banner-image" />
// //         <h1>User Management App</h1>
// //         <form onSubmit={addUser} className="user-form">
// //           <input
// //             type="text"
// //             placeholder="Name"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             required
// //             className="input-field"
// //           />
// //           <input
// //             type="email"
// //             placeholder="Email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //             className="input-field"
// //           />
// //           <button type="submit" className="submit-button">Add User</button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import './App.css'; // Include your styles
// // import BannerImage from './forweb-app.jpg'; // Ensure this file exists in the "src" directory

// // function App() {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [loading, setLoading] = useState(false); // To manage loading state

// //   // Use environment variable for backend URL with fallback
// //   const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';
  

// //   const addUser = async (e) => {
// //     e.preventDefault();
// //     setLoading(true); // Start loading state

// //     try {
// //       const response = await axios.post(`${backendUrl}/api/users`, { name, email });
// //       setName('');
// //       setEmail('');
// //       alert('User added successfully!');
// //       console.log('User added:', response.data); // Log the response for debugging
// //     } catch (error) {
// //       console.error('Error adding user:', error.response?.data || error.message);
// //       alert('Failed to add user');
// //     } finally {
// //       setLoading(false); // End loading state
// //     }
// //   };

// //   return (
// //     <div className="container">
// //       <div className="form-wrapper">
// //         <img src={BannerImage} alt="Banner" className="banner-image" />
// //         <h1>User Management App</h1>
// //         <form onSubmit={addUser} className="user-form">
// //           <input
// //             type="text"
// //             placeholder="Name"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             required
// //             className="input-field"
// //           />
// //           <input
// //             type="email"
// //             placeholder="Email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //             className="input-field"
// //           />
// //           <button type="submit" className="submit-button" disabled={loading}>
// //             {loading ? 'Adding...' : 'Add User'}
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // // export default App;
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import './App.css';
// // import BannerImage from './forweb-app.jpg';

// // function App() {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [loading, setLoading] = useState(false);

// //   // Ensure correct backend URL
// //   const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

// //   const addUser = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);

// //     try {
// //       // Configure axios for this specific request
// //       const axiosInstance = axios.create({
// //         baseURL: backendUrl,
// //         headers: {
// //           'Content-Type': 'application/json',
// //           'Access-Control-Allow-Origin': '*'
// //         },
// //         withCredentials: false // Set to false if you're not using credentials
// //       });

// //       const response = await axiosInstance.post('/api/users', { name, email });
      
// //       setName('');
// //       setEmail('');
// //       alert('User added successfully!');
// //       console.log('User added:', response.data);
// //     } catch (error) {
// //       console.error('Detailed Error:', {
// //         status: error.response?.status,
// //         data: error.response?.data,
// //         message: error.message
// //       });
      
// //       alert(`Failed to add user: ${error.response?.data?.error || error.message}`);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="container">
// //       <div className="form-wrapper">
// //         <img src={BannerImage} alt="Banner" className="banner-image" />
// //         <h1>User Management App</h1>
// //         <form onSubmit={addUser} className="user-form">
// //           <input
// //             type="text"
// //             placeholder="Name"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             required
// //             className="input-field"
// //           />
// //           <input
// //             type="email"
// //             placeholder="Email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //             className="input-field"
// //           />
// //           <button type="submit" className="submit-button" disabled={loading}>
// //             {loading ? 'Adding...' : 'Add User'}
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }

// // // export default App;
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import './App.css';
// // import BannerImage from './forweb-app.jpg';

// // function App() {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [loading, setLoading] = useState(false);
// //   const [users, setUsers] = useState([]);

// //   // Ensure correct backend URL
// //   const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

// //   // Fetch users on component mount
// //   useEffect(() => {
// //     fetchUsers();
// //   }, []);

// //   // Fetch users function
// //   const fetchUsers = async () => {
// //     try {
// //       const response = await axios.get(`${backendUrl}/api/users`);
// //       setUsers(response.data);
// //     } catch (error) {
// //       console.error('Error fetching users:', error);
// //       alert('Failed to fetch users');
// //     }
// //   };

// //   const addUser = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);

// //     try {
// //       const response = await axios.post(`${backendUrl}/api/users`, { 
// //         name, 
// //         email 
// //       }, {
// //         headers: {
// //           'Content-Type': 'application/json'
// //         }
// //       });
      
// //       // Clear form
// //       setName('');
// //       setEmail('');
      
// //       // Update users list
// //       fetchUsers();
      
// //       alert('User added successfully!');
// //       console.log('User added:', response.data);
// //     } catch (error) {
// //       console.error('Detailed Error:', {
// //         status: error.response?.status,
// //         data: error.response?.data,
// //         message: error.message
// //       });
      
// //       alert(`Failed to add user: ${error.response?.data?.error || error.message}`);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="container">
// //       <div className="form-wrapper">
// //         <img src={BannerImage} alt="Banner" className="banner-image" />
// //         <h1>User Management App</h1>
// //         <form onSubmit={addUser} className="user-form">
// //           <input
// //             type="text"
// //             placeholder="Name"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             required
// //             className="input-field"
// //           />
// //           <input
// //             type="email"
// //             placeholder="Email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //             className="input-field"
// //           />
// //           <button type="submit" className="submit-button" disabled={loading}>
// //             {loading ? 'Adding...' : 'Add User'}
// //           </button>
// //         </form>

// //         {/* User List */}
// //         <div className="user-list">
// //           <h2>Registered Users</h2>
// //           {users.length === 0 ? (
// //             <p>No users registered yet.</p>
// //           ) : (
// //             <ul>
// //               {users.map((user) => (
// //                 <li key={user._id}>
// //                   {user.name} ({user.email})
// //                 </li>
// //               ))}
// //             </ul>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css';
// import BannerImage from './forweb-app.jpg';

// function App() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState('');

//   // Backend URL configuration
//   const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

//   // Configure axios defaults
//   axios.defaults.baseURL = backendUrl;
//   axios.defaults.headers.post['Content-Type'] = 'application/json';

//   // Fetch users on component mount
//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   // Fetch users function
//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('/api/users');
//       setUsers(response.data);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//       setError('Failed to fetch users');
//     }
//   };

//   const addUser = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       // Validate inputs
//       if (name.trim().length < 2) {
//         throw new Error('Name must be at least 2 characters long');
//       }

//       const response = await axios.post('/api/users', { 
//         name: name.trim(), 
//         email: email.trim() 
//       });
      
//       // Clear form and update users
//       setName('');
//       setEmail('');
//       fetchUsers();
      
//       alert('User added successfully!');
//     } catch (error) {
//       console.error('User Add Error:', error);
      
//       // Handle different types of errors
//       if (error.response) {
//         // Server responded with an error
//         setError(error.response.data.error || 'Failed to add user');
//       } else if (error.request) {
//         // Request made but no response received
//         setError('No response from server');
//       } else {
//         // Error in setting up the request
//         setError(error.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="form-wrapper">
//         <img src={BannerImage} alt="Banner" className="banner-image" />
//         <h1>User Management App</h1>
        
//         {error && <div className="error-message">{error}</div>}
        
//         <form onSubmit={addUser} className="user-form">
//           <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             minLength={2}
//             className="input-field"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="input-field"
//           />
//           <button 
//             type="submit" 
//             className="submit-button" 
//             disabled={loading}
//           >
//             {loading ? 'Adding...' : 'Add User'}
//           </button>
//         </form>

//         <div className="user-list">
//           <h2>Registered Users</h2>
//           {users.length === 0 ? (
//             <p>No users registered yet.</p>
//           ) : (
//             <ul>
//               {users.map((user) => (
//                 <li key={user._id}>
//                   {user.name} ({user.email})
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// // export default App;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [users, setUsers] = useState([]);

//   // Configure axios globally
//   axios.defaults.baseURL = 'http://localhost:5000';
//   axios.defaults.headers.post['Content-Type'] = 'application/json';
  
//   // Optional: Add interceptors for global error handling
//   axios.interceptors.response.use(
//     response => response,
//     error => {
//       console.error('Axios Interceptor Error:', error);
//       return Promise.reject(error);
//     }
//   );

//   const addUser = async (e) => {
//     e.preventDefault();
    
//     try {
//       // Use full URL or configured baseURL
//       const response = await axios.post('/api/users', { 
//         name, 
//         email 
//       }, {
//         // Additional config to ensure CORS works
//         withCredentials: false,
//         headers: {
//           'Content-Type': 'application/json',
//           'Accept': 'application/json'
//         }
//       });
      
//       // Reset form and update users
//       setName('');
//       setEmail('');
//       fetchUsers();
      
//       alert('User added successfully!');
//     } catch (error) {
//       console.error('Detailed Error:', {
//         status: error.response?.status,
//         data: error.response?.data,
//         message: error.message
//       });
      
//       alert(`Failed to add user: ${error.response?.data?.error || error.message}`);
//     }
//   };

//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('/api/users');
//       setUsers(response.data);
//     } catch (error) {
//       console.error('Error fetching users:', error);
//     }
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   // Rest of your component remains the same
// }

// // export default App;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css';
// axios.create({
//   baseURL: `${backendUrl}/api`,
//   withCredentials: true
// });
// function App() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState('');

//   // Backend URL
//   const backendUrl = 'http://localhost:5000';

//   // Configure axios
//   axios.defaults.baseURL = backendUrl;
//   axios.defaults.headers.post['Content-Type'] = 'application/json';

//   // Fetch Users
//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('/api/users');
//       setUsers(response.data);
//     } catch (error) {
//       console.error('Fetch Users Error:', error);
//       setError('Failed to fetch users');
//     }
//   };

//   // Add User
//   const addUser = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       // Basic validation
//       if (name.trim().length < 2) {
//         setError('Name must be at least 2 characters');
//         return;
//       }

//       const response = await axios.post('/api/users', { 
//         name: name.trim(), 
//         email: email.trim() 
//       });
      
//       // Reset form and refresh users
//       setName('');
//       setEmail('');
//       fetchUsers();
      
//       alert('User added successfully!');
//     } catch (error) {
//       console.error('Add User Error:', error);
      
//       if (error.response) {
//         setError(error.response.data.message || 'Failed to add user');
//       } else {
//         setError('Network error. Please try again.');
//       }
//     }
//   };

//   // Fetch users on component mount
//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div className="container">
//       <h1>User Management App</h1>
      
//       {error && <div className="error">{error}</div>}
      
//       <form onSubmit={addUser}>
//         <input 
//           type="text" 
//           placeholder="Name" 
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required 
//           minLength={2}
//         />
//         <input 
//           type="email" 
//           placeholder="Email" 
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required 
//         />
//         <button type="submit">Add User</button>
//       </form>

//       <div className="user-list">
//         <h2>Registered Users</h2>
//         {users.length === 0 ? (
//           <p>No users registered</p>
//         ) : (
//           <ul>
//             {users.map((user) => (
//               <li key={user._id}>
//                 {user.name} ({user.email})
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// // export default App;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css';

// // Declare backendUrl at the top of your component
// const backendUrl = 'http://localhost:5000';

// axios.create({
//   baseURL: `${backendUrl}/api`,
//   withCredentials: true
// });

// function App() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState('');

//   // Configure axios
//   axios.defaults.baseURL = backendUrl;
//   axios.defaults.headers.post['Content-Type'] = 'application/json';

//   // Fetch Users
//   const fetchUsers = async () => {
//     try {
//       const response = await axios.get('/api/users');
//       setUsers(response.data);
//     } catch (error) {
//       console.error('Fetch Users Error:', error);
//       setError('Failed to fetch users');
//     }
//   };

//   // Add User
//   const addUser = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       // Basic validation
//       if (name.trim().length < 2) {
//         setError('Name must be at least 2 characters');
//         return;
//       }

//       const response = await axios.post('/api/users', { 
//         name: name.trim(), 
//         email: email.trim() 
//       });
      
//       // Reset form and refresh users
//       setName('');
//       setEmail('');
//       fetchUsers();
      
//       alert('User added successfully!');
//     } catch (error) {
//       console.error('Add User Error:', error);
      
//       if (error.response) {
//         setError(error.response.data.message || 'Failed to add user');
//       } else {
//         setError('Network error. Please try again.');
//       }
//     }
//   };

//   // Fetch users on component mount
//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div className="container">
//       <h1>User Management App</h1>
      
//       {error && <div className="error">{error}</div>}
      
//       <form onSubmit={addUser}>
//         <input 
//           type="text" 
//           placeholder="Name" 
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required 
//           minLength={2}
//         />
//         <input 
//           type="email" 
//           placeholder="Email" 
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required 
//         />
//         <button type="submit">Add User</button>
//       </form>

//       <div className="user-list">
//         <h2>Registered Users</h2>
//         {users.length === 0 ? (
//           <p>No users registered</p>
//         ) : (
//           <ul>
//             {users.map((user) => (
//               <li key={user._id}>
//                 {user.name} ({user.email})
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// Declare backendUrl at the top of your component
const backendUrl = 'http://localhost:5000';
// Configure axios globally to use backendUrl
axios.defaults.baseURL = backendUrl;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;  // Ensure credentials (cookies) are sent
// Configure axios instance
const axiosInstance = axios.create({
  baseURL: `${backendUrl}/api`,
  withCredentials: true,  // Ensures cookies are sent along with requests
  headers: {
    'Content-Type': 'application/json'
  }
});

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');


  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');  // Use axios to fetch users from the backend
      setUsers(response.data);
    } catch (error) {
      console.error('Fetch Users Error:', error);
      setError('Failed to fetch users');
    }
  };
  
  const addUser = async (e) => {
    e.preventDefault();
    setError('');
  
    try {
      // Validate name input
      if (name.trim().length < 2) {
        setError('Name must be at least 2 characters');
        return;
      }
  
      // Make a POST request to the backend to add a user
      const response = await axios.post('/api/users', { 
        name: name.trim(), 
        email: email.trim() 
      });
  
      // Reset form and refresh users list
      setName('');
      setEmail('');
      fetchUsers();
      
      alert('User added successfully!');
    } catch (error) {
      console.error('Add User Error:', error);
      if (error.response) {
        setError(error.response.data.message || 'Failed to add user');
      } else {
        setError('Network error. Please try again.');
      }
    }
  };
  
  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1>User Management App</h1>
      
      {error && <div className="error">{error}</div>}
      
      <form onSubmit={addUser}>
        <input 
          type="text" 
          placeholder="Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          required 
          minLength={2}
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <button type="submit">Add User</button>
      </form>

      <div className="user-list">
        <h2>Registered Users</h2>
        {users.length === 0 ? (
          <p>No users registered</p>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user._id}>
                {user.name} ({user.email})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
