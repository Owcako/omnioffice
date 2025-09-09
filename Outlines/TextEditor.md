TextEditor
    Display
        TextEditor
            - Get state, api from Editor Context
            - Function taking start, end, replace text parameters
                - Use state and api from props to select range from start to end in Editor
                - Replace selection with replace text
            - Use imperative handle to expose text replacement function to received ref
            - Returns an MDEditor that automatically resizes its height (100% width) to fit the text value in it,
                value = value prop received from ProofreadLogic,
                onChange = set text value function prop received from ProofreadLogic
                hideToolbar = true

    App.tsx
        - Returns TextEditorLogic component