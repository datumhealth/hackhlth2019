import styled from "@emotion/styled";
import { NextPage } from "next";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const Page: NextPage<{}> = () => (
  <Wrap>
    <img src="/story.svg" />
  </Wrap>
);

export default Page;
