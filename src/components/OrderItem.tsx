import { Order } from "../types/types";
import { styled } from "styled-components";

type OrderItemProps = {
  order: Order;
};

export function OrderItem(props: OrderItemProps) {
  return (
    <>
      <Text>{props.order.ID}</Text>
      <Text>{props.order.UserID}</Text>
      <Text>{props.order.CoffeeType}</Text>
      <Text>{props.order.Timestamp}</Text>
    </>
  );
}

const Text = styled.h3`
  font-family: "Handjet";
`;
