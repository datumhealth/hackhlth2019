import { Collapse, Card } from "antd";
const { Panel } = Collapse;

export const CommunicationHistory = () => (
  <>
    <h3>Communication History:</h3>
    <Collapse defaultActiveKey={["1"]}>
      <Panel header="10/27/2019 at 7:70am" key="1">
        Sent <strong>Social Determinants of Health Form</strong> to
        casemanagement@anthemBCBS.com.
        <Card title="Email: Social Determinants of Health Form">
          <p>Hi Elise,</p>
          <p>
            Attached is the social determinants of health form. Please advise.
          </p>
          <p>Regards,</p>
          <p>Maria Resurreccion, RN PAHM</p>
        </Card>
      </Panel>
    </Collapse>
  </>
);
