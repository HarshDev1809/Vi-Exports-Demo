// // import { useNavigate } from "react-router-dom";
// // import { useState } from "react";
// // import Badge from "@mui/material/Badge";
// // import Drawer from "@mui/material/Drawer";
// // import ShoppingBag from "../../app/features/ShoppingBag/ShoppingBag";
// // import "./NavBar.css"

// // function NavBar() {
// //   const navigate = useNavigate();
// //   const [openCart, setOpenCart] = useState(false);
// //   const [cartQuantity, setCartQuantity] = useState(0);

// //   const token = sessionStorage.getItem("token");

// //   const goToSignup = () => {
// //     navigate("/signup");
// //   };

// //   const goToSignin = () => {
// //     navigate("/signin");
// //   };

// //   const toggleCartDrawer = (newOpen) => () => {
// //     setOpenCart(newOpen);
// //   };

// //   return (
// //     <div className="nav-bar border vw-100 d-flex justify-content-between">
// //       <div className="heading border">
// //         <h1>VI exports</h1>
// //       </div>
// //       <div className="buttons border">
// //         {token ? (
// //           <>
// //             <button
// //               type="button"
// //               className="d-flex h-75 justify-content-center align-items-center rounded"
// //               onClick={toggleCartDrawer(true)}
// //             >
// //               <Badge badgeContent={cartQuantity} color="secondary">
// //                 <span className="material-symbols-outlined">shopping_bag</span>
// //               </Badge>
// //             </button>
// //             <button>profile</button>
// //           </>
// //         ) : (
// //           <>
// //             <button onClick={goToSignup}>signup</button>
// //             <button onClick={goToSignin}>signin</button>
// //           </>
// //         )}
// //       </div>
// //       <Drawer
// //           open={openCart}
// //           onClose={toggleCartDrawer(false)}
// //           anchor={"right"}
// //         >
// //           <ShoppingBag onClose={toggleCartDrawer} />
// //         </Drawer>
// //     </div>
// //   );
// // }

// // export default NavBar;


// import { useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import Badge from "@mui/material/Badge";
// import Drawer from "@mui/material/Drawer";
// import ShoppingBag from "../../app/features/ShoppingBag/ShoppingBag";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import Button from "@mui/material/Button";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import "./NavBar2.css";
// import axios from "axios";
// const URL = process.env.REACT_APP_URL;


// function NavBar() {
//   const navigate = useNavigate();
//   const [openCart, setOpenCart] = useState(false);
//   const [cartQuantity, setCartQuantity] = useState(0);
//   const token = sessionStorage.getItem("token");

//   const [isSignedin, setIsSignedIn] = useState(false);
//   const verifyToken = async () => {
//     try {
//       const response = await axios.post(
//         `${URL}/token/verify`,
//         {},
//         {
//           headers: {
//             // 'Content-Type': 'application/json',
//             // Include your token in headers if needed
//             "x-access-token": token,
//           },
//         }
//       );

//       // Assuming the response contains an object with a boolean or status indicating success
//       if (response.status === 200) {
//         return true; // Modify based on your API response structure
//       } else {
//         // Handle unsuccessful status codes
//         return false;
//       }
//     } catch (error) {
//       return false;
//     }
//   };

//   const function1 = async () => {
//     const result = await verifyToken();
//     setIsSignedIn(result); // Update the state based on verification result
// };

//   useEffect(() => {
//     // Assuming you fetch the cart items from a Redux store or a similar state management solution
//     // Update cartQuantity based on cart items
//     // setCartQuantity(cartItems.length);
//     function1()
//   }, []);

//   const goToSignup = () => {
//     navigate("/signup");
//   };

//   const goToSignin = () => {
//     navigate("/signin");
//   };

//   const toggleCartDrawer = (newOpen) => () => {
//     setOpenCart(newOpen);
//   };

