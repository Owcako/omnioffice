import {useState, type ChangeEvent} from "react";
import type {SuggestionCard} from "../types/SuggestionCard";
import type {ContextStore} from "@uiw/react-md-editor";

export default function useProofread() {
    const [Text, SetText] = useState<string>("");
    const [Suggestions, SetSuggestions] = useState<SuggestionCard[]>([]);

    const UpdateText = (
        value?: string,
        _event?: ChangeEvent<HTMLTextAreaElement>,
        _state?: ContextStore
    ) => {
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

    return {
        Text,
        Suggestions,
        UpdateText,
        SendForProofread
    };
}
