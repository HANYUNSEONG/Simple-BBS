import styled from "@emotion/styled";

export const PostDetailWrapper = styled.section`
  .title-wrapper {
    padding: 1rem;
    background-color: #fff;
    border-radius: ${({ theme }) => theme.palette.DEFAULT_RADIUS};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: 0 -10px 10px 2px #eee;
    border-bottom: 2px solid #eee;

    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;

    & div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        font-size: 0.8rem;
        color: #666;
      }
    }
  }
`;

export const ViewerWrapper = styled.div`
  background: #fff;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.palette.DEFAULT_RADIUS};
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  box-shadow: 0 10px 10px 2px #eee;
`;
