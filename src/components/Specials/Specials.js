import React from "react";
import "./Specials.css";
import greekSalad from  "../../assets/greek salad.jpg";

const Specials = () => {
  const specials = [
    {
      id: 1,
      title: "Greek Salad",
      price: "$12.99",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: greekSalad
    },
    {
      id: 1,
      title: "Greek Salad",
      price: "$12.99",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: greekSalad
    },
    {
      id: 1,
      title: "Greek Salad",
      price: "$12.99",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image: greekSalad
    }
  ];

  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This Week's Specials!</h2>
        <button className="btn-secondary">Online Menu</button>
      </div>
      <div className="specials-grid">
        {specials.map((item) => (
          <div key={item.id} className="special-card">
            <img src={item.image} alt={item.title} />
            <div className="card-content">
              <div className="card-header">
                <h3>{item.title}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p>{item.description}</p>
              <button className="btn-order">Order for Delivery</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specials;