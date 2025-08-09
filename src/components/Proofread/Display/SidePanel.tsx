import type {SuggestionCard as SuggestionCardType} from "../../../types/SuggestionCard";
import SuggestionCard from "./SuggestionCard";

interface SidePanelProps {
    Array: SuggestionCardType[];
}

export default function SidePanel({Array}: SidePanelProps) {
    return (
        <div style={{border: "1px solid black", padding: "10px"}}>
            {Array.map((suggestion, index) => (
                <SuggestionCard
                    key={index}
                    Original={suggestion.Original}
                    Suggested={suggestion.Suggested}
                    Description={suggestion.Description}
                    Type={suggestion.Type}
                />
            ))}
        </div>
    );
}