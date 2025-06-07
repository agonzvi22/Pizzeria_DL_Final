import "./CardPïzza.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom'

const CardPizza = ({ desc, id, img, ingredients = [], name, price }) => {
  const { addToCart } = useContext(CartContext);

  const capitalize = (text) =>
    text ? text.charAt(0).toUpperCase() + text.slice(1) : "";

  return (
    <div className="card mt-5 mb-5">
      <img src={img} alt={`Pizza ${name}`} className="card-img-top" />
      <h4 className="text-start text-capitalize display-6 p-1">
        Pizza {capitalize(name)}
      </h4>
      <hr />
      <p className="lh-1 fs-6">{desc}</p>
      <hr />
      <h5 className="text-start p-2">Ingredientes:</h5>
      <ul>
        {ingredients.length > 0 ? (
          ingredients.map((ingredient, index) => (
            <li key={index} className="text-start">
              {capitalize(ingredient)}
            </li>
          ))
        ) : (
          <li className="text-start">No hay ingredientes disponibles</li>
        )}
      </ul>
      <hr />
      <h5>Precio: ${price.toLocaleString("es-CL")}</h5>

      <div className="d-flex justify-content-around">
          <Link
          to={`/pizza/${id}`}
          className="btn btn-outline-secondary p-2"
          type="button"
        >
          Ver Más 👀
         </Link>
        <button
          className="btn btn-dark p-2"
          type="button"
          onClick={() => {
            console.log("Agregando al carrito:", {
              id,
              name,
              img,
              price,
              ingredients,
              desc,
            });
            addToCart({ id, name, img, price, ingredients, desc });
          }}
        >
          Añadir 🛒
        </button>
      </div>
    </div>
  );
};

export default CardPizza;
