import { Container } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { BigProductCard } from "../components/BigProductCard";
import { useProduct } from "../ProductContext";

export function ProductPage() {

  const { productList } = useProduct()

  const params = useParams();
  const product = productList.find((p) => p.id === params.id);

  if (!product) {
    return <p>Produkten hittades inte...</p>;
  }

  return (
    <Container maxWidth="container.xl" my=".3rem">
      <BigProductCard
        product={product}
        backgroundAlt="boba"
        backgroundUrl="/images/fancyBackground.png"
      />
    </Container>
  );
}
