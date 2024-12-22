import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

import React from "react";

interface CustomButtonProps extends ChakraButtonProps {
  color: string;
  smWidth?: number | string;
  width?: number | string;
  hover?: boolean;
  hoverColor?: string;
  loading?: boolean;
  loadingText?: React.ReactNode;
  click?: (
    event: React.SyntheticEvent) => void | Promise<void>;
    extraClass?:string;
}


const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  extraClass,
  color,
  width,
  hover,
  smWidth,
  click,
  ...rest
}) => {

   const handleClick = (event:React.SyntheticEvent) => {
     if (typeof click === 'function') {
    click(event)
     }
    

   };

  return (
    <ChakraButton
      size="md"
      bg={color}
      w={[smWidth? smWidth : '8em', width ? width : "150px"]}
      color="white"
      rounded="full"
      onClick={handleClick}
      {...rest}
      className={`${extraClass} ${
        hover &&
        "hover:border-2 hover:bg-white hover:text-black hover:border-black"
      }`}
    >
      {children}
    </ChakraButton>
  );
};

export default CustomButton;
