import styled from "styled-components/native";
import { colors } from "@src/constants";

export const InputWrap = styled.View<{ width?: string | number }>`
  width: ${({ width }) => width || "100%"};
  position: relative;
`;

export const ErrorText = styled.Text`
  color: ${colors.error};
  font-size: 12px;
  margin-left: -2px;
  margin-top: 3px;
  padding-bottom: 3px;
`;

export const CharCount = styled.View`
  position: absolute;
  right: 0;
  bottom: 5;
  width: 50px;
  height: 15px;
`;

export const CharCountText = styled.Text`
  opacity: 0.7;
  color: #033247;
  font-size: 12px;
  letter-spacing: 0.4px;
  line-height: 16px;
  text-align: right;
`;
