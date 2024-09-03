// import { useEffect } from "react";
// import NavBar from "../../components/NavBar/NavBar";
// import { useDispatch, useSelector } from "react-redux";
// import { getItems } from "../../app/features/Items/ItemsSlice";
// import { CircularProgress } from "@mui/material";
// import Item from "../../components/Item/Item";
// import "./HomePage.css"

// function HomePage() {
//   // const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const items = useSelector((state) => state.items.items);
//   const status = useSelector((state) => state.items.status);
//   const error = useSelector((state) => state.items.error);

//   console.log(items);

//   useEffect(() => {
//     if (status === "idle") {
//       dispatch(getItems());
//     }
//   });

//   const displayData = (status) => {
//     switch (status) {
//       case "loading":
//         return <CircularProgress color="secondary" />;
//       case "succeeded":
//         return showItems();
//       case "failed":
//         return <h1>Failed</h1>;
//     }
//   };

//   const showItems = () =>{
//     return <div className="item-div px-3 border">
//       {items.map((item)=>{
//         return <Item item={item}/>
//       })}
//     </div>
//   }

//   return (
//     <div className="home-page">
//       <NavBar />
//       {displayData(status)}
//     </div>
//   );
// }

// export default HomePage;

import { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../app/features/Items/ItemsSlice";
import { CircularProgress } from "@mui/material";
import Item from "../../components/Item/Item";
import "./HomePage.css";
import Footer from "../../components/FooterBar/FooterBar";

function HomePage() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);
  const status = useSelector((state) => state.items.status);
  const error = useSelector((state) => state.items.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getItems());
    }
  }, [status, dispatch]);

  const displayData = () => {
    switch (status) {
      case "loading":
        return (
          <div className="loading-container">
            <CircularProgress color="secondary" />
          </div>
        );
      case "succeeded":
        return showItems();
      case "failed":
        return (
          <div className="error-container">
            <h1>Error: {error ? error : "Failed to load items"}</h1>
          </div>
        );
      default:
        return null;
    }
  };

  const showItems = () => {
    if (!items.length) {
      return <h2>No items available</h2>;
    }
    return (
      <div className="items-grid">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    );
  };

  return (
    <div className="home-page">
      <NavBar />
      <div className="content">
        {displayData()}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;

