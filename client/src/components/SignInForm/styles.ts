import styled from "@emotion/styled";

export const SignInFormWrapper = styled.section`
  width: 100%;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.palette.DEFAULT_RADIUS};

  h1 {
    text-align: center;
    font-weight: 100;
    font-size: 2rem;
  }
`;

export const SignInFormBox = styled.form`
  width: 80%;
  padding: 2rem 0;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  p {
    color: #ed1443;
  }
`;
