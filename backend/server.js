// // // // // // // // const express = require('express');
// // // // // // // // const mongoose = require('mongoose');
// // // // // // // // const cors = require('cors');
// // // // // // // // const bodyParser = require('body-parser');
// // // // // // // // require('dotenv').config();

// // // // // // // // // const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongodb:27017/fullstackdb';
// // // // // // // // // const PORT = process.env.PORT || 5000;
// // // // // // // // const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongodb-service:27017/fullstackdb';
// // // // // // // // const PORT = process.env.PORT || 5000;

// // // // // // // // // Initialize Express App FIRST
// // // // // // // // const app = express();

// // // // // // // // // Middleware - Apply cors AFTER initializing the app
// // // // // // // // app.use(cors({
// // // // // // // //   origin: ['http://localhost:3000', 'http://frontend:80']
// // // // // // // // }));

// // // // // // // // app.use(bodyParser.json());

// // // // // // // // mongoose.connect(MONGO_URI, { 
// // // // // // // //   useNewUrlParser: true, 
// // // // // // // //   useUnifiedTopology: true 
// // // // // // // // })
// // // // // // // // .then(() => console.log('✅ Connected to MongoDB'))
// // // // // // // // .catch((err) => {
// // // // // // // //   console.error('❌ Error connecting to MongoDB:', err.message);
// // // // // // // //   process.exit(1);
// // // // // // // // });

// // // // // // // // // MongoDB User Schema and Model
// // // // // // // // const UserSchema = new mongoose.Schema(
// // // // // // // //   {
// // // // // // // //     name: { type: String, required: true },
// // // // // // // //     email: { type: String, required: true, unique: true },
// // // // // // // //   },
// // // // // // // //   { timestamps: true }
// // // // // // // // );

// // // // // // // // const User = mongoose.model('User', UserSchema);

// // // // // // // // // Routes
// // // // // // // // // Health Check
// // // // // // // // app.get('/', (req, res) => {
// // // // // // // //   res.status(200).send('✅ API is running...');
// // // // // // // // });

// // // // // // // // // Fetch All Users
// // // // // // // // app.get('/api/users', async (req, res) => {
// // // // // // // //   try {
// // // // // // // //     const users = await User.find();
// // // // // // // //     res.status(200).json(users);
// // // // // // // //   } catch (err) {
// // // // // // // //     console.error('❌ Error fetching users:', err.message);
// // // // // // // //     res.status(500).json({ error: 'Failed to fetch users' });
// // // // // // // //   }
// // // // // // // // });

// // // // // // // // // Add a New User
// // // // // // // // app.post('/api/users', async (req, res) => {
// // // // // // // //   const { name, email } = req.body;

// // // // // // // //   if (!name || !email) {
// // // // // // // //     return res.status(400).json({ error: 'Name and email are required' });
// // // // // // // //   }

// // // // // // // //   try {
// // // // // // // //     const newUser = new User({ name, email });
// // // // // // // //     const savedUser = await newUser.save();
// // // // // // // //     res.status(201).json(savedUser);
// // // // // // // //   } catch (err) {
// // // // // // // //     console.error('❌ Error adding user:', err.message);
// // // // // // // //     if (err.code === 11000) {
// // // // // // // //       return res.status(400).json({ error: 'Email already exists' });
// // // // // // // //     }
// // // // // // // //     res.status(500).json({ error: 'Failed to create user' });
// // // // // // // //   }
// // // // // // // // });
// // // // // // // // app.use(cors({
// // // // // // // //   origin: ['http://localhost:3000', 'http://localhost:9090'] // Adjust this based on where your frontend is running
// // // // // // // // }));
// // // // // // // const express = require('express');
// // // // // // // const mongoose = require('mongoose');
// // // // // // // const cors = require('cors');
// // // // // // // const bodyParser = require('body-parser');
// // // // // // // require('dotenv').config();

// // // // // // // const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongodb-service:27017/fullstackdb';
// // // // // // // const PORT = process.env.PORT || 5000;

// // // // // // // const app = express();

// // // // // // // // CORS Configuration: Allow the frontend running on port 9090
// // // // // // // app.use(cors({
// // // // // // //   origin: 'http://localhost:9090', // Adjust the origin to match your frontend URL
// // // // // // //   methods: 'GET,POST', // Allow specific HTTP methods if necessary
// // // // // // //   allowedHeaders: 'Content-Type, Authorization', // Ensure you handle custom headers if needed
// // // // // // //   credentials: true // Optional: if you need to send cookies with requests
// // // // // // // }));

// // // // // // // app.use(bodyParser.json());

// // // // // // // mongoose.connect(MONGO_URI, { 
// // // // // // //   useNewUrlParser: true, 
// // // // // // //   useUnifiedTopology: true 
// // // // // // // })
// // // // // // // .then(() => console.log('✅ Connected to MongoDB'))
// // // // // // // .catch((err) => {
// // // // // // //   console.error('❌ Error connecting to MongoDB:', err.message);
// // // // // // //   process.exit(1);
// // // // // // // });

// // // // // // // // MongoDB User Schema and Model
// // // // // // // const UserSchema = new mongoose.Schema(
// // // // // // //   {
// // // // // // //     name: { type: String, required: true },
// // // // // // //     email: { type: String, required: true, unique: true },
// // // // // // //   },
// // // // // // //   { timestamps: true }
// // // // // // // );

// // // // // // // const User = mongoose.model('User', UserSchema);

// // // // // // // // Routes
// // // // // // // app.get('/', (req, res) => {
// // // // // // //   res.status(200).send('✅ API is running...');
// // // // // // // });

// // // // // // // app.get('/api/users', async (req, res) => {
// // // // // // //   try {
// // // // // // //     const users = await User.find();
// // // // // // //     res.status(200).json(users);
// // // // // // //   } catch (err) {
// // // // // // //     console.error('❌ Error fetching users:', err.message);
// // // // // // //     res.status(500).json({ error: 'Failed to fetch users' });
// // // // // // //   }
// // // // // // // });

// // // // // // // app.post('/api/users', async (req, res) => {
// // // // // // //   const { name, email } = req.body;

// // // // // // //   if (!name || !email) {
// // // // // // //     return res.status(400).json({ error: 'Name and email are required' });
// // // // // // //   }

// // // // // // //   try {
// // // // // // //     const newUser = new User({ name, email });
// // // // // // //     const savedUser = await newUser.save();
// // // // // // //     res.status(201).json(savedUser);
// // // // // // //   } catch (err) {
// // // // // // //     console.error('❌ Error adding user:', err.message);
// // // // // // //     if (err.code === 11000) {
// // // // // // //       return res.status(400).json({ error: 'Email already exists' });
// // // // // // //     }
// // // // // // //     res.status(500).json({ error: 'Failed to create user' });
// // // // // // //   }
// // // // // // // });

