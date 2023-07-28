import React from "react";
import { QuotaData } from "../types/types";
import { styled } from "styled-components";

type MembershipItemProps = {
  quota: QuotaData;
};

export function MembershipItem(props: MembershipItemProps) {
  return (
    <Wrapper>
      <Title>{props.quota.membership}</Title>
      <TextWrapper>
        <InfoText>
          {props.quota.quotas.Americano.Amount +
            " Americano in " +
            props.quota.quotas.Americano.Duration +
            " minutes"}
        </InfoText>
        <InfoText>
          {props.quota.quotas.Cappuccino.Amount +
            " Cappuccino in " +
            props.quota.quotas.Cappuccino.Duration +
            " minutes"}
        </InfoText>
        <InfoText>
          {props.quota.quotas.Espresso.Amount +
            " Espresso in " +
            props.quota.quotas.Espresso.Duration +
            " minutes"}
        </InfoText>
      </TextWrapper>
    </Wrapper>
  );
}

const Title = styled.h1`
  font-family: "Handjet";
  margin: 0 auto 15px auto;
  text-align: center;
`;

const InfoText = styled.p`
  font-family: "Handjet";
  margin-bottom: 5px;
  font-size: 1.5rem;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #fff;

  &:last-child {
    margin-right: 0;
  }
`;
