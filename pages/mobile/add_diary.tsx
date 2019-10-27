import styled from "@emotion/styled";
import { NextPage } from "next";
import Router from "next/router";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const Page: NextPage<{}> = () => (
  <Wrap>
    <img src="/adddiary.svg" onClick={() => Router.push("/mobile/story")} />
  </Wrap>
);

export default Page;
