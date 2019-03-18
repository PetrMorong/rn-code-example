import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Row = styled.View`
  flex-direction: row;
  margin-top: -3;
`;
export const MarginRight20 = styled.View`
  margin-right: 20px;
`;
export const FlexEndView = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-top: 1px;
`;
export const ButtonWrap = styled.View``;
export const Paper = styled.View`
  align-items: center;
  background: white;
  padding: 5px 0 10px 0;
  margin-top: -40px;
`;
export const shadow = StyleSheet.create({
  grey: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2
  }
});
