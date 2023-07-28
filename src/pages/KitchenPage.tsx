import { useFetch } from "../hooks/useFetch";
import { styled } from "styled-components";
import { getOrders } from "../actions/getOrders";
import { OrderItem } from "../components/OrderItem";

export function KitchenPage() {
  const { data } = useFetch(getOrders);

  if (!data) {
    return null;
  }

  return (
    <KitchenPageWrapper>
      <Grid>
        <ColumnName>UserId</ColumnName>
        <ColumnName>OrderId</ColumnName>
        <ColumnName>Coffee</ColumnName>
        <ColumnName>Time</ColumnName>
      </Grid>
      <Grid>
        {data.map((order) => (
          <OrderItem order={order} />
        ))}
      </Grid>
    </KitchenPageWrapper>
  );
}
const KitchenPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 50px;
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

const ColumnName = styled.h2`
  font-family: "Handjet";
`;
