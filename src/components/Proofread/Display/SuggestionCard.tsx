import type {SuggestionCard} from "../../../types/SuggestionCard";

export default function SuggestionCard({Original, Suggested, Description, Type}: SuggestionCard) {
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
        </div>
    );
}