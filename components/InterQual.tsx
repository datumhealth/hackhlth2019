import styled from "@emotion/styled";
import { Collapse } from "antd";
const { Panel } = Collapse;

const GreenUl = styled.ul`
  color: green;
`;

const RedLi = styled.li`
  color: red;
`;

export const InterQual = () => (
  <Collapse defaultActiveKey={["1"]}>
    <Panel header="DRG: 639" key="1">
      <GreenUl>
        <li>
          Diabetes type 1, new onset and, All:
          <ul>
            <li>Blood sugar monitoring at least 4x/24h</li>
            <li>Diabetes education</li>
            <li>
              Hypoglycemic medication initiation or adjustment (includes PO)
            </li>
          </ul>
        </li>
        <li>
          Fasting blood sugar > 180 mg/dL(10.0 mmol/L) ≥ 2 readings and
          inability to tolerate or adhere to prescribed regimen (including diet)
          and, All:
          <ul>
            <li>Blood sugar monitoring at least 4x/24h</li>
            <li>Diabetes education</li>
            <li>
              Hypoglycemic medication initiation or adjustment (includes PO)
            </li>
          </ul>
        </li>
        <li>
          Hyperglycemia and, Both:
          <ul>
            <li>
              Finding, ≥ One:
              <ul>
                <li>Intractable nausea and vomiting</li>
                <li>Orthostatic hypotension, Both:</li>
              </ul>
            </li>
            <li>
              Sustained drop in blood pressure within 3 min of sitting or
              standing
            </li>
            <li>
              Blood pressure, ≥ One:
              <ul>
                <li>Systolic drop ≥ 20 mmHg</li>
                <li>Diastolic drop ≥ 10 mmHg</li>
              </ul>
            </li>
            <li>
              Intervention, All:
              <ul>
                <li>Blood sugar monitoring at least 4x/24h</li>
                <li>Insulin adjustment or pump regulation ≥ 3x/24h</li>
                <li>
                  IV fluid, One:
                  <ul>
                    <li>▶≥ 50 mL/kg/24h (≤ 10 kg)</li>
                    <li>▶≥ 40 mL/kg/24h (> 10−25 kg)</li>
                    <li>▶≥ 30 mL/kg/24h (> 25−60 kg)</li>
                    <li>▶≥ 75 mL/h (> 60 kg)</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <RedLi>
          Pregnancy and non−gestational diabetes mellitus and, Both:
          <ul>
            <li>
              Finding, Both:
              <ul>
                <li>
                  Blood sugar, ≥ One:
                  <ul>
                    <li>Fasting > 100 mg/dL(5.6 mmol/L)</li>
                    <li>2h postprandial ≥ 120 mg/dL(6.7 mmol/L)</li>
                  </ul>
                </li>
                <li>Failed outpatient insulin management ≥ 5d</li>
              </ul>
            </li>
            <li>
              Intervention, All:
              <ul>
                <li>Blood sugar monitoring at least 4x/24h</li>
                <li>
                  Insulin, ≥ One:
                  <ul>
                    <li>Continuous</li>
                    <li>IV ≥ 2x/24h</li>
                    <li>SC or IM ≥ 4x/24h</li>
                  </ul>
                </li>
                <li>Diabetes education</li>
              </ul>
            </li>
          </ul>
        </RedLi>
      </GreenUl>
    </Panel>
  </Collapse>
);
