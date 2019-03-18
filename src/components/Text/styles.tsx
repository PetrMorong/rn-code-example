import styled from "styled-components/native";
import { fonts, AvailableFontWeights } from "./fonts";

interface StyledTextProps {
  weight?: AvailableFontWeights;
  secondary?: boolean;
  center?: boolean;
  lineHeight?: number | null;
  letterSpacing?: number | null;
  opacity?: number | null;
}

export const StyledText = styled.Text<StyledTextProps>`
  font-family: ${({ weight }) => fonts[weight || "regular"]};
  font-size: 16px;
  color: ${({ secondary }) => (secondary ? "#CCB98C" : "#3d3f40")};
  text-align: ${({ center }) => (center ? "center" : "left")};
  line-height: ${({ lineHeight }) => lineHeight || 20};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || -0.36};
  opacity: ${({ opacity }) => opacity || 1};
`;
