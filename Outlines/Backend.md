Backend
    main.py (Flask)
        - Register Flask blueprints and set up server

    api/
        Grammar.py (rename via command line)
            - Use example code to send a request (already provided)
            - For now, set the prompt to the received text value. Actual prompt will be added later.
            - A function to remove the triple backticks and the language annotation around code blocks. For now, assume the AI **returns a single code block in its answer, so don't scan for them, just process the first set**.
            - Before printing (change to return) the response, process it to remove the triple backticks.

    useProofread (frontend)
        - Remove the mock suggestions and uncomment the fetch operation. Send the text value as the request body.
        - Assume the AI returns an array of suggestion cards with the correct format. Assign the returned array to the suggestions array.