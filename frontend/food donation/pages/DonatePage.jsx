import React, { useState } from 'react';
import Dashboard from '../components/Dashboard';
import FrontImg from '../components/FrontImg';
import "../css/donatePage.css";

const DonatePage = () => {
  // 🟢 Yahi hona chahiye pehle
  const [data, setData] = useState({
    name: "",
    number: "",
    alternateNumber: "",
    address: "",
    email: "",
    items: "",
    quantity: ""
  });

  const submitDetail = async () => {
    const response = await fetch("http://localhost:8080/donationDetail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("data send");
    } else {
      alert("error");
    }
  };

  return (
    <div>
      <Dashboard />
      <img src="/public/frontimg3.png" className="img" alt="Banner" />

      <form>
        <h2>Caring Hands - Food Donation Form</h2>
        <br />
        <input onChange={(e) => setData((prev) => ({ ...prev, name: e.target.value }))} placeholder="Full Name" />
        <br />
        <input onChange={(e) => setData((prev) => ({ ...prev, number: e.target.value }))} placeholder="Phone Number" />
        <br />
        <input onChange={(e) => setData((prev) => ({ ...prev, alternateNumber: e.target.value }))} placeholder="Alternate Phone Number" />
        <br />
        <input onChange={(e) => setData((prev) => ({ ...prev, address: e.target.value }))} placeholder="Address" />
        <br />
        <input onChange={(e) => setData((prev) => ({ ...prev, email: e.target.value }))} placeholder="Email Id" />
        <br />
        <input onChange={(e) => setData((prev) => ({ ...prev, items: e.target.value }))} placeholder="Items" />
        <br />
        <input onChange={(e) => setData((prev) => ({ ...prev, quantity: e.target.value }))} placeholder="Quantity" />
        <br />
        <button onClick={submitDetail} className='submitBtn' type="button">Submit</button>
      </form>
    </div>
  );
};

export default DonatePage;
