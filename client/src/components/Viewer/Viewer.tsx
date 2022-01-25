import { Viewer as ToastViewer, ViewerProps } from "@toast-ui/react-editor";
import Prism from "prismjs";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";

interface IViewerProps extends ViewerProps {}

function Viewer(props: IViewerProps) {
  return (
    <ToastViewer
      {...props}
      plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
    />
  );
}

export default Viewer;
