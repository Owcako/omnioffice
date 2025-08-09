import TextEditorLogic from "./Logic/Main";
import ProofreadLogic from "./Logic/ProofreadLogic";
import ProofreadButton from "./Display/ProofreadButton";
import SidePanel from "./Display/SidePanel";

export default function Window() {
    return (
        <div style={{display: "flex", height: "100vh"}}>
            {/* Left side with text editor and proofread button */}
            <div style={{flex: "1", padding: "10px"}}>
                <TextEditorLogic />
                <div style={{marginTop: "10px"}}>
                    <ProofreadLogic 
                        Render={({SendForProofread, Text}) => (
                            <ProofreadButton 
                                Clicked={() => SendForProofread(Text)} 
                            />
                        )}
                    />
                </div>
            </div>
            
            {/* Right side with suggestions panel */}
            <div style={{flex: "1", padding: "10px"}}>
                <ProofreadLogic 
                    Render={({Suggestions}) => (
                        <SidePanel Array={Suggestions} />
                    )}
                />
            </div>
        </div>
    );
}