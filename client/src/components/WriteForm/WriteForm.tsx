import { useRef } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import Editor from "../Editor";
import {
  WriteFormWrapper,
  WriteFormBox,
  WriteFormGroup,
  EditorWrapper,
  EditArea,
} from "./styles";

function WriteForm() {
  const testRef = useRef<any>(null);

  return (
    <WriteFormWrapper>
      <WriteFormBox>
        <WriteFormGroup>
          <Button type="button" buttonTheme="white">
            미리보기
          </Button>
          <Button type="submit">작성</Button>
        </WriteFormGroup>
        <EditArea>
          <Input placeholder="제목을 입력해주세요!" inputSize="large" noStyle />
          <EditorWrapper>
            <Editor
              forwardedRef={testRef}
              previewStyle="vertical"
              height="100vh"
              initialEditType="markdown"
              hideModeSwitch={true}
              placeholder="내용을 입력해주세요!"
            />
          </EditorWrapper>
        </EditArea>
      </WriteFormBox>
    </WriteFormWrapper>
  );
}

export default WriteForm;
