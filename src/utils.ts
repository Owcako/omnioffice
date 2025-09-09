export function GetTextPositions(SearchText: string, FullText: string): [number, number] {
    const StartIndex = FullText.indexOf(SearchText);
    if (StartIndex === -1) {
        return [0, 0];
    }
    const EndIndex = StartIndex + SearchText.length;
    return [StartIndex, EndIndex];
}