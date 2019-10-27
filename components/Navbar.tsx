import styled from "@emotion/styled";
import { Icon } from "antd";

const Notification = () => (
  <svg
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="1" width="16" height="16" fill="white" fill-opacity="0.01" />
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="2"
      y="1"
      width="12"
      height="16"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M2.00323 1V17H13.9902V1L2.00323 1Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.4284 14.0001H12.9913V6.99999C12.9913 4.42813 11.0528 2.31096 8.55863 2.03127V1.56252C8.55863 1.25154 8.30736 1 7.99672 1C7.68616 1 7.43481 1.25154 7.43481 1.56252V2.03127C4.94066 2.31096 3.00213 4.42813 3.00213 6.99999V14.0001H2.56515C2.25451 14.0001 2.00323 14.2516 2.00323 14.5625C2.00323 14.8735 2.25451 15.125 2.56515 15.125H6.873V15.8751C6.873 16.4969 7.37552 17 7.99672 17C8.61792 17 9.12054 16.4969 9.12054 15.8751V15.125H13.4284C13.739 15.125 13.9902 14.8735 13.9902 14.5625C13.9902 14.2516 13.739 14.0001 13.4284 14.0001ZM11.8676 14.0001H4.12595V6.99999C4.12595 4.85942 5.85847 3.12502 7.99672 3.12502C10.1351 3.12502 11.8676 4.85942 11.8676 6.99999V14.0001Z"
        fill="black"
        fill-opacity="0.65"
      />
    </g>
    <circle cx="12.5" cy="3.5" r="3.5" fill="#F13030" />
  </svg>
);

const Nav = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 56px;
`;

const NavTab = styled.div<{ selected: boolean }>`
  color: ${props => (props.selected ? "#1890FF" : "#787881")};
  font-weight: ${props => (props.selected ? 500 : 400)};
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 45px;
  font-weight: 14px;
  svg {
    height: 24px;
    width: 24px;
  }
`;

const NavbarWrapper = styled.div`
  background-color: #fff;
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 25px;
  img {
    margin-left: 16px;
    margin-right: 9px;
  }
`;

export const Navbar = () => (
  <NavbarWrapper>
    <Nav>
      {[
        {
          icon: "usergroup-add",
          label: "Patients",
          selected: true
        },
        {
          icon: "message",
          label: "Messages"
        },
        {
          icon: "bar-chart",
          label: "Reports"
        }
      ].map(({ icon, label, selected = false }) => (
        <NavTab selected={selected}>
          <Icon type={icon} />
          <span>{label}</span>
        </NavTab>
      ))}
    </Nav>
    <Profile>
      <Notification />
      <img src="/angbabaesanurse.png" height="28" width="28" />
      <span>Maria R.</span>
    </Profile>
  </NavbarWrapper>
);
