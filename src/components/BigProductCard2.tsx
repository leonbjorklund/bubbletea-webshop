import { Box, CloseButton, useBreakpointValue } from "@chakra-ui/react";
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


  const cardStyle = {
    height: ["83vh"],
    width: ["90%", "94%", "94%", "94%", "78%"],
    position: "fixed",
    top: 20,
    left: ["5%", "3%", "3%", "3%", "11%"],
    zIndex: "1000",
    borderRadius: "1rem",
    boxShadow: "3px 3px 3px gray",
    bgGradient: `linear(${product.bgColor} 30%, yellow.50 90%)`,
  };

  const handleClose = () => {
    setVisible(false);
    navigate("/");
  };

  return <Box sx={cardStyle}>
    <CloseButton sx={xButton} size={closeButtonSize} onClick={handleClose} /> 
  </Box>;}


const xButton = {
    position: "absolute",
    top: "0.5rem",
    right: "0.5rem",
    size: ["sm", "md", "lg"],
};