import { getQuotaConfig } from "../actions/getQuotaConfig";
import { useFetch } from "../hooks/useFetch";
import { styled } from "styled-components";
import { MembershipTable } from "../components/MembershipTable";
import { normalizeData } from "../utils/normalizeCoffeeData";
import { QuotaData } from "../types/types";

export function HomePage() {
  const { data } = useFetch(getQuotaConfig);

  if (!data) {
    return null;
  }

  const mappedData: QuotaData[] = normalizeData(data);

  return (
    <HomePageWrapper>
      <MembershipTable quotas={mappedData} />
    </HomePageWrapper>
  );
}
const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 50px;
`;
