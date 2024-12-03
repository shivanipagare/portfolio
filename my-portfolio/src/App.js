import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import MainContent from './components/maincontent';

function App() {
  const [activeSection, setActive] = useState('home');

  return (
    <div className="App">
      <Sidebar setActive={setActive} />
      <MainContent activeSection={activeSection} />
    </div>
  );
}

export default App;


// login page

// import React from 'react'
// import './New.css'
// import { AppBar, Toolbar, Typography, Button, Select, MenuItem, Box, IconButton, Menu, Container, TextField } from '@mui/material';

// import LargeForm from './Navbar';
// const pages = ['Home', 'Register'];
// const App = () => {
//   return (
//     <div className="background-container">
//       <div className="background-animation"></div>
//       <div className="wrapper login">
//         <div className="container">
//           <div className="col-left">
//             <div className="left-content">
//               <p>Welcome to EPR MIS System</p>
//             </div>
//           </div>
//           <div className="col-right">
//             <div className="login-form">
//               <h2>Login</h2>
//               <form >
//                 <p>
//                   {/* <label>
//     									Email<span>*</span>
//     								</label>
//     								<input
//     									type="text"
//     									required=""
//     								/> */}
//                   <TextField id="standard-basic" label="Email" variant="standard" />
//                 </p>

//                 <p>
//                   {/* <label>
//     									Password<span>*</span>
//     								</label>
//     								<input
//     									type="password"
//     									required=""
//     								/> */}
//                   <TextField id="standard-basic" label="Password" variant="standard" />
//                 </p>
//                 <p>
//                   <button
//                     type="submit"
//                     defaultValue="Sign In"
//                   >
//                     <p>Login</p>
//                   </button>
//                 </p>
//                 <p>
//                   <a>Forget password?</a>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default App


// mainpage
// import React from 'react'
// import './New.css'
// import { AppBar, Toolbar, Button, Select, MenuItem, Box, InputLabel, Menu, Container, FormControl } from '@mui/material';

// import LargeForm from './Navbar';
// const pages = ['Home', 'Register'];
// function Navbar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElProfile, setAnchorElProfile] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleOpenProfileMenu = (event) => {
//     setAnchorElProfile(event.currentTarget);
//   };

//   const handleCloseProfileMenu = () => {
//     setAnchorElProfile(null);
//   };

//   return (
//     <AppBar color="transparent" elevation={0}>
//       <Container maxWidth="xl">
//         <Toolbar>
//           <div className="logo">Logo</div>
//           <Box sx={{ display: { xs: 'block', md: 'none' } }}>
//             <Button
//               onClick={handleOpenNavMenu}
//               color="inherit"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//             >
//               Menu
//             </Button>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   {page}
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <Box sx={{ margin: '0 30px', display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button key={page} sx={{ color: 'black' }}>
//                 {page}
//               </Button>
//             ))}
//           </Box>
//           <Box sx={{ flexGrow: 1 }} />
//           <Box>
//             <Button
//               onClick={handleOpenProfileMenu}
//               color="inherit"
//               aria-controls="profile-menu"
//               aria-haspopup="true"
//             >
//               Profile
//             </Button>
//             <Menu
//               id="profile-menu"
//               anchorEl={anchorElProfile}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElProfile)}
//               onClose={handleCloseProfileMenu}
//             >
//               <MenuItem onClick={handleCloseProfileMenu}>Profile</MenuItem>
//               <MenuItem onClick={handleCloseProfileMenu}>My account</MenuItem>
//               <MenuItem onClick={handleCloseProfileMenu}>Logout</MenuItem>
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }

// function HomePage() {
//   return (
//     <div className="home-page">
//       <div className="banner">
//         <h1 className="text" variant="h5">
//           WELCOME TO EPR MANAGEMENT INFORMATION SYSTEM
//         </h1>
//         <div className="dropdown-container">
//           <FormControl sx={{ width: '250px', marginRight: '10px' }}>
//             <InputLabel id="dept-label" sx={{ color: '#fff' }}>Choose Dept.</InputLabel>
//             <Select
//               labelId="dept-label"
//               id="dept"
//               label="Choose Dept."
//               sx={{
//                 width: '250px',
//                 height: '55px',
//                 borderRadius: '15px',
//                 backgroundColor: 'transparent',
//                 color: '#fff',
//                 '& .MuiSelect-icon': {
//                   color: '#fff',
//                 },
//                 '& .MuiOutlinedInput-notchedOutline': {
//                   borderColor: '#fff',
//                 },
//               }}
//             >
//               <MenuItem value={'dept1'}>Department 1</MenuItem>
//               <MenuItem value={'dept2'}>Department 2</MenuItem>
//               <MenuItem value={'dept3'}>Department 3</MenuItem>
//             </Select>
//           </FormControl>
//           <Button
//             className='next-button'
//             sx={{ width: '100px', backgroundColor: '#000', color: '#fff', border: '1px solid #fff', borderRadius: '15px', fontSize: '20px', '&:hover': { backgroundColor: '#555' } }}
//           >
//             Next
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// const App = () => {
//   console.log('object')
//   return (
//     <Container className="background-container" >
//       {/* <div className="background-animation"> */}
//       <Navbar />
//       <HomePage />
//       {/* </div> */}
//     </Container>
//   )
// }

// export default App
