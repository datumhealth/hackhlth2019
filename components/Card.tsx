import styled from "@emotion/styled";

export const CardNoPadding = styled.div`
  background-color: #fff;
  border-radius: 7px;
`;

export const CardInner = styled.div`
  padding: 30px;
  border-bottom: 1px solid #f0f2f4;
`;

export const CardInnerCenter = styled(CardInner)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled(CardNoPadding)`
  padding: 23px;
`;
