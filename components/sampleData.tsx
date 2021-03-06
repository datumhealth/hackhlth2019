import Faker from "faker";
import config from "./config.json";
import idx from "idx";
import { ColumnProps } from "antd/lib/table";
import styled from "@emotion/styled";
import { Tag, Badge } from "antd";

const INSURANCE_COLORS: { [key: string]: string } = {
  Medicare: "green",
  "United Health Care": "blue",
  Aetna: "red",
  "Community Care Plan (MDCD)": "yellow"
};

const DRGS = (
  idx(
    config["Patient Dashboard - Details"].find(r => r.label === "Working DRG"),
    _ => _.Options
  ) || ""
).split("\n");

const genRow = () => ({
  unit: Faker.random.arrayElement([
    "ICU",
    "Med Surg",
    "OB",
    "Pediatrics",
    "Orthopedic",
    "ED"
  ]),
  bed: `${Faker.random.number(9) +
    1 * 100 +
    Faker.random.number(99)} ${Faker.random.arrayElement([
    "A",
    "B",
    "C",
    "D"
  ])}`,
  admitDate: Faker.date.between("2018-01-01", "2019-10-26"),
  name: Faker.name.findName(),
  insurance: Faker.random.arrayElement([
    "Medicare",
    "United Health Care",
    "Aetna",
    "Community Care Plan (MDCD)"
  ]),
  drg: Faker.random.arrayElement(DRGS),
  glos: 2 + Faker.random.number(15),
  alos: 2 + Faker.random.number(15),
  iq: Faker.random.arrayElement(["Partially Met", "Met", "Not Met"]),
  lastModified: "10/26/2019",
  lastModifiedBy: Faker.name.findName() + ", RN"
});

export const ROWS = Array(10)
  .fill(null)
  .map(_ => genRow());

const Iq = ({ iq }: { iq: string }) => {
  if (iq === "Partially Met") {
    return <Tag color="gold">{iq}</Tag>;
  }
  if (iq === "Met") {
    return <Tag color="green">{iq}</Tag>;
  }
  if (iq === "Not Met") {
    return <Tag color="red">{iq}</Tag>;
  }
  return <Tag color="cyan">{iq}</Tag>;
};

export const COLUMNS: ColumnProps<any>[] = config["Patient Dashboard - Details"]
  .filter(row => row["Summary?"] === "TRUE")
  .filter(
    row => !["unit", "bed", "lastModified", "lastModifiedBy"].includes(row.key)
  )
  .map(row => ({
    title: row.label,
    dataIndex: row.key,
    key: row.key,
    sorter: (a: any, b: any) => {
      const av = a[row.key];
      const bv = b[row.key];
      if (typeof av === "number") {
        return av > bv ? 1 : -1;
      } else if (typeof av === "string") {
        return av.localeCompare(bv);
      } else if (av.toLocaleDateString) {
        return (av as Date).getTime() > (bv as Date).getTime() ? 1 : -1;
      }
      return 0;
    },
    render: (v: any) => {
      if (!v) {
        return "";
      }
      if (row.key === "iq") {
        return <Iq iq={v} />;
      }
      if (row.key === "insurance") {
        return (
          <Badge
            key={Math.random().toString()}
            color={INSURANCE_COLORS[v] || "pink"}
            text={v}
          />
        );
      }
      if (typeof v !== "object") {
        return v.toString();
      }
      if (v.toLocaleDateString) {
        return v.toLocaleDateString();
      }
      return "";
    }
  }));

const Top = styled.p`
  margin: 0;
`;

COLUMNS.unshift({
  title: "Loc",
  dataIndex: "unit",
  key: "loc",
  render: (_: any, v: any) => {
    return (
      <>
        <Top>{v.unit}</Top>
        <small>Bed {v.bed}</small>
      </>
    );
  }
});

COLUMNS.push({
  title: "Last Modified",
  dataIndex: "lastModified",
  key: "lastModified",
  sorter: (a: any, b: any) => {
    const av = new Date(a.lastModified);
    const bv = new Date(b.lastModified);
    return (av as Date).getTime() > (bv as Date).getTime() ? 1 : -1;
  },
  render: (_: any, v: any) => {
    return (
      <>
        <Top>{new Date(v.lastModified).toLocaleDateString()}</Top>
        <small>by {v.lastModifiedBy}</small>
      </>
    );
  }
});

COLUMNS.find(c => c.key === "glos").title = (
  <>
    G
    <br />
    L
    <br />
    O
    <br />S
  </>
);

COLUMNS.find(c => c.key === "alos").title = (
  <>
    A
    <br />
    L
    <br />
    O
    <br />S
  </>
);

export const DASHBOARD_DATA = config["Patient Dashboard - Details"]
  .filter(row => row["Dashboard?"] !== "FALSE")
  .map(row => ({
    label: row.label,
    value: row.Sample,
    help: row.description
  }));

export const CRITERIA = config["Risk Score"];

export const fetchProperty = (label: string) =>
  idx(DASHBOARD_DATA.find(row => row.label === label), _ => _.value) || "--";

export const DENIAL_RISK = "87%";

ROWS[0].name = fetchProperty("Pt. Name");
ROWS[0].insurance = "Anthem BCBS";
ROWS[0].drg = fetchProperty("Working DRG");
ROWS[0].iq = fetchProperty("IQ Criteria Status");
