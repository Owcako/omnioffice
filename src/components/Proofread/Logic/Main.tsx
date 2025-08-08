import useProofread from "../../../hooks/useProofread";
import TextEditor from "../Display/Main";

export default function TextEditorLogic() {
    const {Text, UpdateText} = useProofread();

    const HandleTextChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        UpdateText(event.target.value);
    };

    return (
        <TextEditor
            Value={Text}
            TextChanged={HandleTextChange}
        />
    );
}
