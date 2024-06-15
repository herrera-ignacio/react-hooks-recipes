import * as React from "react";

const products = [
  { id: 1, name: "Poké Ball", price: 10 },
  { id: 2, name: "Great Ball", price: 20 },
  { id: 3, name: "Ultra Ball", price: 30 }
];

function calculateTotal(cart) {
  return cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
}

const initialState = [];

function reducer(cart, action) {
  if (action.type === "update") {
    // First update quantity
    const updatedCart = cart.map(item => {
      if (item.id === action.id) {
        const addition = action.adjustment === "increment"
          ? 1
          : action.adjustment === "decrement"
            ? -1
            : 0;
        return {
          ...item,
          quantity: item.quantity + addition
        };
      } else {
        return item;
      }
    });
    // Then filter out empty elements
    // (we could do this on a single step probably using an object instead of an array but
    // this way is easier to read and understand)
    return updatedCart.filter(item => item.quantity > 0);
  }

  if (action.type === "add") {
    const isProductInCart = cart.find(p => p.id === action.id);
    if (isProductInCart) {
      return cart.map(p => p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p);
    } else {
      const product = products.find(p => p.id === action.id);
      return [...cart, { ...product, quantity: 1 }];
    }
  }
}

export default function ShoppingCart() {
  const [cart, dispatch] = React.useReducer(reducer, initialState);

  const handleAddToCart = (id) => dispatch({ type: "add", id });

  const handleUpdateQuantity = (id, adjustment) => {
    dispatch({
      type: "update",
      id,
      adjustment
    });
  };

  return (
    <main>
      <h1>Poké Mart</h1>
      <section>
        <div>
          <ul className="products">
            {products.map((product) => (
              <li key={product.id}>
                {product.name} - ${product.price}
                <button
                  className="primary"
                  onClick={() => handleAddToCart(product.id)}
                >
                  Add to cart
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <hr />
      <aside>
        <div>
          <h2>Shopping Cart</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name}
                <div>
                  <button
                    onClick={() => handleUpdateQuantity(item.id, "decrement")}
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    onClick={() => handleUpdateQuantity(item.id, "increment")}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
            {!cart.length && <li>Cart is empty</li>}
          </ul>
        </div>
        <hr />

        <h3>Total: ${calculateTotal(cart)}</h3>
      </aside>
    </main>
  );
}