// // // // // // // // Start Server
// // // // // // // app.listen(PORT, '0.0.0.0', () => {
// // // // // // //   console.log(`🚀 Server running on port ${PORT}`);
// // // // // // // });
// // // // // // const express = require('express');
// // // // // // const mongoose = require('mongoose');
// // // // // // const cors = require('cors');
// // // // // // const bodyParser = require('body-parser');
// // // // // // require('dotenv').config();

// // // // // // const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongodb-service:27017/fullstackdb';
// // // // // // const PORT = process.env.PORT || 5000;

// // // // // // const app = express();

// // // // // // // CORS configuration: Allow the frontend on port 9090
// // // // // // app.use(cors({
// // // // // //   origin: 'http://localhost:9090', // Allow requests from frontend running on port 9090
// // // // // //   methods: 'GET,POST', // Allow GET and POST methods
// // // // // //   allowedHeaders: 'Content-Type, Authorization', // Handle specific headers
// // // // // //   credentials: true // Allow credentials if needed (cookies, etc.)
// // // // // // }));

// // // // // // app.use(bodyParser.json());

// // // // // // mongoose.connect(MONGO_URI, { 
// // // // // //   useNewUrlParser: true, 
// // // // // //   useUnifiedTopology: true 
// // // // // // })
// // // // // // .then(() => console.log('✅ Connected to MongoDB'))
// // // // // // .catch((err) => {
// // // // // //   console.error('❌ Error connecting to MongoDB:', err.message);
// // // // // //   process.exit(1);
// // // // // // });

// // // // // // // MongoDB User Schema and Model
// // // // // // const UserSchema = new mongoose.Schema(
// // // // // //   {
// // // // // //     name: { type: String, required: true },
// // // // // //     email: { type: String, required: true, unique: true },
// // // // // //   },
// // // // // //   { timestamps: true }
// // // // // // );

// // // // // // const User = mongoose.model('User', UserSchema);

// // // // // // // Routes
// // // // // // app.get('/', (req, res) => {
// // // // // //   res.status(200).send('✅ API is running...');
// // // // // // });

// // // // // // app.get('/api/users', async (req, res) => {
// // // // // //   try {
// // // // // //     const users = await User.find();
// // // // // //     res.status(200).json(users);
// // // // // //   } catch (err) {
// // // // // //     console.error('❌ Error fetching users:', err.message);
// // // // // //     res.status(500).json({ error: 'Failed to fetch users' });
// // // // // //   }
// // // // // // });

// // // // // // app.post('/api/users', async (req, res) => {
// // // // // //   const { name, email } = req.body;

// // // // // //   if (!name || !email) {
// // // // // //     return res.status(400).json({ error: 'Name and email are required' });
// // // // // //   }

// // // // // //   try {
// // // // // //     const newUser = new User({ name, email });
// // // // // //     const savedUser = await newUser.save();
// // // // // //     res.status(201).json(savedUser);
// // // // // //   } catch (err) {
// // // // // //     console.error('❌ Error adding user:', err.message);
// // // // // //     if (err.code === 11000) {
// // // // // //       return res.status(400).json({ error: 'Email already exists' });
// // // // // //     }
// // // // // //     res.status(500).json({ error: 'Failed to create user' });
// // // // // //   }
// // // // // // });

// // // // // // // Start Server
// // // // // // app.listen(PORT, '0.0.0.0', () => {
// // // // // //   console.log(`🚀 Server running on port ${PORT}`);
// // // // // // });
// // // // // const express = require('express');
// // // // // const mongoose = require('mongoose');
// // // // // const cors = require('cors');
// // // // // const bodyParser = require('body-parser');
// // // // // require('dotenv').config();

// // // // // const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongodb-service:27017/fullstackdb';
// // // // // const PORT = process.env.PORT || 5000;

// // // // // const app = express();

// // // // // // Apply CORS middleware to allow requests from http://localhost:9090
// // // // // app.use(cors({
// // // // //   origin: 'http://localhost:9090', // Frontend running on port 9090
// // // // //   methods: 'GET,POST', // Allow GET and POST methods
// // // // //   allowedHeaders: 'Content-Type, Authorization', // Allow specific headers
// // // // //   credentials: true, // Allow credentials (cookies, etc.)
// // // // // }));

// // // // // app.use(bodyParser.json());

// // // // // mongoose.connect(MONGO_URI, { 
// // // // //   useNewUrlParser: true, 
// // // // //   useUnifiedTopology: true 
// // // // // })
// // // // // .then(() => console.log('✅ Connected to MongoDB'))
// // // // // .catch((err) => {
// // // // //   console.error('❌ Error connecting to MongoDB:', err.message);
// // // // //   process.exit(1);
// // // // // });

// // // // // // MongoDB User Schema and Model
// // // // // const UserSchema = new mongoose.Schema(
// // // // //   {
// // // // //     name: { type: String, required: true },
// // // // //     email: { type: String, required: true, unique: true },
// // // // //   },
// // // // //   { timestamps: true }
// // // // // );

// // // // // const User = mongoose.model('User', UserSchema);

// // // // // // Routes
// // // // // app.get('/', (req, res) => {
// // // // //   res.status(200).send('✅ API is running...');
// // // // // });

// // // // // app.get('/api/users', async (req, res) => {
// // // // //   try {
// // // // //     const users = await User.find();
// // // // //     res.status(200).json(users);
// // // // //   } catch (err) {
// // // // //     console.error('❌ Error fetching users:', err.message);
// // // // //     res.status(500).json({ error: 'Failed to fetch users' });
// // // // //   }
// // // // // });

// // // // // app.post('/api/users', async (req, res) => {
// // // // //   const { name, email } = req.body;

// // // // //   if (!name || !email) {
// // // // //     return res.status(400).json({ error: 'Name and email are required' });
// // // // //   }

// // // // //   try {
// // // // //     const newUser = new User({ name, email });
// // // // //     const savedUser = await newUser.save();
// // // // //     res.status(201).json(savedUser);
// // // // //   } catch (err) {
// // // // //     console.error('❌ Error adding user:', err.message);
// // // // //     if (err.code === 11000) {
// // // // //       return res.status(400).json({ error: 'Email already exists' });
// // // // //     }
// // // // //     res.status(500).json({ error: 'Failed to create user' });
// // // // //   }
// // // // // });

// // // // // // Start the server
// // // // // app.listen(PORT, '0.0.0.0', () => {
// // // // //   console.log(`🚀 Server running on port ${PORT}`);
// // // // // });

// // // // // const express = require('express');
// // // // // const mongoose = require('mongoose');
// // // // // const cors = require('cors');
// // // // // const bodyParser = require('body-parser');
// // // // // require('dotenv').config();

