import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

import React from "react";

interface CustomButtonProps extends ChakraButtonProps {
  color: string;
  width?: number | string;
  hover?: boolean;
  hoverColor?: string; 
  loading?: boolean;
  loadingText?: React.ReactNode;
  router?: (event: React.MouseEvent<HTMLButtonElement>) => void; 
}


const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  color,
  width,
  hover,
  router, 
  ...rest
}) => {

   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
     if (router) {
       router(event);
     }
   };

  return (
    <ChakraButton
      size="md"
      bg={color}
      w={width ? width : "150px"}
      color="white"
      rounded="full"
      onClick={handleClick}
      {...rest} 
      className={`${
        hover &&
        "hover:border-2 hover:bg-white hover:text-black hover:border-black"
      }`}
    >
      {children}
    </ChakraButton>
  );
};

export default CustomButton;
