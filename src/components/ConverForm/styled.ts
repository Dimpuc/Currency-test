import styled from "styled-components";
import { colors } from "../../static/colors";

export const Container = styled.div`
  width: 500px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Form = styled.form`
  margin-top: 50px;
  border-radius: 5px;
  box-shadow: 9px -9px 32px 8px rgba(168, 166, 166, 0.75);
`;

export const WrapperInput = styled.div`
  padding: 40px 50px 40px 50px;
  display: flex;
  border: 1px solid ${colors.mainGrey};
  flex-direction: column;
`;

export const WrapperLoader = styled.div`
  padding: 30px 40px 30px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.mainGrey};
`;

export const Label = styled.h5`
  margin: 0px 0px 4px 3px;
  color: ${colors.textGrey};
`;

export const Error = styled.h5`
  margin: 4px 0px 0px 3px;
  color: ${colors.mainRed};
`;

export const Input = styled.input<{
  borderColor?: string;
}>`
  width: 290px;
  border: 2px solid ${(props) => props.borderColor || `${colors.mainGrey}`};
  height: 30px;
  padding: 5px;
  border-radius: 5px;
`;

export const Select = styled.select`
  width: 300px;
  height: 35px;
  border-radius: 5px;
  padding: 5px;
  border: 1px solid ${colors.mainGrey};
`;

export const ButtonWrapper = styled.div`
  padding: 30px;
  display: flex;
  border: 1px solid ${colors.mainGrey};
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.button<{
  bgColor?: string;
}>`
  width: 170px;
  height: 35px;
  font-size: 20px;
  text-decoration: uppercase;
  cursor: pointer;
  color: ${colors.mainWhite};
  border-radius: 5px;
  border: none;
  background-color: ${(props) => props.bgColor || `${colors.mainBlue}`};
`;
