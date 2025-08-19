import type {ChangeEvent} from "react";
import type {ContextStore} from "@uiw/react-md-editor/nohighlight";

export interface TextEditorProps {
    Value: string;
    TextChanged: (
        value?: string,
        event?: ChangeEvent<HTMLTextAreaElement>,
        state?: ContextStore
    ) => void;
}
