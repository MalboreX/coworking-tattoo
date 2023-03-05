import React from "react";
import { TextInput, TextInputProps } from "react-native-paper";
import { StyleSheet, View, TextInput as TI } from "react-native";

interface ExtraProps {
  font?: string;
  icon: React.ReactNode;
}

const SearchInputIcon: React.FC<Spread<TextInputProps, ExtraProps>> = ({
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
        height: 50,
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
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 20,
          }}
        >
          {icon}
          <TI
            secureTextEntry={secureTextEntry}
            style={{
              flex: 1,
              fontFamily: font,
              padding: 10,
              fontSize: 14,
              lineHeight: 16,
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

export default SearchInputIcon;
