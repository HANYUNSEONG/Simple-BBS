import { forwardRef, LegacyRef } from "react";
import dynamic from "next/dynamic";
import { EditorProps } from "@toast-ui/react-editor";

interface IEditorProps<T> extends EditorProps {
  forwardedRef: LegacyRef<T>;
}

const ToastEditor = dynamic(() => import("./ToastEditorWrapper"), {
  ssr: false,
});

const ToastEditorWithForwardedRef = forwardRef(
  ({ forwardedRef, ...props }: any) => (
    <ToastEditor {...props} forwardedRef={forwardedRef} />
  )
);

function Editor({ forwardedRef, ...props }: IEditorProps<any>) {
  return <ToastEditorWithForwardedRef forwardedRef={forwardedRef} {...props} />;
}

ToastEditorWithForwardedRef.displayName = "ToastEditorWithForwardedRef";

export default Editor;
