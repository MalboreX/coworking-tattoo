import React, { useState } from "react";
import { TextInput, TextInputProps } from "react-native-paper";
import {
  StyleSheet,
  View,
  TextInput as TI,
  Text,
  Touchable,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { ImagesSvg, MicroSvg, PhotoSvg, PlusSvg, TelegramSvg } from "../icons";

interface ExtraProps {
  font?: string;
  onSend: Function;
}

const TextInputDefault: React.FC<Spread<TextInputProps, ExtraProps>> = ({
  value,
  secureTextEntry,
  placeholder,
  font = "Roboto_400Regular",
  onSend,
  ...props
}) => {
  const [text, setText] = useState("");

  const send = () => {
    onSend?.(text);
    setText("");
  };

  return (
    <TextInput
      mode="outlined"
      style={{
        height: 60,
        backgroundColor: "rgba(151, 151, 189, 0.1)",
      }}
      outlineStyle={{
        borderWidth: 0,
        borderRadius: 45,
      }}
      render={() => (
        <View
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: 5,
            paddingRight: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
            }}
          >
            <View>
              <View
                style={{
                  backgroundColor: "#43A2FA",
                  width: 36,
                  height: 36,
                  alignItems: "center",
                  borderRadius: 50,
                }}
              >
                <PhotoSvg
                  style={{
                    marginTop: 5,
                  }}
                  stroke={"white"}
                />
              </View>
            </View>
            <View
              style={{
                flex: 1,
              }}
            >
              <TI
                secureTextEntry={secureTextEntry}
                style={{
                  fontFamily: font,
                  padding: 10,
                  fontSize: 15,
                  lineHeight: 18,
                  width: "100%",
                }}
                placeholderTextColor="#9797BD"
                placeholder={placeholder}
                selectionColor="#000000"
                onChangeText={(e) => setText(e)}
                value={text}
              >
                {value}
              </TI>
            </View>
          </View>
          <TouchableOpacity onPress={() => send()}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: 32,
                height: 32,
              }}
            >
              {text != "" && <TelegramSvg />}
            </View>
          </TouchableOpacity>
        </View>
      )}
      {...props}
    />
  );
};

export default TextInputDefault;
