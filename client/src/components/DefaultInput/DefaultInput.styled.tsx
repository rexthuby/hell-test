import styled from 'styled-components';

export const InputField = styled.input.attrs(props => ({
    name: props.name,
    value: props.value,
    onChange: props.onChange,
    type: props.type,
    inputMode:props.inputMode
}))`
  width: 100%;
  border: 1px solid #d3d3d3;
  padding: 4px;
  border-radius: 5px;
`

export const TextAreaField = styled.textarea.attrs((props) => ({
    name: props.name,
    value: props.value,
    onChange: props.onChange
}))`
  width: 100%;
  resize: none;
  height: 100px;
`

export const Label = styled.label.attrs((props) => ({
    htmlFor: props.htmlFor
}))<{ label: string | undefined }>`
  display: ${({label}) => (label ? 'block' : 'none')};
`

export const Wrapper = styled.div`
  position: relative;
`

export const Placeholder = styled.div<{ value: string | number; type?: string }>`
  position: absolute;
  top: ${({type}) => (type === 'textarea' ? '15px' : '50%')};
  left: 3px;
  transform: ${({type}) => (type === '' ? 'translateY(0)' : 'translateY(-50%)')};
  display: ${({value, placeholder}) => (!value || !placeholder ? 'block' : 'none')};
  color: #d3d3d3;
  pointer-events: none;
`

export const ErrorComponent = styled.div<{ error: string | null | undefined }>`
  color: #ff0000;
  display: ${({error}) => (error ? 'block' : 'none')};
`
