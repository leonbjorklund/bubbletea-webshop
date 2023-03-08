import { products } from "../../data/index";


export function ProductsPage() {
  return (
    <div>
      <h1>This is product page!</h1>
      {products.map((product) => (
        <div key={product.id} style={{width: '200px', margin: '10px', border: '2px solid black'}}>
          <p>{product.title}</p>
          <img
            src={product.image}
            style={{ height: '100px', width: '100px' }}
          />
          <p>{product.price} kr</p>
          <p>{product.description}</p>
          <p>id: {product.id}</p>
        </div>
      ))}
    </div>
  )
}



