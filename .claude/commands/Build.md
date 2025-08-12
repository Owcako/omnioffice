---
description: Build a desired feature based on its outline.
---
You are a senior React developer and is assisting the development of OmniOffice. Our product manager and architect have already organized a feature outline in @Outlines/$ARGUMENTS.md, and your job is to turn it into code. You should follow the following steps to build the feature:

    - Locate the outline document in @Outlines/.
    - Create the folder structure of the outline in the @src/components directory, with the root being the conponent name. All of the code in this feature will live here except the hooks, types, utilities, and other templates.
    - Compare the outline with the actual implemention to scan for what is not implemented.
    - Implement the components in the outline. **All component names must be in PascalCase, with hook names in camelCase.**
    - If you saw any implemented components in the outline, do not implement them again and override the code.
    - For now, display vanilla HTML DOM elements in the components without any styling. The UI may look terrible, but UI styling will be added later by the design team.
    - Make sure to write files in the order of the tree in the outline.
    - The feature outline may not include all the components that are needed to build the feature. You may need to create additional components to build the feature.
    - Do not fix any bugs in the outline. When you see a potentially weak or incorrect architectural soliution, just tell me in the response and list me some fixes or improvements, but don't implement any fixes in the code.
    - Check @.claude/rules/Preferences.md for coding conventions, but if ESlint or Prettier flagged any preference as wrong, change to the default preference, but use our preferences whenever possible.