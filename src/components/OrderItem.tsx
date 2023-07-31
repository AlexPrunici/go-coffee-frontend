import { Order } from "../types/types";
import { styled } from "styled-components";
import { isValidTimestamp } from "../utils/validateTimestamp";

type OrderItemProps = {
  order: Order;
};

export function OrderItem(props: OrderItemProps) {
  if (!isValidTimestamp(props.order.Timestamp)) {
    return null;
  }

  const timestamp = new Date(props.order.Timestamp);

  const formattedTimestamp = timestamp.toLocaleString();

  return (
    <>
      <Text>{props.order.UserID}</Text>
      <Text>{props.order.ID}</Text>
      <Text>{props.order.CoffeeType}</Text>
      <Text>{formattedTimestamp}</Text>
    </>
  );
}

const Text = styled.h3``;
