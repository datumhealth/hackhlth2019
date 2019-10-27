import styled from "@emotion/styled";
import { Card } from "antd";
import dynamic from "next/dynamic";
import { CRITERIA } from "./sampleData";
import { motion } from "framer-motion";

const RiskDial = dynamic(import("./RiskDial").then(x => x.RiskDial), {
  ssr: false
});

const Main = styled.div`
  display: grid;
  grid-template-columns: 121px 375px;
  grid-column-gap: 62px;
`;

type Score = "poor" | "good" | "fair";

const scoreToColor = (score: Score): string => {
  switch (score) {
    case "poor":
      return "#F5222D";
    case "good":
      return "#7CB305";
    case "fair":
      return "#FAAD14";
    default:
      return "#ccc";
  }
};

const ScoreText = ({ score }: { score: Score }) => {
  return (
    <span style={{ color: scoreToColor(score), textTransform: "uppercase" }}>
      {score}
    </span>
  );
};

const ScoreDot = styled.div<{ score: Score }>`
  height: 27px;
  width: 27px;
  border-radius: 13.5px;
  background-color: ${props => scoreToColor(props.score)};
  position: absolute;
  left: -13.5px;
  top: 13.5px;
`;

const ImpactText = styled.span`
  color: #d1d3d5;
  text-transform: uppercase;
  font-weight: 500;
  width: 100%;
  text-align: right;
`;

interface CriterionProps {
  name: string;
  impact: "highest" | "high";
  score: Score;
  advice: string;
}

const Criterion = ({ name, impact, score, advice }: CriterionProps) => (
  <Card
    title={
      <>
        <h5>{name}</h5>
        <ScoreDot score={score} />
        <ScoreText score={score} />
      </>
    }
    bordered={true}
    style={{ position: "relative" }}
  >
    <p>{advice}</p>
    <p>
      <a>View details</a>
    </p>
    <p style={{ textAlign: "right", margin: 0 }}>
      <ImpactText>{impact} impact</ImpactText>
    </p>
  </Card>
);

const Criteria = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 20px;
  grid-row-gap: 30px;
`;

export const DenialRisk = () => (
  <>
    <h1>Denial Risk</h1>
    <div>
      <Main>
        <motion.div>
          <RiskDial />
        </motion.div>
        <motion.div>
          <h2>This patient has a 87% risk of denial.</h2>
          <p>
            InterQual criteria is only partially met. To decrease the likelihood
            of the patient being denied, ensure that the unmet criteria are
            resolved.
          </p>
        </motion.div>
      </Main>
      <Criteria>
        {CRITERIA.map((p: CriterionProps) => (
          <Criterion {...p} />
        ))}
      </Criteria>
    </div>
  </>
);
