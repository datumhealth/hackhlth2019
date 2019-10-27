import styled from "@emotion/styled";
import { Button, Table } from "antd";
import { NextPage } from "next";
import { Card } from "../components/Card";
import { Navbar } from "../components/Navbar";
import { COLUMNS, ROWS } from "../components/sampleData";

const Wrapper = styled.div`
  padding: 33px 23px;
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  .anticon-area-chart {
    color: #1890ff;
  }
`;

const Actions = styled.div`
  button {
    margin-right: 15px;
  }
  padding-bottom: 17px;
`;

const Page: NextPage<{}> = () => (
  <div>
    <Navbar />
    <Wrapper>
      <Card>
        <TableHeader>
          <Actions>
            <Button icon="filter" size="large">
              Filters
            </Button>
            <Button icon="caret-down" size="large">
              Sort by
            </Button>
          </Actions>
          <Button icon="area-chart" size="large"></Button>
        </TableHeader>
        <Table columns={COLUMNS} dataSource={ROWS} bordered={true} />
      </Card>
    </Wrapper>
  </div>
);

export default Page;
