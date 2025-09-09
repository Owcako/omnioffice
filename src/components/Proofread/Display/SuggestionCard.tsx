import type {SuggestionCard} from "../../../types/SuggestionCard";
import {GetTextPositions} from "../../../utils";

interface SuggestionCardProps extends SuggestionCard {
    Index: number;
    AcceptSuggestion: (Start: number, End: number, ReplaceText: string, Index: number) => void;
    IgnoreSuggestion: (Index: number) => void;
    Text: string;
}

export default function SuggestionCard({
    Original,
    Suggested,
    Description,
    Type,
    Index,
    AcceptSuggestion,
    IgnoreSuggestion,
    Text
}: SuggestionCardProps) {
    const HandleAccept = () => {
        const [Start, End] = GetTextPositions(Original, Text);
        AcceptSuggestion(Start, End, Suggested, Index);
    };

    const HandleIgnore = () => {
        IgnoreSuggestion(Index);
    };

    return (
        <div style={{border: "1px solid black", padding: "10px", margin: "5px"}}>
            <div style={{position: "relative"}}>
                <span style={{position: "absolute", top: "0", left: "0", fontSize: "small"}}>
                    {Type}
                </span>
            </div>
            <div style={{textAlign: "center", marginTop: "15px"}}>
                <h3>{Original} → {Suggested}</h3>
            </div>
            <div style={{marginTop: "10px"}}>
                <p>{Description}</p>
            </div>
            <div style={{display: "flex", gap: "10px", marginTop: "10px"}}>
                <button
                    onClick={HandleAccept}
                    style={{
                        backgroundColor: "blue",
                        color: "white",
                        padding: "5px 10px",
                        border: "none",
                        cursor: "pointer"
                    }}
                >
                    Accept
                </button>
                <button
                    onClick={HandleIgnore}
                    style={{
                        backgroundColor: "gray",
                        color: "white",
                        padding: "5px 10px",
                        border: "none",
                        cursor: "pointer"
                    }}
                >
                    Deny
                </button>
            </div>
        </div>
    );
}