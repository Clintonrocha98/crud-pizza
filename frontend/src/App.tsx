import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";

type pizzaType = {
  id: string;
  name: string;
  price: number;
  ingredients: Array<string>;
};
type order = Pick<pizzaType, "name" | "price"> & { quantity: number };

function App() {
  const [pizzas, setPizzas] = useState<pizzaType[] | null>();
  const [ordersApi, setOrdersApi] = useState<order[] | null>(null);
  const [orders, setOrders] = useState<order>({
    name: "",
    price: 0,
    quantity: 1,
  });
  const [refreshApi, setRefreshApi] = useState(false);

  useEffect(() => {
    const allOrders = async () => {
      await fetch("http://localhost:3333/api/orders")
        .then((result) => result.json())
        .then((result) => setOrdersApi(result));
      setRefreshApi(false);
    };
    allOrders();
  }, [refreshApi]);
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

  const handleOrder = async () => {
    await fetch("http://localhost:3333/api/newOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orders),
    });
    setOrders({
      name: "",
      price: 0,
      quantity: 1,
    });
    setRefreshApi(true);
  };
  const handleQuantityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOrders({
      ...orders,
      quantity: parseInt(event.target.value, 10),
    });
  };

  const handleConfirm = (pizza: pizzaType) => {
    const { name, price } = pizza;
    setOrders({
      ...orders,
      name,
      price: price ? orders?.quantity * price : 1,
    });
  };

  return (
    <>
      <div className="container">
        <div className="pizzas">
          <h1>Pizzas</h1>
          <div className="container-pizzas">
            {pizzas?.map((pizza) => (
              <div
                key={pizza.id}
                className={`card ${orders.name === pizza.name ? "select" : ""}`}
              >
                <div className="card-header">{pizza.name}</div>
                <div className="card-body">
                  <h3>R${pizza.price}</h3>
                  <div className="ingredientes">
                    {pizza?.ingredients?.map((ing) => (
                      <p key={ing}>{ing}</p>
                    ))}
                  </div>
                </div>
                <div className="card-bottom">
                  <label>
                    Quantity:{" "}
                    <input
                      type="number"
                      className="quantity"
                      defaultValue={1}
                      min={1}
                      onChange={handleQuantityChange}
                    />
                  </label>
                  <button className="add" onClick={() => handleConfirm(pizza)}>
                    add
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button className="add buy" onClick={handleOrder}>
            Confirm
          </button>
        </div>
        {ordersApi && (
          <div className="orders">
            <h1>Orders</h1>
            <div className="container-pizzas">
              {ordersApi?.map((pizza) => (
                <div key={pizza.name} className="card">
                  <div className="card-header">{pizza.name}</div>
                  <div className="card-body">
                    <h3>R${pizza.price}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
