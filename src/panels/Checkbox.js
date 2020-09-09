import React from 'react';

import './Checkbox.css';
import Check from '../img/check-symbol.svg';


const Checkbox = ({checked, onToggle}) => {
    return (
        <div className="Checkbox">

            <input
                type="checkbox"
                checked={checked}
                onChange={onToggle}
            />
            <img
                alt="custom checkbox logo"
                src={Check}
            />
        </div>
    );
};

Checkbox.defaultProps = {
    checked: false,
    onToggle: () => {
    },
};

export default Checkbox;
