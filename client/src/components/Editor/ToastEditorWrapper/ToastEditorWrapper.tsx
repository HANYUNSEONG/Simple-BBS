import { Editor, EditorProps } from "@toast-ui/react-editor";
import Prism from "prismjs";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";

import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "@toast-ui/editor/dist/toastui-editor.css";
import { LegacyRef } from "react";

interface IToastEditorWrapper extends EditorProps {
  forwardedRef: LegacyRef<Editor>;
}
function ToastEditorWrapper({ forwardedRef, ...props }: IToastEditorWrapper) {
  return (
    <Editor
      ref={forwardedRef}
      plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
      {...props}
    />
  );
}

export default ToastEditorWrapper;
