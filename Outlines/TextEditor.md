TextEditor
    Logic
        TextEditorLogic
            - A state holding the text value in the text area
            - Returns TextEditor component and passes the text value state as a prop

    Display
        TextEditor
            - Returns an HTML text area element that automatically resizes its height (100% width) to fit the text value in it,
                value = value prop received from TextEditorLogic,
                onChange = set text value function prop received from TextEditorLogic

    App.tsx
        - Returns TextEditorLogic component