import { Editor, EditorProps } from "@toast-ui/react-editor";
import Prism from "prismjs";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";

import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { ForwardedRef } from "react";
import { useMutation } from "react-query";
import { postFile } from "@/apis/file";

interface IToastEditorWrapper extends EditorProps {
  forwardedRef: ForwardedRef<any>;
}
function ToastEditorWrapper({ forwardedRef, ...props }: IToastEditorWrapper) {
  const postFileMutation = useMutation((file: File) => postFile(file));

  return (
    <Editor
      ref={forwardedRef}
      plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      hooks={{
        addImageBlobHook: (file, callback) => {
          postFileMutation.mutateAsync(file as File, {
            onSuccess(result) {
              const response = result.data;
              if (response) {
                const { path, originalFileName } = response;
                callback(
                  process.env.NEXT_PUBLIC_API_URL + path,
                  originalFileName
                );
              }
            },
          });
        },
      }}
      {...props}
    />
  );
}

export default ToastEditorWrapper;
