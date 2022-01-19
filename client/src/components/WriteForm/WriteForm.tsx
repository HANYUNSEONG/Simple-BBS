import useInputs from "@/hooks/useInputs";
import { FormEvent, useEffect, useRef } from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import Select from "../common/Select";
import Editor from "../Editor";
import {
  WriteFormWrapper,
  WriteFormBox,
  WriteFormGroup,
  EditorWrapper,
  EditArea,
} from "./styles";

function WriteForm() {
  const [writeData, setWriteDate] = useInputs();
  const editorRef = useRef<any>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const markdown = editorRef.current.getInstance().getMarkdown();
    if (markdown) {
      const payload = {
        ...writeData,
        content: markdown,
      };
    }
  };

  return (
    <WriteFormWrapper>
      <WriteFormBox>
        <WriteFormGroup>
          <div>
            <Select
              options={[
                {
                  title: "공개",
                  value: "PUBLIC",
                },
                {
                  title: "비공개",
                  value: "PRIVATE",
                },
              ]}
            />
          </div>
          <div>
            <Button type="button" buttonTheme="white">
              미리보기
            </Button>
            <Button type="submit" onClick={handleSubmit}>
              작성
            </Button>
          </div>
        </WriteFormGroup>
        <EditArea>
          <Input
            name="title"
            placeholder="제목을 입력해주세요!"
            inputSize="large"
            noStyle
            onChange={setWriteDate}
          />
          <EditorWrapper>
            <Editor
              forwardedRef={editorRef}
              previewStyle="tab"
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
