import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function CustomInput ({type, name, id, tag, onInput, value}) {
    const changeHandler = (e) => {
        onInput(e.target.value, id)
    }
    const checkboxHandler = (e) => {
        onInput(e.target.checked, id)
    }
    if(type === 'text'){
        return (
        <FormGroup>
            <Label for={id}>{tag}</Label>
            <Input type="text" name={name} id={id}  onChange={changeHandler} value={value} />
      </FormGroup>
      )
    }else if(type === 'password'){
        return (<FormGroup>
            <Label for={id}>{tag}</Label>
            <Input type="password" name={name} id={id} onChange={changeHandler} value={value} />
      </FormGroup>)
    }
    else if(type === 'email'){
        return (<FormGroup>
            <Label for={id}>{tag}</Label>
            <Input type="email" name={name} id={id} onChange={changeHandler} value={value} />
      </FormGroup>)
    }
    return (
        <FormGroup check className="login__label">
            <Label check for={id}>
            <Input type="checkbox" id={id} onChange={checkboxHandler} checked={value}/>{' '}
            Remember me
            </Label>
        </FormGroup>
    )
}