// // // // // const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/fullstackdb';
// // // // // const PORT = process.env.PORT || 5000;

// // // // // const app = express();

// // // // // app.use(cors({
// // // // //   origin: '*',  // Allow requests from frontend
// // // // //   methods: 'GET, POST, PUT, DELETE',  // Allow these methods
// // // // //   allowedHeaders: 'Content-Type, Authorization',  // Allow these headers
// // // // //   credentials: true,
// // // // // }));
// // // // // app.use(bodyParser.json());

// // // // // mongoose.connect(MONGO_URI, {
// // // // //   useNewUrlParser: true,
// // // // //   useUnifiedTopology: true
// // // // // })
// // // // // .then(() => console.log('✅ Connected to MongoDB'))
// // // // // .catch((err) => {
// // // // //   console.error('❌ Error connecting to MongoDB:', err.message);
// // // // //   process.exit(1);
// // // // // });

// // // // // // MongoDB User Schema and Model
// // // // // const UserSchema = new mongoose.Schema(
// // // // //   {
// // // // //     name: { type: String, required: true },
// // // // //     email: { type: String, required: true, unique: true },
// // // // //   },
// // // // //   { timestamps: true }
// // // // // );

// // // // // const User = mongoose.model('User', UserSchema);

// // // // // // Routes
// // // // // app.get('/', (req, res) => {
// // // // //   res.status(200).send('✅ API is running...');
// // // // // });

// // // // // app.get('/api/users', async (req, res) => {
// // // // //   try {
// // // // //     const users = await User.find();
// // // // //     res.status(200).json(users);
// // // // //   } catch (err) {
// // // // //     console.error('❌ Error fetching users:', err.message);
// // // // //     res.status(500).json({ error: 'Failed to fetch users' });
// // // // //   }
// // // // // });

// // // // // app.post('/api/users', async (req, res) => {
// // // // //   const { name, email } = req.body;

// // // // //   if (!name || !email) {
// // // // //     return res.status(400).json({ error: 'Name and email are required' });
// // // // //   }

// // // // //   try {
// // // // //     const newUser = new User({ name, email });
// // // // //     const savedUser = await newUser.save();
// // // // //     res.status(201).json(savedUser);
// // // // //   } catch (err) {
// // // // //     console.error('❌ Error adding user:', err.message);
// // // // //     if (err.code === 11000) {
// // // // //       return res.status(400).json({ error: 'Email already exists' });
// // // // //     }
// // // // //     res.status(500).json({ error: 'Failed to create user' });
// // // // //   }
// // // // // });

// // // // // // Start the server
// // // // // app.listen(PORT, '0.0.0.0', () => {
// // // // //   console.log(`🚀 Server running on port ${PORT}`);
// // // // // });
// // // // // const express = require('express');
// // // // // const mongoose = require('mongoose');
// // // // // const cors = require('cors');
// // // // // const bodyParser = require('body-parser');
// // // // // require('dotenv').config();

// // // // // const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/fullstackdb';
// // // // // const PORT = process.env.PORT || 5000;

// // // // // const app = express();

// // // // // // Comprehensive CORS configuration
// // // // // const corsOptions = {
// // // // //   origin: function (origin, callback) {
// // // // //     // Allow requests with no origin (like mobile apps or curl requests)
// // // // //     const allowedOrigins = [
// // // // //       'http://localhost:3000', 
// // // // //       'http://localhost:9090', 
// // // // //       'http://127.0.0.1:3000', 
// // // // //       'http://127.0.0.1:9090'
// // // // //     ];

// // // // //     if (!origin || allowedOrigins.indexOf(origin) !== -1) {
// // // // //       callback(null, true);
// // // // //     } else {
// // // // //       callback(new Error('Not allowed by CORS'));
// // // // //     }
// // // // //   },
// // // // //   methods: ['GET', 'POST', 'PUT', 'DELETE'],
// // // // //   allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin'],
// // // // //   credentials: true,
// // // // //   optionsSuccessStatus: 200
// // // // // };

// // // // // // Apply CORS middleware
// // // // // app.use(cors(corsOptions));

// // // // // // Additional security headers
// // // // // app.use((req, res, next) => {
// // // // //   res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
// // // // //   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
// // // // //   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
// // // // //   // Handle preflight requests
// // // // //   if (req.method === 'OPTIONS') {
// // // // //     return res.sendStatus(200);
// // // // //   }
  
// // // // //   next();
// // // // // });

// // // // // // Body parsing middleware
// // // // // app.use(bodyParser.json());
// // // // // app.use(bodyParser.urlencoded({ extended: true }));

// // // // // // MongoDB connection
// // // // // mongoose.connect(MONGO_URI, {
// // // // //   useNewUrlParser: true,
// // // // //   useUnifiedTopology: true
// // // // // })
// // // // // .then(() => console.log('✅ Connected to MongoDB'))
// // // // // .catch((err) => {
// // // // //   console.error('❌ Error connecting to MongoDB:', err.message);
// // // // //   process.exit(1);
// // // // // });

// // // // // // MongoDB User Schema and Model
// // // // // const UserSchema = new mongoose.Schema(
// // // // //   {
// // // // //     name: { type: String, required: true },
// // // // //     email: { type: String, required: true, unique: true },
// // // // //   },
// // // // //   { timestamps: true }
// // // // // );

// // // // // const User = mongoose.model('User', UserSchema);

// // // // // // Routes
// // // // // app.get('/', (req, res) => {
// // // // //   res.status(200).send('✅ API is running...');
// // // // // });

// // // // // app.get('/api/users', async (req, res) => {
// // // // //   try {
// // // // //     const users = await User.find();
// // // // //     res.status(200).json(users);
// // // // //   } catch (err) {
// // // // //     console.error('❌ Error fetching users:', err.message);
// // // // //     res.status(500).json({ error: 'Failed to fetch users' });
// // // // //   }
// // // // // });

// // // // // app.post('/api/users', async (req, res) => {
// // // // //   const { name, email } = req.body;

// // // // //   if (!name || !email) {
// // // // //     return res.status(400).json({ error: 'Name and email are required' });
// // // // //   }

// // // // //   try {
// // // // //     const newUser = new User({ name, email });
// // // // //     const savedUser = await newUser.save();
// // // // //     res.status(201).json(savedUser);
// // // // //   } catch (err) {
// // // // //     console.error('❌ Error adding user:', err.message);
// // // // //     if (err.code === 11000) {
// // // // //       return res.status(400).json({ error: 'Email already exists' });
// // // // //     }
// // // // //     res.status(500).json({ error: 'Failed to create user' });
// // // // //   }
// // // // // });

