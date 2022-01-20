import { writeBoard } from "@/apis/board";
import useInputs from "@/hooks/useInputs";
import { BoardStatus, BoardStatusKo, IBoardDefault } from "@/types/board";
import { FormEvent, forwardRef, useEffect, useRef } from "react";
import { useMutation } from "react-query";
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
import { BoardType } from "@/types/board";
import { useRouter } from "next/router";

function WriteForm() {
  const router = useRouter();
  const [writeData, setWriteData] = useInputs<{
    status: BoardType;
  }>({
    status: BoardStatus.PUBLIC,
  });
  const editorRef = useRef<any>(null);

  const writeSubmitMutation = useMutation((writeData: IBoardDefault) =>
    writeBoard(writeData)
  );
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const markdown = editorRef.current.getInstance().getMarkdown();
    if (markdown) {
      const payload = {
        ...writeData,
        description: markdown,
      } as IBoardDefault;

      writeSubmitMutation.mutateAsync(payload, {
        onSuccess(result) {
          if (result.data?.id) {
            const id = result.data?.id;
            router.push(`/post/${id}`);
          }
        },
        onError(error) {
          console.log(error);
        },
        onSettled(result, error) {
          console.log(`onSettled`);
        },
      });
    }
  };

  return (
    <WriteFormWrapper>
      <WriteFormBox>
        <WriteFormGroup>
          <div>
            <Select
              name="status"
              onChange={setWriteData}
              defaultValue={BoardStatus.PUBLIC}
              options={[
                {
                  title: BoardStatusKo.PUBLIC,
                  value: BoardStatus.PUBLIC,
                },
                {
                  title: BoardStatusKo.PRIVATE,
                  value: BoardStatus.PRIVATE,
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
            onChange={setWriteData}
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
