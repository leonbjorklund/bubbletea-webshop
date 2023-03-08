import { Container, Heading } from "@chakra-ui/react";
import { products } from "../../data/index";


export function ProductsPage() {
  return (
    <Container>
      <Heading mx="20px">This is product page!</Heading> 
        {products.map((product) => (
        <div key={product.id} style={{width: '200px', margin: '10px', border: '2px solid black'}}>
          <p>{product.title}</p>
          <img
            src={product.image}
            style={{ width: '100px' }}
          />
          <p>{product.price} kr</p>
          <p>{product.description}</p>
          <p>id: {product.id}</p>
        </div>
      ))}
    </Container>
  )
}



