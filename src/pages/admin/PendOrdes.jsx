import { useEffect, useState } from "react";
import del from '../../assets/icons/material-symbols-light_delete-outline.svg'



const PendingOrders = () => {

  const [order, setOrder] = useState([]);
  const tosinToken = localStorage.getItem("token");
  const token = JSON.parse(tosinToken);
  
  const upDateData = async (id) => {
    try {
      const response = await fetch(`https://diamondreams.onrender.com/shop/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ delivered: true }), // Move body outside headers
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Form data submitted successfully');
        // Update enrollments after setting the enrollment as accepted
       window.location.reload();

        const updatedEnrollments = order.map(order => {
          if (order._id === id) {
            return { ...order, accepted: true };
          }
          return order;
        });
        setOrder(updatedEnrollments);
      } else {
        console.error('Failed to submit form data', data);
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  };
  const deleteData = async (id) => {
    try {
      console.log(id)
      const response = await fetch(`https://diamondreams.onrender.com/shop/${id._id}/${id.product}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        window.location.reload();
      } else {
        console.error('Failed to submit form data', data);
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }
  }; 




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

  const pendingOrder = order.filter(enroll => !enroll.delivered);

  return (
    <>
        {pendingOrder.map(orders => (
        <section className="pendenroll" key={orders._id}>
          <div className="enrolDetails">
            <p><span>Name: </span>{orders.name}</p>
            <p><span>Purchase Type: </span>{orders.purchaseType}</p>
            <p><span>Total Price: </span>{orders.ammount}</p>
          </div>
            <button className="pendingButton" onClick={() => upDateData(orders._id)}>Pending</button>
            <img src={del} alt="" onClick={() => deleteData(orders)} />
        </section>
      ))}
    </>
  );
}
 
export default PendingOrders;