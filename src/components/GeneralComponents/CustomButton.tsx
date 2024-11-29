import { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

import {
  AbsoluteCenter,
  Button as ChakraButton,
  Span,
  Spinner,
} from "@chakra-ui/react";
import React from "react";

interface CustomButtonProps extends ChakraButtonProps {
  color: string;
  width?: number | string;
  hover?: boolean;
  hoverColor?: string;
  loading?: boolean;
  loadingText?: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  color,
  width,
  hover,
  loading,
  loadingText,
  // hoverColor,
  ...rest
}) => {
  return (
    <ChakraButton
      size="md"
      bg={color}
      w={width ? width : "150px"}
      color="white"
      rounded="full"
      {...rest} // Spread the rest of the props to the Button
      className={`${
        hover &&
        "hover:border-2 hover:bg-white hover:text-black hover:border-black"
      }`}
    >
      {loading && !loadingText ? (
        <>
          <AbsoluteCenter display="inline-flex">
            <Spinner size="inherit" color="inherit" />
          </AbsoluteCenter>
          <Span opacity={0}>{children}</Span>
        </>
      ) : loading && loadingText ? (
        <>
          <Spinner size="inherit" color="inherit" />
          {loadingText}
        </>
      ) : (
        children
      )}
    </ChakraButton>
  );
};

export default CustomButton;