//   return (
//     <AppBar position="static" color="default">
//       <Toolbar className="nav-bar">
//         <IconButton edge="start" color="inherit" aria-label="menu">
//           <MenuIcon />
//         </IconButton>
//         <Typography variant="h6" className="nav-title" onClick={() => navigate("/")}>
//           VI Exports
//         </Typography>
//         <div className="nav-actions">
//           {isSignedin ? (
//             <>
//               <IconButton color="inherit" onClick={toggleCartDrawer(true)}>
//                 <Badge badgeContent={cartQuantity} color="secondary">
//                   <ShoppingCartIcon />
//                 </Badge>
//               </IconButton>
//               <IconButton color="inherit">
//                 <AccountCircleIcon />
//               </IconButton>
//             </>
//           ) : (
//             <>
//               <Button color="inherit" onClick={goToSignup}>
//                 Sign Up
//               </Button>
//               <Button color="inherit" onClick={goToSignin}>
//                 Sign In
//               </Button>
//             </>
//           )}
//         </div>
//       </Toolbar>
//       <Drawer open={openCart} onClose={toggleCartDrawer(false)} anchor="right">
//         <ShoppingBag onClose={toggleCartDrawer} />
//       </Drawer>
//     </AppBar>
//   );
// }

// export default NavBar;


import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Badge from "@mui/material/Badge";
import Drawer from "@mui/material/Drawer";
import ShoppingBag from "../../app/features/ShoppingBag/ShoppingBag";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu"; // Importing Menu component
import MenuItem from "@mui/material/MenuItem"; // Importing MenuItem component
import "./NavBar2.css";
import axios from "axios";
const URL = process.env.REACT_APP_URL;

function NavBar() {
  const navigate = useNavigate();
  const [openCart, setOpenCart] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);
  const token = sessionStorage.getItem("token");

  const [isSignedIn, setIsSignedIn] = useState(false);

  // State to handle the menu
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const verifyToken = async () => {
    try {
      const response = await axios.post(
        `${URL}/token/verify`,
        {},
        {
          headers: {
            "x-access-token": token,
          },
        }
      );

      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  };

  const function1 = async () => {
    const result = await verifyToken();
    setIsSignedIn(result);
  };

  useEffect(() => {
    function1();
  }, []);

  const goToSignup = () => {
    navigate("/signup");
  };

  const goToSignin = () => {
    navigate("/signin");
  };

  const goToProfile = () => {
    navigate("/profile"); // Assuming you have a profile page
    handleMenuClose(); // Close the menu after navigating
  };

  const toggleCartDrawer = (newOpen) => () => {
    setOpenCart(newOpen);
  };

  const goToOrders = ()=>{
  navigate("/orders");
  handleMenuClose();
  }

  return (
    <AppBar position="static" color="default">
      <Toolbar className="nav-bar">
        {/* <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton> */}
        <Typography
          variant="h6"
          className="nav-title"
          onClick={() => navigate("/")}
        >
          VI Exports
        </Typography>
        <div className="nav-actions">
          {isSignedIn ? (
            <>
              <IconButton color="inherit" onClick={toggleCartDrawer(true)}>
                <Badge badgeContent={cartQuantity} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton
                color="inherit"
                onClick={handleMenuOpen}
              >
                <AccountCircleIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={isMenuOpen}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={goToProfile}>Profile</MenuItem>
                <MenuItem onClick={goToOrders}>My Orders</MenuItem>
                <MenuItem onClick={() => { 
                  sessionStorage.removeItem("token"); // Clear the token
                  setIsSignedIn(false); // Set signed-in status to false
                  handleMenuClose(); // Close the menu
                }}>
                  Logout
                </MenuItem>
              </Menu>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={goToSignup}>
                Sign Up
              </Button>
              <Button color="inherit" onClick={goToSignin}>
                Sign In
              </Button>
            </>
          )}
        </div>
      </Toolbar>
      <Drawer open={openCart} onClose={toggleCartDrawer(false)} anchor="right">
        <ShoppingBag onClose={toggleCartDrawer} />
      </Drawer>
    </AppBar>
  );
}

export default NavBar;
