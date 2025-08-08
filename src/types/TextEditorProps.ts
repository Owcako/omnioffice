export interface TextEditorProps {
    Value: string;
    TextChanged: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
