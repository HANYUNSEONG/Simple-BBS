import styled from "@emotion/styled";

export const WriteFormWrapper = styled.section``;

export const WriteFormBox = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const WriteFormGroup = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    column-gap: 0.5rem;
  }
`;

export const EditArea = styled.div`
  border-radius: ${({ theme }) => theme.palette.DEFAULT_RADIUS};
  overflow: hidden;
  box-shadow: 0 0 10px 2px #eee;
  input {
    border: none;
    outline: none;
  }
`;

export const EditorWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fff;

  .toastui-editor-defaultUI {
    border: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
`;
