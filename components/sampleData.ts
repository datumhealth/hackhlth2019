import Faker from "faker";
import config from "./config.json";

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
  drg: Faker.random.arrayElement(["639-DIABETES W/O CC/MCC"]),
  glos: 2 + Faker.random.number(15),
  alos: 2 + Faker.random.number(15),
  iq: Faker.random.arrayElement(["Partially Met", "Met", "Not Met"]),
  lastModified: "10/26/2019",
  lastModifiedBy: Faker.name.findName() + ", RN"
});

export const ROWS = Array(10)
  .fill(null)
  .map(_ => genRow());
ROWS[0].name = "Mark Williams";

export const COLUMNS = config["Patient Dashboard - Details"]
  .filter(row => row["Summary?"] === "TRUE")
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
      if (typeof v !== "object") {
        return v.toString();
      }
      if (v.toLocaleDateString) {
        return v.toLocaleDateString();
      }
      return "";
    }
  }));

export const DASHBOARD_DATA = config["Patient Dashboard - Details"]
  .filter(row => row["Dashboard?"] !== "FALSE")
  .map(row => ({
    label: row.label,
    value: row.Sample,
    help: row.description
  }));

export const CRITERIA = config["Risk Score"];
