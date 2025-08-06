import type {TextEditorProps} from "../../../types/TextEditorProps";

export default function TextEditor({Value, OnChange}: TextEditorProps) {
    return (
        <textarea
            value={Value}
            onChange={OnChange}
            style={{
                width: "100%",
                resize: "vertical",
                minHeight: "200px"
            }}
        />
    );
}
