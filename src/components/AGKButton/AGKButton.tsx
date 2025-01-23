import React from 'react';
import { AGKButtonType } from './AGKButton.types';


const AGKButton: React.FC<AGKButtonType> = (props) => {
    return (
        <div style={{ color: props.color }}>
            {props.name}
        </div>
    )
}

export default AGKButton;