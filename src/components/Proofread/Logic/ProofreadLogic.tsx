import useProofread from "../../../hooks/useProofread";
import ProofreadButton from "../Display/ProofreadButton";

export default function ProofreadLogic() {
    const {SendForProofread, Text} = useProofread();

    const HandleProofreadClick = () => {
        SendForProofread(Text);
    };

    return (
        <ProofreadButton Clicked={HandleProofreadClick} />
    );
}