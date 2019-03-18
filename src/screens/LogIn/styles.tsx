import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const Container = styled.ImageBackground`
  height: ${height - 290};
  width: 100%;
  margin-top: -20px;
`;
export const Logo = styled.Image`
  width: 270px;
  height: 90px;
  margin-bottom: 15px;
  margin-top: -70px;
`;
export const Headline = styled.Text`
  color: #3d3f40;
  font-family: "lora-italic-bold";
  font-size: 20px;
  line-height: 26px;
  text-align: center;
`;
export const BackIcon = styled.View`
  position: absolute;
  top: 50px;
  left: 15px;
  z-index: 3;
`;
export const LogoWrap = styled.View`
  margin-top: 100px;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
export const BottomWrap = styled.View`
  height: 340px;
  margin-top: -50px;
  background: white;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
`;
export const BottomTitle = styled.Text`
  margin-top: 30px;
  margin-bottom: 15px;
`;
export const SearchWrap = styled.View`
  border: 1px solid #ececec;
  border-radius: 24px;
  background-color: #ffffff;
  height: 50px;
  padding: 10px 15px;
  align-items: center;
  flex-direction: row;
`;
export const ButtonWrap = styled.View`
  margin-top: 25px;
  margin-bottom: 15px;
`;
