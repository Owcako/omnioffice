import {useState} from "react";

export default function useProofread() {
    const [Text, SetText] = useState<string>("");
    const [Suggestions] = useState<object[]>([]);

    const UpdateText = (TextValue: string) => {
        SetText(TextValue);
    };

    const SendForProofread = (TextValue: string) => {
        console.log("Text has been sent for proofreading:", TextValue);
        // TODO: Send to https://localhost:5000/api/proofread
        // TODO: Assign returned array to Suggestions state
    };

    return {
        Text,
        Suggestions,
        UpdateText,
        SendForProofread
    };
}