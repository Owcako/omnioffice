import {useState} from 'react';
import {Main as Textbox} from '../Display/Main';

/**
 * Main logic component for TextEditor.
 * @returns {JSX.Element} The rendered component.
 */
function Main()
{
    const [Value, SetValue] = useState('');
    return (
        <div style=
        {
            {
                width: '100%',
                height: '100%',
            }
        }>
            <Textbox
            Value={Value}
            HandleChange={SetValue}/>
        </div>
    );
}

export {Main}; 