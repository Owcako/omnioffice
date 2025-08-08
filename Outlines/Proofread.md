Proofread
    Hooks
        useProofread
            - A state to store the current text value
            - A state to store an array of suggestion cards, default is empty array (reserve for later, but create it)
            - A function that takes in a text parameter
                - Calls the set text function of the text value to update the state with the text parameter.
            - A function that takes in the text value state as parameter
                - For now, just log a message in the console saying the text has been sent
                // Sends the value to `https://localhost:5000/api/proofread` (later)
                // Assigns the returned array of objects from the URL to the array state

    Logic
        TextEditorLogic
            - Get the text value and set text wrapper function from useProofread
                - Renders TextEditor component
                    - Value = text value
                    - TextChanged = set text function

        ProofreadLogic
            - Get array of objects and logging function from useProofread
            - Renders ProofreadButton
                Clicked = logging function

    Display
        ProofreadButton
            - Returns a button
                - Text = Proofread

        App.tsx
            - Renders ProofreadLogic under TextEditorLogic