// // // // // // Error handling middleware
// // // // // app.use((err, req, res, next) => {
// // // // //   console.error('Unhandled Error:', err);
// // // // //   res.status(500).json({
// // // // //     error: 'An unexpected error occurred',
// // // // //     message: err.message
// // // // //   });
// // // // // });

// // // // // // Start the server
// // // // // app.listen(PORT, '0.0.0.0', () => {
// // // // //   console.log(`🚀 Server running on port ${PORT}`);
// // // // // });
// // // // const express = require('express');
// // // // const mongoose = require('mongoose');
// // // // const cors = require('cors');
// // // // const bodyParser = require('body-parser');
// // // // require('dotenv').config();

// // // // const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/fullstackdb';
// // // // const PORT = process.env.PORT || 5000;

// // // // const app = express();

// // // // // Comprehensive CORS configuration
// // // // // const corsOptions = {
// // // // //   origin: function (origin, callback) {
// // // // //     // Allow requests with no origin (like mobile apps or curl requests)
// // // // //     const allowedOrigins = [
// // // // //       'http://localhost:3000', 
// // // // //       'http://localhost:9090', 
// // // // //       'http://127.0.0.1:3000', 
// // // // //       'http://127.0.0.1:9090',
// // // // //       'http://localhost:5000',
// // // // //       'http://127.0.0.1:5000'
// // // // //     ];

// // // // //     if (!origin || allowedOrigins.indexOf(origin) !== -1) {
// // // // //       callback(null, true);
// // // // //     } else {
// // // // //       callback(new Error('Not allowed by CORS'));
// // // // //     }
// // // // //   },
// // // // //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
// // // // //   allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin'],
// // // // //   credentials: true,
// // // // //   optionsSuccessStatus: 200
// // // // // };
// // // // const corsOptions = {
// // // //   origin: function (origin, callback) {
// // // //     const allowedOrigins = [
// // // //       'http://localhost:3000', 
// // // //       'http://localhost:9090', 
// // // //       'http://127.0.0.1:3000', 
// // // //       'http://127.0.0.1:9090',
// // // //       'http://localhost:5000',
// // // //       'http://127.0.0.1:5000'
// // // //     ];

// // // //     if (!origin || allowedOrigins.indexOf(origin) !== -1) {
// // // //       callback(null, true);
// // // //     } else {
// // // //       callback(new Error('Not allowed by CORS'));
// // // //     }
// // // //   },
// // // //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
// // // //   allowedHeaders: [
// // // //     'Content-Type', 
// // // //     'Authorization', 
// // // //     'Access-Control-Allow-Origin',
// // // //     'X-Requested-With'
// // // //   ],
// // // //   credentials: true,
// // // //   optionsSuccessStatus: 200
// // // // };

// // // // // Apply CORS middleware
// // // // // app.use(cors(corsOptions));

// // // // // Remove the additional custom middleware as it's now redundant

// // // // // Apply CORS middleware BEFORE other middleware
// // // // app.use(cors(corsOptions));

// // // // // Additional security and CORS headers middleware
// // // // app.use((req, res, next) => {
// // // //   const allowedOrigins = [
// // // //     'http://localhost:3000', 
// // // //     'http://localhost:9090', 
// // // //     'http://127.0.0.1:3000', 
// // // //     'http://127.0.0.1:9090'
// // // //   ];
  
// // // //   const origin = req.headers.origin;
// // // //   if (allowedOrigins.includes(origin)) {
// // // //     res.setHeader('Access-Control-Allow-Origin', origin);
// // // //   }
  
// // // //   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
// // // //   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
// // // //   res.header('Access-Control-Allow-Credentials', true);
  
// // // //   // Handle preflight requests
// // // //   if (req.method === 'OPTIONS') {
// // // //     return res.sendStatus(200);
// // // //   }
  
// // // //   next();
// // // // });

// // // // // Body parsing middleware
// // // // app.use(bodyParser.json());
// // // // app.use(bodyParser.urlencoded({ extended: true }));

// // // // // MongoDB connection
// // // // mongoose.connect(MONGO_URI, {
// // // //   useNewUrlParser: true,
// // // //   useUnifiedTopology: true
// // // // })
// // // // .then(() => console.log('✅ Connected to MongoDB'))
// // // // .catch((err) => {
// // // //   console.error('❌ Error connecting to MongoDB:', err.message);
// // // //   process.exit(1);
// // // // });

// // // // // MongoDB User Schema and Model
// // // // const UserSchema = new mongoose.Schema(
// // // //   {
// // // //     name: { type: String, required: true },
// // // //     email: { type: String, required: true, unique: true },
// // // //   },
// // // //   { timestamps: true }
// // // // );

// // // // const User = mongoose.model('User', UserSchema);

// // // // // Routes
// // // // app.get('/', (req, res) => {
// // // //   res.status(200).send('✅ API is running...');
// // // // });

// // // // // Get all users
// // // // app.get('/api/users', async (req, res) => {
// // // //   try {
// // // //     const users = await User.find();
// // // //     res.status(200).json(users);
// // // //   } catch (err) {
// // // //     console.error('❌ Error fetching users:', err.message);
// // // //     res.status(500).json({ error: 'Failed to fetch users' });
// // // //   }
// // // // });

// // // // // Create a new user
// // // // app.post('/api/users', async (req, res) => {
// // // //   const { name, email } = req.body;

// // // //   if (!name || !email) {
// // // //     return res.status(400).json({ error: 'Name and email are required' });
// // // //   }

// // // //   try {
// // // //     // Check if email already exists
// // // //     const existingUser = await User.findOne({ email });
// // // //     if (existingUser) {
// // // //       return res.status(400).json({ error: 'Email already exists' });
// // // //     }

// // // //     const newUser = new User({ name, email });
// // // //     const savedUser = await newUser.save();
// // // //     res.status(201).json(savedUser);
// // // //   } catch (err) {
// // // //     console.error('❌ Error adding user:', err.message);
// // // //     res.status(500).json({ error: 'Failed to create user' });
// // // //   }
// // // // });

// // // // // Error handling middleware
// // // // // app.use((err, req, res, next) => {
// // // // //   console.error('Unhandled Error:', err);
// // // // //   res.status(500).json({
// // // // //     error: 'An unexpected error occurred',
// // // // //     message: err.message
// // // // //   });
// // // // // });
// // // // app.use((err, req, res, next) => {
// // // //   console.error('Error Details:', {
// // // //     name: err.name,
// // // //     message: err.message,
// // // //     origin: req.headers.origin,
// // // //     method: req.method
// // // //   });

// // // //   if (err.name === 'CorsError') {
// // // //     return res.status(403).json({
// // // //       error: 'CORS Error',
// // // //       message: 'Cross-Origin Request Blocked'
// // // //     });
// // // //   }

