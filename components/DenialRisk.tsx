import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const RiskDial = dynamic(import("./RiskDial").then(x => x.RiskDial), {
  ssr: false
});

const Main = styled.div`
  display: grid;
  grid-template-columns: 121px 375px;
  grid-column-gap: 62px;
`;

export const DenialRisk = () => (
  <>
    <h1>Denial Risk</h1>
    <Main>
      <RiskDial />
      <div>
        <h2>This patient has a 100% risk of denial.</h2>
        <p>
          InterQual criteria is only partially met. To decrease the likelihood
          of the patient being denied, ensure that the unmet criteria are
          resolved.
        </p>
      </div>
    </Main>
  </>
);
