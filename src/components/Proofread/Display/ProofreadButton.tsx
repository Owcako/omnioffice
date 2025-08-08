export default function ProofreadButton({Clicked}: {Clicked: () => void}) {
    return (
        <button onClick={Clicked}>
            Proofread
        </button>
    );
}