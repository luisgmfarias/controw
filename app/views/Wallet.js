import React from "react";
import { View, Text, Button,FlatList } from "react-native";
import styled from "styled-components";
import Logo from "../components/Logo";
import Block from "../components/Block";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MyAssets from '../views/MyAssets';

const assets = [
  { id: '1', asset: "BRML3", initial: 20.91, close: 21.78 },
  { id: '2', asset: "EGIE3", initial: 40, close: 43 },
  { id: '3', asset: "PETR4", initial: 14, close: 16 },
  { id: '4', asset: "IVVB11", initial: 188.89, close: 190 },
  { id: '5', asset: "SULA11", initial: 45.67, close: 47.90 },
];

function dataAtualFormatada(){
  var data = new Date(),
      dia  = data.getDate().toString().padStart(2, '0'),
      mes  = (data.getMonth()+1).toString().padStart(2, '0'),
      ano  = data.getFullYear();
  return dia+"/"+mes+"/"+ano;
}

const Item = ({ticker,variation }) => (
  <Asset>
    <Name>{ticker}</Name>
    <Rentability>{variation}</Rentability>
  </Asset>
);

export default function Wallet({navigation}) {

  const renderItem = ({ item }) => (
    <Item ticker={item.asset} variation={Number((item.initial / item.close).toFixed(2)).toString()} />
  );

  return (
    <View style={{ display: "flex", flexDirection: "column" }}>
      <HeaderDayInfo>
        <DateText>{dataAtualFormatada()}</DateText>
        <DayReturn>
          <ReturnInfoContainer>
            <Text style={{ fontSize: 24, fontWeight: "700", color:'#4F028B' }}>
              Minha carteira
            </Text>
            <Text style={{ fontSize: 18, color: "#56FC5D" }}>+2,15%</Text>
          </ReturnInfoContainer>

          <ReturnInfoContainer>
            <Text style={{ fontSize: 18, fontWeight: "700", color:'#4F028B' }}>
              Ibovespa
            </Text>
            <Text style={{ fontSize: 14, color: "#56FC5D" }}>+1,10%</Text>
          </ReturnInfoContainer>
        </DayReturn>
      </HeaderDayInfo>
      <WalletInfoContainer contentContainerStyle={{ alignItems: "center" }}>
        <Block>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 15,
            }}
          >
            <MaterialCommunityIcons
              name={"folder-account"}
              size={25}
              color="white"
            />
            <Text
              style={{
                fontSize: 24,
                fontWeight: "300",
                color: "white",
                marginLeft: 5,
              }}
            >
              Meus ativos
            </Text>
            <MaterialCommunityIcons
              name={"dots-horizontal"}
              size={20}
              color="white"
              style={{ marginLeft: "auto", marginRight: 15 }}
              onPress={() => {navigation.navigate('Meus ativos', {assets})}}
            />
          </View>
          <ScrollView horizontal={true}>
            <FlatList
              horizontal
              style={{paddingTop:20, paddingBottom:30}}
              data={assets}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </ScrollView>
        </Block>
        <Block style={{ height: 300 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 15,
            }}
          >
            <MaterialCommunityIcons
              name={"chart-areaspline-variant"}
              size={25}
              color="white"
            />
            <Text
              style={{
                fontSize: 24,
                fontWeight: "300",
                color: "white",
                marginLeft: 5,
              }}
            >
              Rentabilidade
            </Text>
            <MaterialCommunityIcons
              name={"dots-horizontal"}
              size={20}
              color="white"
              style={{ marginLeft: "auto", marginRight: 15 }}
            />
          </View>
        </Block>
      </WalletInfoContainer>
    </View>
  );
}

const Asset = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 8px;
`;

const Name = styled.Text`
  font-size: 36px;
  color: white;
  font-weight: 200;
`;

const Rentability = styled.Text`
  font-size: 18px;
  color: #56fc5d;
`;

const AssetsPreview = styled.View`
  display: flex;
  flex-direction: row;
  padding: 20px 0 30px 0px;
`;

const WalletInfoContainer = styled.ScrollView`
  width: 100%;
  padding: 25px 0;
  background-color: #ffffff;
`;

const HeaderDayInfo = styled.View`
  width: 100%;
  align-items: center;
  padding: 20px 0px;
  background-color: #ffffff;
  border-style: solid;
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-bottom-width: 1px;
`;

const DateText = styled.Text`
  font-weight: 500;
  font-size: 14px;
  color:#4F028B;
`;

const DayReturn = styled.View`
  width: 100%;
  margin-top: 12px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
`;

const ReturnInfoContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
