import React from 'react';
import * as Styled from './DefaultInput.styled';

interface InputProps {
    value: string|number;
    name: string;
    className?: string;
    placeholder?: string;
    type?: 'text'|'textarea'|'number';
    inputMode?:"text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal";
    label?: string;
    error?: string | null;
    onChange: OnInputChange | OnTextAreaChange;
}

type OnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => void;

type OnTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => void;

export const DefaultInput = (
    {value, name, className, placeholder, label, error, onChange, type='text', inputMode='text'}: InputProps) =>
    (
    <div className={className}>
        <Styled.Label htmlFor={name} label={label}>
            {label}
        </Styled.Label>
        <Styled.Wrapper>
            {type === 'textarea' ?
                <Styled.TextAreaField
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange as OnTextAreaChange}/> :
                <Styled.InputField
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange as OnInputChange}
                    type={type}
                    inputMode={inputMode}/>}
            <Styled.Placeholder value={value} placeholder={placeholder} type={type}>
                {placeholder}
            </Styled.Placeholder>
        </Styled.Wrapper>
        <Styled.ErrorComponent error={error}>{error}</Styled.ErrorComponent>
    </div>
);
