import TextEditorLogic from "./components/Proofread/Logic/Main";
import "./App.css";
import ProofreadLogic from "./components/Proofread/Logic/ProofreadLogic";

function App() {
    return (
        <>
            <h1>OmniOffice - Proofreading Tool</h1>
            <TextEditorLogic />
            <ProofreadLogic />
        </>
    );
}

export default App;
