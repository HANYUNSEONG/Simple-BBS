import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  margin: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 3px 10px 5px ${({ theme }) => theme.palette.GRAY_COLOR1};

  h1 {
    font-weight: 400;
    text-align: center;
  }
`;
