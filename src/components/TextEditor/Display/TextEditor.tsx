import MDEditor from "@uiw/react-md-editor";
import type {TextEditorProps} from "../../../types/TextEditorProps";

export interface TextEditorRef {
    ReplaceText: (Start: number, End: number, ReplaceText: string) => void;
}

export default function TextEditor({Value, TextChanged}: TextEditorProps) {

    return (
        <MDEditor
            value={Value}
            onChange={TextChanged}
            hideToolbar={true}
            style={{width: "100%", height: "100%"}}
        />
    );
}