// // // //   // Existing error handling
// // // //   res.status(500).json({
// // // //     error: 'An unexpected error occurred',
// // // //     message: err.message
// // // //   });
// // // // });
// // // // const helmet = require('helmet');
// // // // const rateLimit = require('express-rate-limit');

// // // // // Add before route definitions
// // // // app.use(helmet());

// // // // const apiLimiter = rateLimit({
// // // //   windowMs: 15 * 60 * 1000, // 15 minutes
// // // //   max: 100 // limit each IP to 100 requests per windowMs
// // // // });
// // // // app.use('/api/', apiLimiter);
// // // // // Start the server
// // // // app.listen(PORT, '0.0.0.0', () => {
// // // //   console.log(`🚀 Server running on port ${PORT}`);
// // // // });
// // // // const validator = require('validator');

// // // // app.post('/api/users', async (req, res) => {
// // // //   const { name, email } = req.body;

// // // //   // Enhanced validation
// // // //   if (!name || name.trim().length < 2) {
// // // //     return res.status(400).json({ error: 'Name must be at least 2 characters' });
// // // //   }

// // // //   if (!email || !validator.isEmail(email)) {
// // // //     return res.status(400).json({ error: 'Invalid email format' });
// // // //   }

// // // //   try {
// // // //     // Existing user creation logic...
// // // //   } catch (err) {
// // // //     // Existing error handling...
// // // //   }
// // // // });
// // // // const winston = require('winston');

// // // // const logger = winston.createLogger({
// // // //   level: 'info',
// // // //   format: winston.format.combine(
// // // //     winston.format.timestamp(),
// // // //     winston.format.json()
// // // //   ),
// // // //   transports: [
// // // //     new winston.transports.Console(),
// // // //     new winston.transports.File({ filename: 'error.log', level: 'error' }),
// // // //     new winston.transports.File({ filename: 'combined.log' })
// // // //   ]
// // // // });

// // // // // Replace console.log/error with logger
// // // // logger.info('Connected to MongoDB');
// // // // logger.error('Error connecting to MongoDB', err);
// // // const express = require('express');
// // // const cors = require('cors');
// // // const bodyParser = require('body-parser');
// // // const mongoose = require('mongoose');
// // // const helmet = require('helmet');
// // // const rateLimit = require('express-rate-limit');
// // // const validator = require('validator');
// // // const winston = require('winston');

// // // const app = express();
// // // const PORT = process.env.PORT || 5000;
// // // // const MONGO_URI = 'your-mongo-uri'; // Replace with your actual MongoDB URI
// // // const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/fullstackdb';

// // // // Winston logger setup
// // // const logger = winston.createLogger({
// // //   level: 'info',
// // //   format: winston.format.combine(
// // //     winston.format.timestamp(),
// // //     winston.format.json()
// // //   ),
// // //   transports: [
// // //     new winston.transports.Console(),
// // //     new winston.transports.File({ filename: 'error.log', level: 'error' }),
// // //     new winston.transports.File({ filename: 'combined.log' })
// // //   ]
// // // });

// // // // CORS options setup
// // // const corsOptions = {
// // //   origin: function (origin, callback) {
// // //     const allowedOrigins = [
// // //       'http://localhost:3000',
// // //       'http://localhost:9090',
// // //       'http://127.0.0.1:3000',
// // //       'http://127.0.0.1:9090',
// // //       'http://localhost:5000',
// // //       'http://127.0.0.1:5000'
// // //     ];

// // //     if (!origin || allowedOrigins.indexOf(origin) !== -1) {
// // //       callback(null, true);
// // //     } else {
// // //       callback(new Error('Not allowed by CORS'));
// // //     }
// // //   },
// // //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
// // //   allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin', 'X-Requested-With'],
// // //   credentials: true,
// // //   optionsSuccessStatus: 200
// // // };

// // // // Apply CORS middleware before other middleware
// // // app.use(cors(corsOptions));

// // // // Apply security and other headers
// // // app.use(helmet());

// // // // Rate limiting middleware for API routes
// // // const apiLimiter = rateLimit({
// // //   windowMs: 15 * 60 * 1000, // 15 minutes
// // //   max: 100 // limit each IP to 100 requests per windowMs
// // // });
// // // app.use('/api/', apiLimiter);

// // // // Body parsing middleware
// // // app.use(bodyParser.json());
// // // app.use(bodyParser.urlencoded({ extended: true }));

// // // // MongoDB connection
// // // mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// // //   .then(() => logger.info('✅ Connected to MongoDB'))
// // //   .catch((err) => {
// // //     logger.error('❌ Error connecting to MongoDB:', err.message);
// // //     process.exit(1);
// // //   });

// // // // MongoDB User Schema and Model
// // // const UserSchema = new mongoose.Schema({
// // //   name: { type: String, required: true },
// // //   email: { type: String, required: true, unique: true }
// // // }, { timestamps: true });

// // // const User = mongoose.model('User', UserSchema);

// // // // Routes
// // // app.get('/', (req, res) => {
// // //   res.status(200).send('✅ API is running...');
// // // });

// // // // Get all users
// // // app.get('/api/users', async (req, res) => {
// // //   try {
// // //     const users = await User.find();
// // //     res.status(200).json(users);
// // //   } catch (err) {
// // //     logger.error('❌ Error fetching users:', err.message);
// // //     res.status(500).json({ error: 'Failed to fetch users' });
// // //   }
// // // });

// // // // Create a new user with validation
// // // app.post('/api/users', async (req, res) => {
// // //   const { name, email } = req.body;

// // //   // Enhanced validation
// // //   if (!name || name.trim().length < 2) {
// // //     return res.status(400).json({ error: 'Name must be at least 2 characters' });
// // //   }

// // //   if (!email || !validator.isEmail(email)) {
// // //     return res.status(400).json({ error: 'Invalid email format' });
// // //   }

// // //   try {
// // //     // Check if email already exists
// // //     const existingUser = await User.findOne({ email });
// // //     if (existingUser) {
// // //       return res.status(400).json({ error: 'Email already exists' });
// // //     }

// // //     const newUser = new User({ name, email });
// // //     const savedUser = await newUser.save();
// // //     res.status(201).json(savedUser);
// // //   } catch (err) {
// // //     logger.error('❌ Error adding user:', err.message);
// // //     res.status(500).json({ error: 'Failed to create user' });
// // //   }
// // // });

// // // // Global error handling middleware
// // // app.use((err, req, res, next) => {
// // //   logger.error('Error Details:', {
// // //     name: err.name,
// // //     message: err.message,
// // //     origin: req.headers.origin,
// // //     method: req.method
// // //   });

