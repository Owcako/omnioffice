import type { TextEditorProps } from "../../../types/TextEditorProps";
import MDEditor from "@uiw/react-md-editor";

export default function TextEditor({Value, TextChanged}: TextEditorProps) {
    return (
        <MDEditor
            value={Value}
            onChange={TextChanged}
            style={{
                width: "100%",
                resize: "vertical",
                minHeight: "200px"
            }}
        />
    );
}
