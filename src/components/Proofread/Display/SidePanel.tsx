import type {SuggestionCard as SuggestionCardType} from "../../../types/SuggestionCard";
import SuggestionCard from "./SuggestionCard";

interface SidePanelProps {
    Array: SuggestionCardType[];
    CardAccept: (Start: number, End: number, ReplaceText: string, Index: number) => void;
    CardIgnore: (Index: number) => void;
    Text: string;
}

export default function SidePanel({Array, CardAccept, CardIgnore, Text}: SidePanelProps) {
    return (
        <div style={{border: "1px solid black", padding: "10px"}}>
            {Array.map((suggestion, index) => (
                <SuggestionCard
                    key={index}
                    Original={suggestion.Original}
                    Suggested={suggestion.Suggested}
                    Description={suggestion.Description}
                    Type={suggestion.Type}
                    Index={index}
                    AcceptSuggestion={CardAccept}
                    IgnoreSuggestion={CardIgnore}
                    Text={Text}
                />
            ))}
        </div>
    );
}