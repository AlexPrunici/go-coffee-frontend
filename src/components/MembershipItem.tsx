import React from "react";
import { QuotaData } from "../types/types";
import { styled } from "styled-components";
import { humanizeDuration } from "../utils/humanizeDuration";

type MembershipItemProps = {
  quota: QuotaData;
};

export function MembershipItem(props: MembershipItemProps) {
  const durationAmericano = humanizeDuration(
    props.quota.quotas.Americano.Duration
  );

  const durationCappuccino = humanizeDuration(
    props.quota.quotas.Cappuccino.Duration
  );

  const durationEspresso = humanizeDuration(
    props.quota.quotas.Espresso.Duration
  );

  return (
    <Wrapper>
      <Title>{props.quota.membership}</Title>
      <TextWrapper>
        <InfoText>
          {props.quota.quotas.Americano.Amount +
            " Americano in " +
            durationAmericano}
        </InfoText>
        <InfoText>
          {props.quota.quotas.Cappuccino.Amount +
            " Cappuccino in " +
            durationCappuccino}
        </InfoText>
        <InfoText>
          {props.quota.quotas.Espresso.Amount +
            " Espresso in " +
            durationEspresso}
        </InfoText>
      </TextWrapper>
    </Wrapper>
  );
}

const Title = styled.h1`
  margin: 0 auto 15px auto;
  text-align: center;
`;

const InfoText = styled.p`
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
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #fff;

  &:last-child {
    margin-right: 0;
  }
`;