// // //   if (err.name === 'CorsError') {
// // //     return res.status(403).json({
// // //       error: 'CORS Error',
// // //       message: 'Cross-Origin Request Blocked'
// // //     });
// // //   }

// // //   res.status(500).json({
// // //     error: 'An unexpected error occurred',
// // //     message: err.message
// // //   });
// // // });

// // // // Start the server
// // // app.listen(PORT, '0.0.0.0', () => {
// // //   logger.info(`🚀 Server running on port ${PORT}`);
// // // });
// // // const express = require('express');
// // // const cors = require('cors');
// // // const bodyParser = require('body-parser');
// // // const mongoose = require('mongoose');
// // // const helmet = require('helmet');
// // // const rateLimit = require('express-rate-limit');
// // // const validator = require('validator');
// // // const winston = require('winston');

// // // const app = express();
// // // const PORT = process.env.PORT || 5000;
// // // const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/fullstackdb';

// // // // Winston logger setup
// // // const logger = winston.createLogger({
// // //   level: 'info',
// // //   format: winston.format.combine(
// // //     winston.format.timestamp(),
// // //     winston.format.json()
// // //   ),
// // //   transports: [
// // //     new winston.transports.Console(),
// // //     new winston.transports.File({ filename: 'error.log', level: 'error' }),
// // //     new winston.transports.File({ filename: 'combined.log' })
// // //   ]
// // // });

// // // // CORS configuration with more comprehensive settings
// // // const corsOptions = {
// // //   origin: function (origin, callback) {
// // //     const allowedOrigins = [
// // //       'http://localhost:3000',
// // //       'http://localhost:9090',
// // //       'http://127.0.0.1:3000',
// // //       'http://127.0.0.1:9090',
// // //       'http://localhost:5000',
// // //       'http://127.0.0.1:5000',
// // //       'http://localhost',
// // //       'http://127.0.0.1'
// // //     ];

// // //     if (!origin || allowedOrigins.indexOf(origin) !== -1) {
// // //       callback(null, true);
// // //     } else {
// // //       callback(new Error('Not allowed by CORS'));
// // //     }
// // //   },
// // //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
// // //   allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
// // //   credentials: true,
// // //   optionsSuccessStatus: 200
// // // };

// // // // Apply CORS middleware first
// // // app.use(cors(corsOptions));

// // // // CORS preflight handler
// // // app.options('*', cors(corsOptions));

// // // // Apply security headers
// // // app.use(helmet());

// // // // Rate limiting middleware
// // // const apiLimiter = rateLimit({
// // //   windowMs: 15 * 60 * 1000,
// // //   max: 100
// // // });
// // // app.use('/api/', apiLimiter);

// // // // Body parsing middleware
// // // app.use(bodyParser.json());
// // // app.use(bodyParser.urlencoded({ extended: true }));

// // // // MongoDB connection
// // // mongoose.connect(MONGO_URI, { 
// // //   useNewUrlParser: true, 
// // //   useUnifiedTopology: true 
// // // })
// // // .then(() => logger.info('✅ Connected to MongoDB'))
// // // .catch((err) => {
// // //   logger.error('❌ Error connecting to MongoDB:', err.message);
// // //   process.exit(1);
// // // });

// // // // User Schema
// // // const UserSchema = new mongoose.Schema({
// // //   name: { 
// // //     type: String, 
// // //     required: true, 
// // //     trim: true, 
// // //     minlength: 2 
// // //   },
// // //   email: { 
// // //     type: String, 
// // //     required: true, 
// // //     unique: true, 
// // //     lowercase: true,
// // //     validate: {
// // //       validator: validator.isEmail,
// // //       message: 'Invalid email format'
// // //     }
// // //   }
// // // }, { timestamps: true });

// // // const User = mongoose.model('User', UserSchema);

// // // // Routes
// // // app.get('/', (req, res) => {
// // //   res.status(200).send('✅ API is running...');
// // // });

// // // // Get all users
// // // app.get('/api/users', async (req, res) => {
// // //   try {
// // //     const users = await User.find();
// // //     res.status(200).json(users);
// // //   } catch (err) {
// // //     logger.error('❌ Error fetching users:', err.message);
// // //     res.status(500).json({ error: 'Failed to fetch users' });
// // //   }
// // // });

// // // // Create a new user
// // // app.post('/api/users', async (req, res) => {
// // //   const { name, email } = req.body;

// // //   try {
// // //     // Check if user with email already exists
// // //     const existingUser = await User.findOne({ email });
// // //     if (existingUser) {
// // //       return res.status(400).json({ error: 'Email already exists' });
// // //     }

// // //     // Create new user
// // //     const newUser = new User({ name, email });
// // //     const savedUser = await newUser.save();
// // //     res.status(201).json(savedUser);
// // //   } catch (err) {
// // //     logger.error('❌ Error adding user:', err.message);
    
// // //     // Handle validation errors
// // //     if (err.name === 'ValidationError') {
// // //       return res.status(400).json({ 
// // //         error: Object.values(err.errors).map(e => e.message)[0] 
// // //       });
// // //     }

// // //     res.status(500).json({ error: 'Failed to create user' });
// // //   }
// // // });

// // // // Global error handling middleware
// // // app.use((err, req, res, next) => {
// // //   // Log error details
// // //   logger.error('Unhandled Error:', {
// // //     name: err.name,
// // //     message: err.message,
// // //     stack: err.stack
// // //   });

// // //   // Send error response
// // //   res.status(500).json({
// // //     error: 'An unexpected error occurred',
// // //     message: err.message
// // //   });
// // // });

// // // // Start the server
// // // app.listen(PORT, '0.0.0.0', () => {
// // //   logger.info(`🚀 Server running on port ${PORT}`);
// // // });
// // // const express = require('express');
// // // const cors = require('cors');
// // // const mongoose = require('mongoose');
// // // const bodyParser = require('body-parser');
// // // app.use(express.json());

// // // const app = express();
// // // const PORT = process.env.PORT || 5000;

// // // // CORS Configuration
// // // const corsOptions = {
// // //   origin: [
// // //     'http://localhost:3000', 
// // //     'http://localhost:9090', 
// // //     'http://127.0.0.1:3000', 
// // //     'http://127.0.0.1:9090',
// // //     '*'
// // //   ],
// // //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
// // //   allowedHeaders: ['Content-Type', 'Authorization']
// // // };

// // // app.use(cors(corsOptions));
// // // app.use(bodyParser.json());
// // // app.use(bodyParser.urlencoded({ extended: true }));

// // // // MongoDB Connection
// // // mongoose.connect('mongodb://mongodb:27017/fullstackdb', {
// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true
// // // })
// // // .then(() => console.log('MongoDB Connected Successfully'))
// // // .catch((err) => console.error('MongoDB Connection Error:', err));

