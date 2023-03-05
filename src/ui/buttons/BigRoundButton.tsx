import React from "react";
import { Button, ButtonProps } from "react-native-paper";
import { StyleSheet } from "react-native";

interface ExtraProps {
  width?: number | string;
  height?: number | string;
}

const BigRoundButton: React.FC<Spread<ButtonProps, ExtraProps>> = ({
  height,
  ...props
}) => {
  return (
    <Button
      style={styles.button}
      contentStyle={{ height: height }}
      labelStyle={styles.label}
      {...props}
    >
      {props.children}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#262628",
    borderRadius: 14,
  },
  label: {
    fontSize: 14,
    fontFamily: "Roboto_500Medium",
  },
});

export default BigRoundButton;
