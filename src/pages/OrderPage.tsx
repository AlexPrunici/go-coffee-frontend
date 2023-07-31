import React, { useCallback, useState } from "react";
import { CoffeeType } from "../types/types";
import { orderCoffee } from "../actions/orderCoffee";
import { customToast } from "../utils/customToast";
import { styled } from "styled-components";
import { CoffeeItem } from "../components/CoffeeItem";
import { ReactComponent as Americano } from "../assets/icons/Americano.svg";
import { ReactComponent as Cappuccino } from "../assets/icons/Cappuccino.svg";
import { ReactComponent as Esspresso } from "../assets/icons/Esspresso.svg";

export function OrderPage() {
  const [selectedCoffee, setSelectedCoffee] = useState<CoffeeType | null>(null);

  const onOrder = useCallback(async () => {
    if (!selectedCoffee) {
      return;
    }

    try {
      await orderCoffee({
        coffee: selectedCoffee,
        userId: "1",
        membershipType: "Americano Maniac",
      });
      customToast.success(`Succsess, ${selectedCoffee} ordered`);
    } catch (error: any) {
      customToast.error(error.response.data.error);
    } finally {
      setSelectedCoffee(null);
    }
  }, [selectedCoffee]);

  return (
    <OrderPageWrapper>
      <Title>Select Coffee</Title>
      <BlockWrapper>
        <CoffeeItem
          coffeeType={CoffeeType.AMERICANO}
          selected={CoffeeType.AMERICANO === selectedCoffee}
          setSelected={() => setSelectedCoffee(CoffeeType.AMERICANO)}
          icon={<Americano />}
        />
        <CoffeeItem
          coffeeType={CoffeeType.CAPPUCCINO}
          selected={CoffeeType.CAPPUCCINO === selectedCoffee}
          setSelected={() => setSelectedCoffee(CoffeeType.CAPPUCCINO)}
          icon={<Cappuccino />}
        />
        <CoffeeItem
          coffeeType={CoffeeType.ESPRESSO}
          selected={CoffeeType.ESPRESSO === selectedCoffee}
          setSelected={() => setSelectedCoffee(CoffeeType.ESPRESSO)}
          icon={<Esspresso />}
        />
      </BlockWrapper>
      <ButtonWrapper>
        <Button disabled={!selectedCoffee} onClick={() => onOrder()}>
          Order
        </Button>
      </ButtonWrapper>
    </OrderPageWrapper>
  );
}

const OrderPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-weight: 500;
  margin-bottom: 40px;
`;

const BlockWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Button = styled.button<{ disabled: boolean }>`
  display: inline-block;
  color: ${(props) => (props.disabled ? "#ccc" : "#915603")};
  font-size: 2.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid;
  border-color: ${(props) => (props.disabled ? "#ccc" : "#915603")};
  border-radius: 10px;
  display: block;
  cursor: pointer;
`;
