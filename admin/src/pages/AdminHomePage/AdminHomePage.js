// import { useNavigate } from "react-router-dom";
// import NavBar from "../../components/NavBar/NavBar";

// function AdminHomePage(){

//     const navigate = useNavigate()

//     const goToOrders = ()=>{
//         navigate("/admin/order")
//     }

//     return <div>
//         <NavBar />
//         <button onClick={goToOrders}>See Orders</button>
//     </div>
// }

// export default AdminHomePage;

import { useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./AdminHomePage.css"; // Custom styles

function AdminHomePage() {
  const navigate = useNavigate();

  const goToOrders = () => {
    navigate("/admin/order");
  };

  return (
    <>
      <NavBar />
      <Container className="admin-home-page" maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          Admin Dashboard
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card className="dashboard-card">
              <CardContent>
                <ShoppingCartIcon className="dashboard-icon" />
                <Typography variant="h6" component="div">
                  Orders
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  View and manage customer orders.
                </Typography>
              </CardContent>
              <CardActions>
                <Button 
                  variant="contained" 
                  color="primary" 
                  fullWidth 
                  onClick={goToOrders}
                >
                  See Orders
                </Button>
              </CardActions>
            </Card>
          </Grid>
          {/* You can add more cards here for other admin functionalities */}
        </Grid>
      </Container>
    </>
  );
}

export default AdminHomePage;
