import React from "react";
import { styled } from "styled-components";
import { MembershipItem } from "./MembershipItem";
import { QuotaData } from "../types/types";

type MembershipTableProps = {
  quotas: QuotaData[];
};

export function MembershipTable(props: MembershipTableProps) {
  return (
    <>
      <QuotasText>Memberships</QuotasText>
      <QuotasBlock>
        {props.quotas.map((quota, key) => (
          <MembershipItem key={key} quota={quota} />
        ))}
      </QuotasBlock>
    </>
  );
}

const QuotasText = styled.h1`
  font-family: "Handjet";
  font-weight: 500;
  margin-bottom: 40px;
`;

const QuotasBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 50px;
  width: 100%;
`;
