import React from 'react';

import './from-input.styles.scss';

const FormInput = ({ hanndleChange, label, ...otherProps}) =>(
    <div className='group'>
        <input className='form-input' onChange={hanndleChange} {...otherProps}/>
        {
            label ? 
            (
                <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>
            ) 
            : null
        } 
    </div>
);

export default FormInput;