import React from 'react';

export default function renderInput({className, input,label,type,meta:{active, dirty, touched, error}}){
    return(
        <div>
            <input
                className={className}
                type={type}
                placeholder={label}
                {...input}
            />
            {touched && (error && <span>{error}</span>)}
        </div>
    )
}