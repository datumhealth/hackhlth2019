import styled from "@emotion/styled";
import { Collapse, Tooltip } from "antd";
import { motion } from "framer-motion";
import { CardInner } from "../components/Card";
import { DASHBOARD_DATA } from "../components/sampleData";
const { Panel } = Collapse;

const DataGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 15px;
`;

const ElementGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const makeAddrLink = (addr: string) =>
  `http://maps.google.com/maps?q=${encodeURIComponent(addr)}`;

export const PatientInfo = () => (
  <>
    <motion.div
      style={{ marginTop: "20px", opacity: "0" }}
      animate={{ marginTop: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CardInner>
        <DataGrid>
          {DASHBOARD_DATA.map(({ label, value, help }) => (
            <ElementGrid>
              <span>
                {help ? (
                  <Tooltip title={help} trigger="click">
                    <strong>{label}:</strong>
                  </Tooltip>
                ) : (
                  <strong>{label}:</strong>
                )}
              </span>
              <span>
                {value && value.includes("NV") ? (
                  <a href={makeAddrLink(value)} target="_blank">
                    {value}
                  </a>
                ) : (
                  value
                )}
              </span>
            </ElementGrid>
          ))}
        </DataGrid>
      </CardInner>
    </motion.div>
    <motion.div
      style={{ marginTop: "20px", opacity: "0" }}
      animate={{ marginTop: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <CardInner>
        <h3>Day-to-Day Summaries:</h3>
        <Collapse defaultActiveKey={["1", "2"]}>
          <Panel header="10/20/2019" key="1">
            <ul>
              <li>MICU</li>
              <li>several days of nausea and vomiting</li>
              <li>tachycardic with 120s bpm, BP was 103/67</li>
              <li>Fasting Glucose 489, Elevated anion gap</li>
              <li>
                IVF,regular insulin, mupirocin, heparin sc, detemir sc, insulin
                aspart sc.
              </li>
              <li>MD note: Metabolic acidosis due to diabetic ketoacidosis</li>
            </ul>
          </Panel>
          <Panel header="10/21/2019" key="2">
            <ul>
              <li>transferred to internal medicine floor</li>
              <li>
                continued diffused abdominal pain associated with nausea and
                vomiting
              </li>
              <li>CBC - white count 10.5 K/uL, hgb 9.6, hct 27.9</li>
              <li>
                IVF ,regular insulin, mupirocin, heparin sc, detemir sc, insulin
                aspart sc
              </li>
              <li>
                Blood sugar controlled on sliding scale insulin with Levemir 20
                units every night.
              </li>
            </ul>
          </Panel>
        </Collapse>
      </CardInner>
    </motion.div>
  </>
);
