import {useState} from "react";
import TextEditor from "../Display/Main";

export default function TextEditorLogic() {
    const [TextValue, SetTextValue] = useState<string>("");

    const HandleTextChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        SetTextValue(event.target.value);
    };

    return (
        <TextEditor
            Value={TextValue}
            OnChange={HandleTextChange}
        />
    );
}
