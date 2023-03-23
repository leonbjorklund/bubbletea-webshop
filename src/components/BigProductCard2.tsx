import {
  Box,
  Button,
  CloseButton,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  useBreakpointValue,
  useOutsideClick
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsCartPlus } from "react-icons/Bs";
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

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity == 1) {
      return false;
    } else {
      setQuantity(quantity - 1);
    }
  };

  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const closeButtonSize = useBreakpointValue({
    base: "sm",
    md: "md",
    lg: "lg",
  });

  const cardStyle = {
    height: ["85vh"],
    width: ["90%", "94%", "94%", "94%", "78%"],
    position: "fixed",
    top: 20,
    left: ["5%", "3%", "3%", "3%", "11%"],
    zIndex: "1000",
    borderRadius: "1rem",
    boxShadow: "3px 3px 3px gray",
    bgGradient: `linear(${product.bgColor} 30%, yellow.50 90%)`,
  };
  const roundBG = {
    marginTop: ".5rem",
    backgroundColor: `${product.bgColor}`,
    height: ["16rem", "17rem", "18.5rem", "25rem", "28rem"],
    width: ["16rem", "17rem", "18.5rem", "25rem", "28rem"],
    borderRadius: "50%",
    border: "2px solid darkBrownText",
    position: "relative",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  const handleClose = () => {
    setVisible(false);
    navigate("/");
  };

  return (
    <Box sx={cardStyle}>
      <CloseButton sx={xButton} size={closeButtonSize} onClick={handleClose} />
      <Flex
        w={"100%"}
        h={"100%"}
        direction={["column-reverse", "column-reverse", "row", "row"]}
        justify={"center"}
        alignItems={"center"}
        padding={"1%"}
      >
        <Flex
          direction={["column-reverse", "column-reverse", "row", "row"]}
          textAlign={["center", "center", "left"]}
          justifyContent={[
            "space-evenly",
            "space-evenly",
            "space-between",
            "space-around",
          ]}
          alignItems={["center", "center", "space-evenly", "space-evenly"]}
          sx={boxStyling}
          h={["50%", "50%", "80%"]}
          w={["80%", "70%", "60%", "60%"]}
        >
          <Flex
            direction={"column"}
            h={"100%"}
            justifyContent={"center"}
            gap={[0, 1, 3, 4]}
          >
            <Heading fontSize={["1.5rem", "1.7rem", "2rem", "2.5rem"]}>
              {product.title}
            </Heading>
            <Heading fontSize={["1.5rem", "1.7rem", "1.7rem", "2rem"]}>
              ${product.price}
            </Heading>
            <Text>{product.description}</Text>
            <Box>
              <Flex>
                <Button sx={buttonStyle} onClick={decreaseQuantity}>
                  -
                </Button>
                <Text sx={quantityStyling}>{quantity}</Text>
                <Button sx={buttonStyle} onClick={increaseQuantity}>
                  +
                </Button>
                <Button
                  sx={addButtonStyle}
                  onClick={() => addToCart(product, quantity)}
                >
                  <Icon sx={iconStyle} as={BsCartPlus} />
                </Button>
              </Flex>
            </Box>
          </Flex>
          <Box>
            <Text>Allergens:</Text>
            <Flex direction="column" align={["center", "center", "left"]}>
              <Text sx={inputText}>Milk</Text>
            </Flex>
            <Text>Ingredients:</Text>
            <Flex direction="column" align={["center", "center", "left"]}>
              <Text sx={inputText}>
                Milk, sugar, black tea, taro powder, hopes and dreams. like
                whyMilk, sugar, black tea, taro powder, hopes and dreams. like
                why{" "}
              </Text>
            </Flex>
          </Box>
        </Flex>
        <Box
          sx={boxStyling}
          h={["50%", "50%", "80%"]}
          w={["80%", "70%", "40%", "45%"]}
        >
          <Box sx={roundBG}>
            <Image sx={imageStyle2} src={backgroundUrl} alt={backgroundAlt} />
            <Image sx={imageStyle} src={product.image} alt={product.imageAlt} />
          </Box>
          <Box></Box>
        </Box>
      </Flex>
    </Box>
  );
}

const imageStyle = {
  position: "absolute",
  top: ["40%", "40%", "40%", "40%"],
  left: "50%",
  transform: "translate(-50%, -50%)",
  objectFit: "cover",
  width: ["40%", "40%", "40%", "40%"],
  zIndex: "200",
};

const imageStyle2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  zIndex: "100",
};

const xButton = {
  position: "absolute",
  top: "0.5rem",
  right: "0.5rem",
  size: ["sm", "md", "lg"],
};

const boxStyling = {
  padding: "3%",
};

const quantityStyling = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "1.5rem",
  mx: "1rem",
}

const inputText = {
  color: "lightBrownText",
  fontSize: [".7rem", ".7rem", ".9rem", "1rem"],
  whiteSpace: "pre-wrap",
  maxWidth: "200px",
  alignSelf: ["center", "center", "flex-start"],
};

const buttonStyle = {
  backgroundColor: "darkGreenButton",
  color: "white",
  borderRadius: "4rem",
  mx: "1rem",
};

const addButtonStyle = {
  backgroundColor: "yellowButton",
  borderRadius: "4rem",
  width: "5rem",
};

const iconStyle = {
  height: "1.5rem",
  width: "1.5rem",
};
