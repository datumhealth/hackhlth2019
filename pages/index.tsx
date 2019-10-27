import { Button } from "antd";
import { NextPage } from "next";

interface Props {
  userAgent?: string;
}

const Page: NextPage<Props> = ({ userAgent }) => (
  <main>
    Your user agent: {userAgent}
    <Button>test</Button>
  </main>
);

Page.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};

export default Page;
