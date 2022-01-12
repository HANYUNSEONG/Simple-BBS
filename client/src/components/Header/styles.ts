import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  background-color: #fff;
  border-radius: ${({ theme }) => theme.palette.DEFAULT_RADIUS};
  box-shadow: 0px 3px 10px 5px ${({ theme }) => theme.palette.GRAY_COLOR2};

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: 400;
  }

  nav {
    flex: 1;
    text-align: right;
    ul {
      display: flex;
      justify-content: flex-end;
      li {
        padding: 0 1rem;
        &:not(:last-child) {
          border-right: 1px solid #ddd;
        }

        a {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    width: 90%;
    margin: 0 auto;
    flex-direction: column;
    row-gap: 1rem;
  }
`;
