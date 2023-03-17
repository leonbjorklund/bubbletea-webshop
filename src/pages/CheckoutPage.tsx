import { useMediaQuery } from "@chakra-ui/react";
import { useCart } from "../CartContext";
import { CartCard } from "../components/CartCard";
import { CheckoutForm } from "../components/CheckoutForm";

export function CheckoutPage() {

  const { cartList, addToCart, removeFromCart } = useCart();
  const [isSmallerThan1042] = useMediaQuery('(max-width: 1156px)');


  return (
    <div>
      <CartCard />
      <CheckoutForm />
    </div>
  )
}

