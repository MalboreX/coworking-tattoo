import React from "react";
import { Button, ButtonProps } from "react-native-paper";
import { StyleSheet } from "react-native";

interface ExtraProps {
  width?: number | string;
  height?: number | string;
}

const ActionButton: React.FC<Spread<ButtonProps, ExtraProps>> = ({
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
    borderRadius: 12,
  },
  label: {
    fontSize: 14,
    fontFamily: "Roboto_400Regular",
  },
});

export default ActionButton;
