import { DischargePlanGuy } from "./DischargePlanGuy";
import { Button } from "antd";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  text-align: center;
  button {
    margin-top: 35px;
  }
`;

export const DischargePlan = () => (
  <Wrapper>
    <DischargePlanGuy />
    <h3>You have not yet filed a Discharge Plan.</h3>
    <p>To file a Discharge Plan, click the button below.</p>
    <Button size="large" type="primary">
      File Discharge Plan
    </Button>
  </Wrapper>
);
