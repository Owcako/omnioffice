import useProofread from "../../../hooks/useProofread";
import TextEditor from "../Display/Main";
import ProofreadButton from "../Display/ProofreadButton";
import SidePanel from "../Display/SidePanel";

export default function ProofreadLogic() {
    const {Text, Suggestions, UpdateText, SendForProofread} = useProofread();

    const HandleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        UpdateText(event.target.value);
    };

    const HandleProofreadClick = () => {
        SendForProofread(Text);
    };

    return (
        <div>
            <TextEditor Value={Text} TextChanged={HandleTextChange} />
            <ProofreadButton Clicked={HandleProofreadClick} />
            <SidePanel Array={Suggestions} />
        </div>
    );
}