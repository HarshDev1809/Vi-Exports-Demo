import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { NavigationSharp } from '@mui/icons-material';

const URL = process.env.REACT_APP_URL;

function PlaceOrder() {
    const [paymentMode, setPaymentMode] = useState('Credit Card'); // Example payment mode
    const [message, setMessage] = useState('');
    const navigate = useNavigate()

    const handlePlaceOrder = async () => {
        const token = sessionStorage.getItem("token");

        try {
            const response = await axios.post(
                `${URL}/orders/placeOrder`,
                {
                    paymentMode, // Pass paymentMode in the request body
                },
                {
                    headers: {
                        'x-access-token': token,
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.status === 200) {
                setMessage('Order placed successfully!');
                if(window.confirm("Order placed successfully!"))
                    navigate("/")

            } else {
                setMessage(response.data.message || 'Order placement failed.');
            }
        } catch (error) {
            console.error(error);
            setMessage('An error occurred while placing the order.');
        }
    };

    return (
        <div>
            <h2>Place Order</h2>
            <button onClick={handlePlaceOrder}>Place Order</button>
            <p>{message}</p>
        </div>
    );
}

export default PlaceOrder;
