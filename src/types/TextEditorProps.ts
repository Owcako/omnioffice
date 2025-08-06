export interface TextEditorProps {
    Value: string;
    OnChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
