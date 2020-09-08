import React from "react";
import styled from "styled-components";
import { Text, View, FlatList } from "react-native";

const assets = [
  { id: 1, asset: "BRML3", initial: 20.91, close: 21.78 },
  { id: 2, asset: "EGIE3", initial: 40, close: 43 },
  { id: 3, asset: "PETR4", initial: 14, close: 16 },
  { id: 4, asset: "IVVB11", initial: 188.89, close: 190 },
  { id: 5, asset: "SULA11", initial: 45.67, close: 47.9 },
];

const Items = ({ ticker, variation }) => (
  <Asset>
    <AssetName>{ticker}</AssetName>
    <Variation >{variation}</Variation>
  </Asset>
);

export default function MyAssets() {
  const renderItem = ({ item }) => (
    <Items
      ticker={item.asset}
      variation={Number((item.initial / item.close).toFixed(2)).toString()}
    />
  );

  return (
    <View>
      <FlatList
        data={assets}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const AssetName = styled.Text`
  font-size: 30px;
  font-weight:700;
`;

const Variation = styled.Text`
  color: green;
`;
const Asset = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:10px;
  border-bottom-color: rgba(0, 0, 0, 0.10);
  border-bottom-width: 1px;
`;
