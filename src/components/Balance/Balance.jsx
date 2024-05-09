import {
  BalanceForm,
  BalanceLabel,
  BalanceInput,
  BalanceButton,
} from "./BalanceStyles";

const Balance = () => {
  return (
    <>
      <BalanceForm>
        <BalanceLabel>
          Balacne:
          <BalanceInput type="text" name="balance" />
          <BalanceButton type="submit">CONFIRM</BalanceButton>
        </BalanceLabel>
      </BalanceForm>
    </>
  );
};

export default Balance;