// // // // User Schema
// // // const UserSchema = new mongoose.Schema({
// // //   name: { 
// // //     type: String, 
// // //     required: true, 
// // //     minlength: 2 
// // //   },
// // //   email: { 
// // //     type: String, 
// // //     required: true, 
// // //     unique: true 
// // //   }
// // // }, { timestamps: true });

// // // const User = mongoose.model('User', UserSchema);

// // // // Routes
// // // app.get('/api/users', async (req, res) => {
// // //   try {
// // //     const users = await User.find();
// // //     res.status(200).json(users);
// // //   } catch (error) {
// // //     res.status(500).json({ message: 'Error fetching users', error });
// // //   }
// // // });

// // // app.post('/api/users', async (req, res) => {
// // //   try {
// // //     const { name, email } = req.body;
    
// // //     // Check if user exists
// // //     const existingUser = await User.findOne({ email });
// // //     if (existingUser) {
// // //       return res.status(400).json({ message: 'Email already exists' });
// // //     }

// // //     const newUser = new User({ name, email });
// // //     await newUser.save();
// // //     res.status(201).json(newUser);
// // //   } catch (error) {
// // //     res.status(500).json({ message: 'Error creating user', error });
// // //   }
// // // });
// // // // Add this to server.js
// // // // app.use((err, req, res, next) => {
// // // //   console.error(err.stack);
// // // //   res.status(500).send({
// // // //     message: 'Something broke!',
// // // //     error: process.env.NODE_ENV === 'production' ? {} : err.stack
// // // //   });
// // // // });
// // // app.use((req, res, next) => {
// // //   res.header('Access-Control-Allow-Origin', 'http://localhost:9090');
// // //   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
// // //   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
// // //   // Handle preflight requests
// // //   if (req.method === 'OPTIONS') {
// // //     return res.sendStatus(200);
// // //   }
// // //   next();
// // // });
// // // app.use(cors({
// // //   origin: [
// // //     'http://localhost:3000',     // Local frontend
// // //     'http://localhost:9090',     // Additional local frontend (if used)
// // //     'http://frontend:80',         // Docker frontend service
// // //     'http://localhost:5000',      // Local backend
// // //     'http://backend:5000'         // Docker backend service
// // //   ],
// // //   credentials: true,
// // //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
// // //   allowedHeaders: ['Content-Type', 'Authorization']
// // // }));

// // // // Start Server
// // // app.listen(PORT, () => {
// // //   console.log(`Server running on port ${PORT}`);
// // // });
// // // app.use(cors({
// // //   origin: ['http://localhost:3000', 'http://localhost:9090'], // Add all origins that might access your API
// // //   credentials: true
// // // }));
// // // const express = require('express');
// // // const app = express();
// // // const mongoose = require('mongoose');
// // // const cors = require('cors');

// // // app.use(express.json());


// // // const PORT = process.env.PORT || 5000;

// // // // CORS Configuration
// // // const corsOptions = {
// // //   origin: [
// // //     'http://localhost:3000', 
// // //     'http://localhost:9090', 
// // //     'http://127.0.0.1:3000', 
// // //     'http://127.0.0.1:9090',
// // //     '*'
// // //   ],
// // //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
// // //   allowedHeaders: ['Content-Type', 'Authorization'],
// // //   credentials: true
// // // };

// // // // Middleware
// // // app.use(cors(corsOptions));  // One CORS middleware for all requests
// // // app.use(express.urlencoded({ extended: true }));

// // // // MongoDB Connection
// // // mongoose.connect('mongodb://mongodb:27017/fullstackdb', {
// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true
// // // })
// // // .then(() => console.log('MongoDB Connected Successfully'))
// // // .catch((err) => console.error('MongoDB Connection Error:', err));

// // // // User Schema
// // // const UserSchema = new mongoose.Schema({
// // //   name: { 
// // //     type: String, 
// // //     required: true, 
// // //     minlength: 2 
// // //   },
// // //   email: { 
// // //     type: String, 
// // //     required: true, 
// // //     unique: true 
// // //   }
// // // }, { timestamps: true });

// // // const User = mongoose.model('User', UserSchema);

// // // // Routes
// // // app.get('/api/users', async (req, res) => {
// // //   try {
// // //     const users = await User.find();
// // //     res.status(200).json(users);
// // //   } catch (error) {
// // //     res.status(500).json({ message: 'Error fetching users', error });
// // //   }
// // // });

// // // app.post('/api/users', async (req, res) => {
// // //   try {
// // //     const { name, email } = req.body;
    
// // //     // Check if user exists
// // //     const existingUser = await User.findOne({ email });
// // //     if (existingUser) {
// // //       return res.status(400).json({ message: 'Email already exists' });
// // //     }

// // //     const newUser = new User({ name, email });
// // //     await newUser.save();
// // //     res.status(201).json(newUser);
// // //   } catch (error) {
// // //     res.status(500).json({ message: 'Error creating user', error });
// // //   }
// // // });



// // // // Start Server
// // // app.listen(PORT, () => {
// // //   console.log(`Server running on port ${PORT}`);
// // // });
// // // const express = require('express');
// // // const mongoose = require('mongoose');
// // // const cors = require('cors');

// // // const app = express();

// // // // CORS Configuration
// // // const corsOptions = {
// // //   origin: [
// // //     'http://localhost:3000', 
// // //     'http://localhost:9090', 
// // //     'http://127.0.0.1:3000', 
// // //     'http://127.0.0.1:9090'
// // //   ],
// // //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
// // //   allowedHeaders: ['Content-Type', 'Authorization'],
// // //   credentials: true
// // // };

// // // app.use(cors(corsOptions));  // One CORS middleware for all requests
// // // app.use(express.json());
// // // app.use(express.urlencoded({ extended: true }));

// // // // MongoDB Connection
// // // mongoose.connect('mongodb://mongodb:27017/fullstackdb', {
// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true
// // // })
// // // .then(() => console.log('MongoDB Connected Successfully'))
// // // .catch((err) => console.error('MongoDB Connection Error:', err));

// // // // User Schema
// // // const UserSchema = new mongoose.Schema({
// // //   name: { 
// // //     type: String, 
// // //     required: true, 
// // //     minlength: 2 
// // //   },
// // //   email: { 
// // //     type: String, 
// // //     required: true, 
// // //     unique: true 
// // //   }
// // // }, { timestamps: true });

// // // const User = mongoose.model('User', UserSchema);
// // // app.get('/api/users', async (req, res) => {
// // //   try {
// // //     const users = await User.find();
// // //     res.status(200).json(users);
// // //   } catch (error) {
// // //     res.status(500).json({ message: 'Error fetching users', error });
// // //   }
// // // });

