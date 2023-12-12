import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";

type pizzaType = {
  id: string;
  name: string;
  price: number;
  ingredients: Array<string>;
};

function App() {
  const [pizzas, setPizzas] = useState<pizzaType[] | null>();
  const [orders, setOrders] = useState<string>();

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch("http://localhost:3333/api/pizzas");
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchApi();
  }, []);

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOrders(event.target.value);
  };
  const handleOrder = async () => {
    await fetch("http://localhost:3333/api/newOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orders),
    });
  };

  return (
    <>
      <div className="container">
        <div className="pizzas">
          <h1>Pizzas</h1>
          {pizzas?.map((pizza) => (
            <div
              key={pizza.id}
              className={`card ${orders === pizza.id ? "checked" : ""}`}
            >
              <input
                type="radio"
                id={pizza.name}
                value={pizza.id}
                checked={orders === pizza.id}
                onChange={handleRadioChange}
              />
              <label htmlFor={pizza.name}>
                <div className="card-header">{pizza.name}</div>
                <div className="card-body">
                  <h3>R${pizza.price}</h3>
                  <div className="ingredientes">
                    {pizza?.ingredients?.map((ing) => (
                      <p key={ing}>{ing}</p>
                    ))}
                  </div>
                </div>
              </label>
            </div>
          ))}
          <button onClick={handleOrder}>Confirme</button>
        </div>
        {orders && (
          <div className="orders">
            <h1>Orders</h1>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
