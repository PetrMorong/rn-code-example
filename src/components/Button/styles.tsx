import styled from "styled-components/native";

export const Container = styled.TouchableOpacity<{
  variant?: "text" | "contained" | null;
  stepper?: boolean;
}>`
  height: 50px;
  border-radius: 25px;
  background-color: ${({ variant }) =>
    variant === "text" ? "transparent" : "#3d3f40"};
  flex-direction: row;
  justify-content: ${({ stepper }) => (stepper ? "space-between" : "center")};
  align-items: center;
  padding: 0 25px;
`;