// // // app.post('/api/users', async (req, res) => {
// // //   try {
// // //     const { name, email } = req.body;

// // //     // Check if user exists
// // //     const existingUser = await User.findOne({ email });
// // //     if (existingUser) {
// // //       return res.status(400).json({ message: 'Email already exists' });
// // //     }

// // //     const newUser = new User({ name, email });
// // //     await newUser.save();
// // //     res.status(201).json(newUser);
// // //   } catch (error) {
// // //     res.status(500).json({ message: 'Error creating user', error });
// // //   }
// // // });

// // // // Start Server
// // // const PORT = process.env.PORT || 5000;
// // // app.listen(PORT, () => {
// // //   console.log(`Server running on port ${PORT}`);
// // // });
// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');

// // const app = express();

// // // CORS Configuration
// // const corsOptions = {
// //   origin: [
// //     'http://localhost:3000',  // React app on localhost:3000 (if applicable)
// //     'http://localhost:9090',  // Your frontend app on localhost:9090
// //     'http://127.0.0.1:3000', // Localhost with a different IP
// //     'http://127.0.0.1:9090'  // Localhost with a different IP
// //   ],
// //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
// //   allowedHeaders: ['Content-Type', 'Authorization'],
// //   credentials: true, // Ensure cookies and credentials are sent
// // };

// // // Apply CORS middleware globally
// // app.use(cors(corsOptions));
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));

// // // MongoDB Connection
// // mongoose.connect('mongodb://mongodb:27017/fullstackdb', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true
// // })
// // .then(() => console.log('MongoDB Connected Successfully'))
// // .catch((err) => console.error('MongoDB Connection Error:', err));

// // // User Schema
// // const UserSchema = new mongoose.Schema({
// //   name: { type: String, required: true, minlength: 2 },
// //   email: { type: String, required: true, unique: true }
// // }, { timestamps: true });

// // const User = mongoose.model('User', UserSchema);

// // app.get('/api/users', async (req, res) => {
// //   try {
// //     const users = await User.find();
// //     res.status(200).json(users);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error fetching users', error });
// //   }
// // });

// // app.post('/api/users', async (req, res) => {
// //   try {
// //     const { name, email } = req.body;

// //     // Check if user exists
// //     const existingUser = await User.findOne({ email });
// //     if (existingUser) {
// //       return res.status(400).json({ message: 'Email already exists' });
// //     }

// //     const newUser = new User({ name, email });
// //     await newUser.save();
// //     res.status(201).json(newUser);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error creating user', error });
// //   }
// // });

// // // Start Server
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });
// // const express = require('express');
// // const mongoose = require('mongoose');
// // // const cors = require('cors');
// // // app.options('*', cors()); // Handle preflight requests for all routes

// // const app = express();
// // const cors = require('cors');
// // app.use(cors({
// //     origin: 'http://localhost:9090', // Allow requests from the frontend's origin
// //     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
// //     allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
// // }));

// // // CORS Configuration
// // const corsOptions = {
// //   origin: [
// //     'http://localhost:9090',   // Allow requests from your frontend
// //     'http://localhost:3000',   // (Add any other origins if applicable)
// //     'http://127.0.0.1:9090',
// //   ],
// //   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
// //   allowedHeaders: ['Content-Type', 'Authorization'],
// //   credentials: true,  // Make sure credentials are allowed
// // };

// // // Apply the CORS middleware globally before routes
// // app.use(cors(corsOptions));

// // // Other middleware
// // app.use(express.json());
// // app.use(express.urlencoded({ extended: true }));

// // // MongoDB Connection
// // mongoose.connect('mongodb://mongodb:27017/fullstackdb', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true
// // })
// // .then(() => console.log('MongoDB Connected Successfully'))
// // .catch((err) => console.error('MongoDB Connection Error:', err));

// // // Define User Schema
// // const UserSchema = new mongoose.Schema({
// //   name: { type: String, required: true, minlength: 2 },
// //   email: { type: String, required: true, unique: true }
// // }, { timestamps: true });

// // const User = mongoose.model('User', UserSchema);

// // app.get('/api/users', async (req, res) => {
// //   try {
// //     const users = await User.find();
// //     res.status(200).json(users);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error fetching users', error });
// //   }
// // });

// // app.post('/api/users', async (req, res) => {
// //   try {
// //     const { name, email } = req.body;

// //     // Check if user exists
// //     const existingUser = await User.findOne({ email });
// //     if (existingUser) {
// //       return res.status(400).json({ message: 'Email already exists' });
// //     }

// //     const newUser = new User({ name, email });
// //     await newUser.save();
// //     res.status(201).json(newUser);
// //   } catch (error) {
// //     res.status(500).json({ message: 'Error creating user', error });
// //   }
// // });

// // // Start Server
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');  // Import cors package

// const app = express();

// const cors = require('cors');
// const corsOptions = {
//   origin: ['http://localhost:9090', 'http://your-production-domain.com'],
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true,
// };
// // app.use(cors(corsOptions));
// // Apply the CORS middleware globally before routes
// app.use(cors(corsOptions));

// // Middleware for parsing JSON and URL-encoded data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // MongoDB Connection
// mongoose.connect('mongodb://mongodb:27017/fullstackdb', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB Connected Successfully'))
// .catch((err) => console.error('MongoDB Connection Error:', err));

// // Define User Schema
// const UserSchema = new mongoose.Schema({
//   name: { type: String, required: true, minlength: 2 },
//   email: { type: String, required: true, unique: true }
// }, { timestamps: true });

// const User = mongoose.model('User', UserSchema);

// // Routes for API
// app.get('/api/users', async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching users', error });
//   }
// });

// app.post('/api/users', async (req, res) => {
//   try {
//     const { name, email } = req.body;

//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already exists' });
//     }

//     const newUser = new User({ name, email });
//     await newUser.save();
//     res.status(201).json(newUser);  // Respond with the created user
//   } catch (error) {
//     res.status(500).json({ message: 'Error creating user', error });
//   }
// });

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Import cors package

const app = express();

// CORS configuration
const corsOptions = {
  origin: ['http://localhost:9090', 'http://your-production-domain.com'], // Allow frontend domains
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow headers
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

// Apply the CORS middleware globally before routes
app.use(cors(corsOptions));

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection (adjust the connection string if needed)
mongoose.connect('mongodb://localhost:27017/fullstackdb', {  // Change to 'mongodb://localhost:27017/fullstackdb' if running locally
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected Successfully'))
.catch((err) => console.error('MongoDB Connection Error:', err));

// Define User Schema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
  email: { type: String, required: true, unique: true }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);

// Routes for API
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
});

app.post('/api/users', async (req, res) => {
  try {
    const { name, email } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json(newUser);  // Respond with the created user
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
