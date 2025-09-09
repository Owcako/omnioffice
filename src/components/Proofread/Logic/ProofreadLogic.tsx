import useProofread from "../../../hooks/useProofread";
import TextEditor from "../../TextEditor/Display/TextEditor";
import ProofreadButton from "../Display/ProofreadButton";
import SidePanel from "../Display/SidePanel";

export default function ProofreadLogic() {
    const {Text, Suggestions, UpdateText, SendForProofread, ReplaceText, DeleteSuggestion} = useProofread();

    const HandleProofreadClick = () => {
        SendForProofread(Text);
    };

    return (
        <div>
            <TextEditor Value={Text} TextChanged={UpdateText} />
            <ProofreadButton Clicked={HandleProofreadClick} />
            <SidePanel
                Array={Suggestions}
                CardAccept={ReplaceText}
                CardIgnore={DeleteSuggestion}
                Text={Text}
            />
        </div>
    );
}