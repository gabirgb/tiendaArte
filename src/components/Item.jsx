import { Link } from "react-router";

// export default function Item(props) {
export default function Item({ id, title, price, category, stock, img, description, color }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 " key={id}>
      {/* envuelvo todo dentro de una card para poder aplicar estilo personal + bootstrap */}
      <div className="card h-100" style={{ backgroundColor: "#f6f6f6", border: "none" }}>
        <img
          src={`${img}/${color}/white?text=${title}&font=roboto`}
          className="card-img-top"
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title" style={{ textTransform: "capitalize" }}>
            {title}
          </h5>
          <p className="card-text">
            <strong>Precio:</strong> {price} - <strong>Categoría:</strong> {category}
          </p>
          <Link to={`/producto/${id}`} className="btn btn-primary">
            Ver Producto
          </Link>
        </div>
      </div>
    </div>
  );
}
