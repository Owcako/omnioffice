import {useState, useRef} from "react";
import type {SuggestionCard} from "../types/SuggestionCard";
import type {TextEditorRef} from "../components/TextEditor/Display/TextEditor";

export default function useProofread() {
    const [Text, SetText] = useState<string>("");
    const [Suggestions, SetSuggestions] = useState<SuggestionCard[]>([]);
    const EditorRef = useRef<TextEditorRef>(null);

    const UpdateText = (value?: string) => {
        SetText(value || "");
    };

    const SendForProofread = async (TextValue: string) => {
        try {
            const response = await fetch(
                "http://localhost:5000/api/proofread",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({text: TextValue})
                }
            );
            const data = await response.json();

            if (response.ok) {
                // Parse the JSON response and convert to SuggestionCard format
                if (data.suggestions && Array.isArray(data.suggestions)) {
                    SetSuggestions(data.suggestions);
                } else {
                    console.log("AI Response:", data.response);
                    SetSuggestions([]);
                }
            } else {
                console.error("Error from API:", data.error);
                SetSuggestions([]);
            }
        } catch (error) {
            console.error("Error calling proofread API:", error);
            SetSuggestions([]);
        }
    };

    const ReplaceText = (
        Start: number,
        End: number,
        ReplaceText: string,
        Index: number
    ) => {
        const currentValue = Text || "";
        const beforeText = currentValue.substring(0, Start);
        const afterText = currentValue.substring(End);
        const newValue = beforeText + ReplaceText + afterText;

        SetText(newValue);
        DeleteSuggestion(Index);
    };

    const DeleteSuggestion = (Index: number) => {
        SetSuggestions(prev => prev.filter((_, i) => i !== Index));
    };

    return {
        Text,
        Suggestions,
        EditorRef,
        UpdateText,
        SendForProofread,
        ReplaceText,
        DeleteSuggestion
    };
}
