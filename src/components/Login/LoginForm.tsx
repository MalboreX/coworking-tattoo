import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { UiBigRoundButton, UiTextInputIcon } from "../../ui";
import { EnvelopeSvg, LockSvg } from "../../ui/icons";

interface Props {
  loginSuccess: Function;
}

const LoginForm: React.FC<Props> = ({ loginSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);

  const tryLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      loginSuccess();
      setIsLoading(false);
    }, 500);
  };

  return (
    <View style={styles.form}>
      <Text
        style={{
          fontFamily: "Roboto_900Black",
          textAlign: "center",
          fontSize: 36,
          lineHeight: 42,
          color: "#262628",
          textShadowRadius: 1,
          textShadowColor: "#000",
          textShadowOffset: { width: 1, height: 1 },
        }}
      >
        Sign in to {"\n"} FineLine Tatto
      </Text>
      <Text
        style={{
          fontFamily: "Roboto_500Medium",
          lineHeight: 19,
          fontSize: 16,
          marginVertical: 13,
          color: "#9797BD",
        }}
      >
        Enter your details below
      </Text>

      <View
        style={{
          width: "100%",
          marginVertical: 13,
        }}
      >
        <Text
          style={{
            fontFamily: "Roboto_500Medium",
            fontSize: 13,
            alignItems: "center",
          }}
        >
          Username or email
        </Text>
        <UiTextInputIcon
          icon={<EnvelopeSvg />}
          mode="outlined"
          placeholder="Username or email"
        />
      </View>

      <View style={styles.formControl}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontFamily: "Roboto_500Medium",
              fontSize: 13,
              alignItems: "center",
            }}
          >
            Password
          </Text>
          <Text
            style={{
              fontFamily: "Roboto_500Medium",
              fontSize: 13,
              color: "#43A2FA",
              alignItems: "center",
            }}
          >
            Forgot password?
          </Text>
        </View>

        <UiTextInputIcon
          icon={<LockSvg />}
          mode="outlined"
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>

      <View style={styles.formControl}>
        <UiBigRoundButton
          onPress={() => tryLogin()}
          height={60}
          mode="contained"
          loading={isLoading}
        >
          <Text>Sign in</Text>
        </UiBigRoundButton>
      </View>

      <View>
        <Text
          style={{
            fontFamily: "Roboto_400Regular",
            fontSize: 14,
            alignItems: "center",
            lineHeight: 16,
            marginVertical: 10,
          }}
        >
          Not a member?{" "}
          <Text
            style={{
              color: "#43A2FA",
              fontFamily: "Roboto_700Bold",
            }}
          >
            Signup now
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    //marginVertical: "30%",
    width: "80%",
  },
  formControl: {
    width: "100%",
    marginVertical: 10,
  },
});

export default LoginForm;
