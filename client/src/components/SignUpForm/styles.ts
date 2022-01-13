import styled from "@emotion/styled";

export const SignUpFormWrapper = styled.section`
  width: 100%;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.palette.DEFAULT_RADIUS};

  h1 {
    text-align: center;
    font-weight: 100;
    font-size: 1.5rem;
  }
`;

export const SignUpFormBox = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 0 1rem;
`;
