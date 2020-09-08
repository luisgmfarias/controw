import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import { Text, Image, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Login({ navigation }) {
  const [option, setOption] = useState(0);

  const handleLoginOption = (value) => {
    setOption(value);
  };

  return (
    <Container>
      <Image
        style={{ width: 187, height: 102 }}
        source={require("../assets/images/logo.png")}
      />
      <Text
        style={{
          marginTop: 10,
          fontSize: 12,
          color: "#f2f2f2",
          fontWeight: "100",
        }}
      >
        {" "}
        GROW WITH CONTROL
      </Text>
      <LoginContainer>
        <LoginRegistry>
          <TouchableOpacity
            onPress={() => {
              handleLoginOption(0);
            }}
          >
            <Text
              style={{
                fontSize: 32,
                color: option===1 ? 'rgba(242,242,242,0.4)': 'rgba(242,242,242,1)',
                fontWeight: "200",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleLoginOption(1);
            }}
          >
            <Text
              style={{
                fontSize: 32,
                color: option===0 ? 'rgba(242,242,242,0.4)': 'rgba(242,242,242,1)',
                fontWeight: "200",
              }}
            >
              Registrar
            </Text>
          </TouchableOpacity>
        </LoginRegistry>
        <LoginContent>
          <LoginEntry
            placeholder="E-mail"
            placeholderTextColor="rgba(0,0,0,0.4)"
          />
          <LoginEntry
            placeholder="Senha"
            placeholderTextColor="rgba(0,0,0,0.4)"
          />
          {(() => {
            if (option === 0) {
              return (
                <EnterButton
                  onPress={() => {
                    navigation.navigate("LandingPageScreen");
                  }}
                >
                  <Text
                    style={{
                      color: "#f2f2f2",
                      fontSize: 20,
                      fontWeight: "200",
                    }}
                  >
                    Entrar
                  </Text>
                </EnterButton>
              );
            } else {
              return (
                  <>
                  <LoginEntry
                    placeholder="Confirme sua senha"
                    placeholderTextColor="rgba(0,0,0,0.4)"
                  />
                  <EnterButton
                    onPress={() => {
                      navigation.navigate("LandingPageScreen");
                    }}
                  >
                    <Text
                      style={{
                        color: "#f2f2f2",
                        fontSize: 20,
                        fontWeight: "200",
                      }}
                    >
                      Registrar
                    </Text>
                  </EnterButton>
                </>
              );
            }
          })()}
        </LoginContent>
      </LoginContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #4f028b;
  padding-top: 40px;
  align-items: center;
`;

const EnterButton = styled.TouchableOpacity`
  width: 120;
  height: 40;
  background-color: #35387b;
  align-items: center;
  justify-content: center;
  border-radius: 8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 30;
`;

const LoginEntry = styled.TextInput`
  height: 50px;
  width: 230px;
  border-bottom-width: 1px;
  border-style: solid;
  border-bottom-color: #35387b;
  font-size: 18px;
  font-weight: 200;
  color: #35387b;
`;

const LoginContent = styled.View`
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  align-items: center;
  width: 300px;
  border-radius: 14px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px 35px;
`;

const LoginContainer = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  height: 300px;
`;

const LoginRegistry = styled.View`
  display: flex;
  flex-direction: row;
  width: 300px;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
  margin-bottom:10px;
`;
