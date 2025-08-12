import {useState} from "react";
import type {SuggestionCard} from "../types/SuggestionCard";

export default function useProofread() {
    const [Text, SetText] = useState<string>("");
    const [Suggestions, SetSuggestions] = useState<SuggestionCard[]>([]);

    const UpdateText = (TextValue: string) => {
        SetText(TextValue);
    };

    const SendForProofread = async (TextValue: string) => {
        try {
            // const response = await fetch("https://localhost:5000/api/proofread", {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            //     body: JSON.stringify({ text: TextValue }),
            // });
            // const data: SuggestionCard[] = await response.json();
            
            // Mock suggestions for testing
            console.log("Proofreading text:", TextValue);
            const mockSuggestions: SuggestionCard[] = [
                {
                    Original: "teh",
                    Suggested: "the",
                    Description: "Spelling error - 'teh' should be 'the'",
                    Type: "spelling"
                },
                {
                    Original: "recieve",
                    Suggested: "receive",
                    Description: "Common spelling mistake - 'i' before 'e' except after 'c'",
                    Type: "spelling"
                },
                {
                    Original: "Your welcome",
                    Suggested: "You're welcome",
                    Description: "Grammar error - should use contraction 'you're' (you are)",
                    Type: "grammar"
                },
                {
                    Original: "its a good day",
                    Suggested: "it's a good day",
                    Description: "Missing apostrophe - 'its' should be 'it's' (it is)",
                    Type: "punctuation"
                },
                {
                    Original: "alot",
                    Suggested: "a lot",
                    Description: "Spacing error - 'alot' should be written as two words 'a lot'",
                    Type: "spelling"
                }
            ];
            
            SetSuggestions(mockSuggestions);
        } catch (error) {
            console.error("Error calling proofread API:", error);
            // For now, set empty array on error
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