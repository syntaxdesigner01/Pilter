import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import React from "react";

interface CustomButtonProps extends ChakraButtonProps {
  color: string;
  width?: number;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  color,
  width,
  ...rest
}) => {
  return (
    <ChakraButton
      size="md"
      bg={color}
      w={width ? width : "150px"}
      color="white"
      rounded="full"
      {...rest} // Spread the rest of the props to the ChakraButton
      className="hover:border-2 hover:bg-white hover:text-black hover:border-black"
    >
      {children}
    </ChakraButton>
  );
};

export default CustomButton;
