import { ForwardedRef, forwardRef } from "react";
import dynamic from "next/dynamic";
import { EditorProps } from "@toast-ui/react-editor";

interface IEditorProps extends EditorProps {
  forwardedRef: ForwardedRef<any>;
}

const ToastEditor = dynamic(() => import("./ToastEditorWrapper"), {
  ssr: false,
});

const ToastEditorWithForwardedRef = forwardRef(
  ({ forwardedRef, ...props }: any, ref) => (
    <ToastEditor {...props} forwardedRef={forwardedRef} />
  )
);

function Editor({ forwardedRef, ...props }: IEditorProps) {
  return <ToastEditorWithForwardedRef forwardedRef={forwardedRef} {...props} />;
}

ToastEditorWithForwardedRef.displayName = "ToastEditorWithForwardedRef";

export default Editor;
