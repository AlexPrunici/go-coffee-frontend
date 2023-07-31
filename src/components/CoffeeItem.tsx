import React from "react";
import { CoffeeType } from "../types/types";
import { styled } from "styled-components";

type CoffeeItemProps = {
  coffeeType: CoffeeType;
  selected: boolean;
  setSelected: () => void;
  icon: React.ReactNode;
};

export function CoffeeItem(props: CoffeeItemProps) {
  return (
    <Wrapper selected={props.selected} onClick={() => props.setSelected()}>
      <Title>{props.coffeeType}</Title>
      <IconWrapper>{props.icon}</IconWrapper>
    </Wrapper>
  );
}

const Title = styled.h1`
  margin: 0 auto 35px auto;
  text-align: center;
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  margin: auto;
  width: 150px;
  height: 100%;
`;

const Wrapper = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
  padding: 20px;
  width: 100%;
  border: 2px solid;
  border-color: ${(props) => (props.selected ? "#0acb2e" : "#000")};
  border-radius: 10px;
  background-color: #fff;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;
