import React from "react";
import useProofread from "../../../hooks/useProofread";

interface ProofreadLogicProps {
    Render: (params: {
        Suggestions: ReturnType<typeof useProofread>["Suggestions"];
        SendForProofread: ReturnType<typeof useProofread>["SendForProofread"];
        Text: ReturnType<typeof useProofread>["Text"];
    }) => React.JSX.Element;
}

export default function ProofreadLogic({Render}: ProofreadLogicProps) {
    const {SendForProofread, Text, Suggestions} = useProofread();

    return Render({Suggestions, SendForProofread, Text});
}