Proofread
    Hooks
        useProofread
            - A state to store the current text value
            - A state to store an array of suggestion cards, default is empty array (reserve for later, but create it)
            - A function that takes in a text parameter
                - Calls the set text function of the text value to update the state with the text parameter.
            - A function that takes in the text value state as parameter
                - Sends the text value to `https://localhost:5000/api/proofread` (backend later)
                - Assigns the returned array of objects from the URL to the array state

    Types
        SuggestionCard
            - Original: string
            - Suggested: string
            - Description: string
            - Type: string

    Logic
        ProofreadLogic
            - Get everything from useProofread
            - Returns a div
                - TextEditor component on the left
                    Value = text value
                    TextChanged = set text function
                - ProofreadButton under it
                    Clicked = proofreading function
            - Returns SidePanel (note the indentation)
                Array = array of objects

    Display
        ProofreadButton
            - Returns a button
                - text = Proofread
                - onClick = Clicked

        SidePanel
            - Returns a div with border
                - Map over the array of objects from props. For each object, return a SuggestionCard,
                    Props = object entries. Prop name is entry's key

        SuggestionCard
            - For now, use vanilla HTML elements
            - Returns a div with border
                - A body text in the upper-left corner displaying the error type from props
                - A heading (whatever level) in the center that displays `Original sentence -> Suggested sentence` (values from props)
                - A body under the heading displaying the error description from props

        App.tsx (rename to Window via command line)
            - Renders ProofreadLogic