import type {TextEditorProps} from "../../../types/TextEditorProps";

export default function TextEditor({Value, TextChanged}: TextEditorProps) {
    return (
        <textarea
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
