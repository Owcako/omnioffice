Proofread
    Hooks
        useProofread
            - State storing current text value
            - State storing suggestion cards array (default empty)
            - Ref storing function to replace text
            - Function taking text value state parameter
                - Sends text value to `http://localhost:5000/api/proofread`
                - Assigns returned object array from URL to array state
            - Function taking index number
                - Deletes corresponding object in suggestions array

    Types
        SuggestionCard
            - Original: string
            - Suggested: string
            - Description: string
            - Type: string

    Utils.ts
        - Function taking 2 text parameters
            - Gets index of first parameter in second parameter
            - Returns 2 numbers: index and index + first parameter length (last character index)

    Logic
        ProofreadLogic
            - Gets everything from useProofread
            - Returns div
                - TextEditor component on left,
                    Value = text value
                    TextChanged = set text function
                    ref = ref to store function
                - ProofreadButton under it,
                    Clicked = proofreading function
            - Returns SidePanel (note indentation),
                Array = object array
                CardAccept = execute last command
                CardIgnore = delete item in array
                Text = editor text value state
                ref = function ref

    Display
        ProofreadButton
            - Returns button
                - text = Proofread
                - onClick = Clicked

        SidePanel
            - Returns div with border
                - Maps over object array from props. Each object returns SuggestionCard
                    Props = object entries. Prop name is entry key
                    Index = object index in array
                    AcceptSuggestion = execute command
                    IgnoreSuggestion = array delete
                    Text = text state
                    ref = function ref

        SuggestionCard
            - Uses vanilla HTML elements
            - Returns div with border
                - Body text in upper-left corner displaying error type from props
                - Heading in center displaying `Original sentence -> Suggested sentence` (values from props)
                - Body under heading displaying error description from props
                - Horizontal div under body
                    - Button displaying "Accept" (blue)
                        onClick = () =
                            - Variables storing start/end positions, value = imported util: pass text state and original sentence
                            - Call text replacement function from received ref, parameters: Start (variable), End (variable), Replace text (suggested sentence)
                    - Button displaying "Deny" (gray)
                        onClick = function ignoring error from props
                            - Index = array index

        App.tsx
            - Renders ProofreadLogic