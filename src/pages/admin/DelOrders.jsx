import { useEffect, useState } from "react";
import del from '../../assets/icons/material-symbols-light_delete-outline.svg'

const DeliveredOrders = () => {
  const [order, setOrder] = useState([]);
  const tosinToken = localStorage.getItem("token");
  const token = JSON.parse(tosinToken);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://diamondreams.onrender.com/shop/all", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        // console.log(data)
        setOrder(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [token]); 

  const pendingOrder = order.filter(enroll => enroll.delivered);
  const deleteData = async (id) => {
    try {
      const response = await fetch(`https://diamondreams.onrender.com/shop/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        window.reload()
      } else {
        console.error('Failed to submit form data', data);
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  }; 

  return (
    <>
        {pendingOrder.map(orders => (
        <section className="pendenroll" key={orders._id}>
          <div className="enrolDetails">
            <p><span>Name: </span>{orders.name}</p>
            <p><span>Phone number: </span>{orders.purchaseType}</p>
            <p><span>Total Price: </span>{orders.ammount}</p>
          </div>
            <button className="pendingButton" >Delivered</button>
            <img src={del} alt="" onClick={() => deleteData(enroll._id)} />
        </section>
      ))}
    </>
  );
}
 
export default DeliveredOrders;