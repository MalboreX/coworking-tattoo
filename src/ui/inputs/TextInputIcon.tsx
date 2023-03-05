import React from "react";
import { TextInput, TextInputProps } from "react-native-paper";
import { StyleSheet, View, TextInput as TI } from "react-native";

interface ExtraProps {
  font?: string;
  icon: React.ReactNode;
}

const TextInputIcon: React.FC<Spread<TextInputProps, ExtraProps>> = ({
  value,
  icon,
  secureTextEntry,
  placeholder,
  font = "Roboto_400Regular",
  ...props
}) => {
  return (
    <TextInput
      style={{
        height: 60,
        backgroundColor: "white",
      }}
      outlineStyle={{
        borderColor: "#262628",
        opacity: 0.2,
        borderWidth: 1,
        borderRadius: 14,
      }}
      render={() => (
        <View
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          {icon}
          <TI
            secureTextEntry={secureTextEntry}
            style={{
              fontFamily: font,
              padding: 10,
              fontSize: 14,
              lineHeight: 16,
              width: "100%",
            }}
            placeholder={placeholder}
            selectionColor="#000000"
          >
            {value}
          </TI>
        </View>
      )}
      {...props}
    />
  );
};

export default TextInputIcon;
