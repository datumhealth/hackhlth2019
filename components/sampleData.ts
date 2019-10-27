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

export const COLUMNS = config["Patient Dashboard - Details"]
  .filter(row => row["Summary?"] === "TRUE")
  .map(row => ({
    title: row.label,
    dataIndex: row.key,
    key: row.key,
    render: v => {
      if (typeof v !== "object") {
        return v.toString();
      }
      if (v.toLocaleDateString) {
        return v.toLocaleDateString();
      }
      return "";
    }
  }));
