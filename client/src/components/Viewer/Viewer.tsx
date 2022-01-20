import { Viewer as ToastViewer, ViewerProps } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

interface IViewerProps extends ViewerProps {}

function Viewer(props: IViewerProps) {
  return <ToastViewer {...props} />;
}

export default Viewer;
