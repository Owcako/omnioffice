/**
 * Main display component for TextEditor.
 * @returns {JSX.Element} The rendered component.
 */
function Main(Props: {Value: string, HandleChange: (Value: string) => void})
{
    return (
        <div style=
        {
            {
                width: '100%',
                height: '100%',
            }
        }>
            <textarea
            value={Props.Value}
            onChange={(e) => Props.HandleChange(e.target.value)}
            style=
            {
                {
                    width: '100%',
                    height: '100%',
                }
            }/>
        </div>
    );
}

export {Main}; 