import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import React from "react";

interface CustomButtonProps extends ChakraButtonProps {
  color: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  color,
  ...rest
}) => {
  return (
    <ChakraButton
      size="md"
      bg={color}
      w="150px"
      color="white"
      rounded="full"
      {...rest} // Spread the rest of the props to the ChakraButton
    >
      {children}
    </ChakraButton>
  );
};

export default CustomButton;
