import { Box, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../data";
import { useCart } from "../CartContext";

interface BigProductCardProps {
  product: Product;
  backgroundUrl: string;
  backgroundAlt: string;
}

export function BigProductCard2({
  product,
  backgroundAlt,
  backgroundUrl,
}: BigProductCardProps) {
  const { addToCart, removeFromCart, cartList } = useCart();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const closeButtonSize = useBreakpointValue({
    base: "sm",
    md: "md",
    lg: "lg",
  });

  const handleClose = () => {
    setVisible(false);
    navigate("/");
  };

  return (
    <Box
      h={"20rem"}
      w={"100%"}
      bg={"green"}
      zIndex={0}
      height={"10rem"}
      width={"10rem"}
      position="fixed"
      top={10}
      left={10}
    />
  );
}
