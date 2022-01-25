import styled from "@emotion/styled";

export const PostItemWrapper = styled.div`
  background-color: #fff;
  border-radius: ${({ theme }) => theme.palette.DEFAULT_RADIUS};
  padding: 1rem;
  box-shadow: 0 3px 10px 2px #eee;
  cursor: pointer;
  transition: 0.3s;

  display: flex;
  flex-direction: column;
  row-gap: 0.3rem;

  will-change: transform;
  &:hover {
    transform: translateY(-5px);
  }

  & h1 {
    font-size: 1rem;
  }

  & p {
    font-size: 0.8rem;
    color: #999;
  }
`;
