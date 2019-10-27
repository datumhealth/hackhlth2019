import styled from "@emotion/styled";
import { Button, Form, message, Modal, Select } from "antd";
import { useState } from "react";
import { DischargePlanGuy } from "./DischargePlanGuy";

export const DischargeModal = () => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <Button
        type="primary"
        size="large"
        onClick={() => {
          setVisible(true);
        }}
      >
        File Discharge Plan
      </Button>
      <Modal
        title="File a Discharge Plan"
        visible={visible}
        onOk={() => {
          setVisible(false);
        }}
        onCancel={() => setVisible(false)}
        okText="File"
      >
        <DWrap>
          <Button size="large">Upload a Form</Button>
          <Or>or</Or>
          <Button size="large">Fill Out Form Online</Button>
        </DWrap>
      </Modal>
    </>
  );
};

const DWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Or = styled.span`
  margin-top: 13px;
  margin-bottom: 13px;
`;

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
    <DischargeModal />
  </Wrapper>
);
