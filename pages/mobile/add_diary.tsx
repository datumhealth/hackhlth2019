import { NextPage } from "next";
import styled from "@emotion/styled";
import { Global, css } from "@emotion/core";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100wh;
  background-color: #c4c4c4;
`;

const Page: NextPage<{}> = () => (
  <Wrap>
    <img src="/adddiary.svg" />
  </Wrap>
);

export default Page;
