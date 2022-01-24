import styled from "@emotion/styled";

export const PostItemWrapper = styled.div`
  background-color: #fff;
  border-radius: ${({ theme }) => theme.palette.DEFAULT_RADIUS};
  padding: 1rem;
  box-shadow: 0 3px 10px 2px #eee;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;
