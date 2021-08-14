import { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import CustomInput from '../components/CustomInput';
import { useForm } from '../hooks/FormHandler';
import Layout from '../components/layout';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Register() {
    const initialValues = {
        fullname: '',
        username: '',
        password: '',
        confirm_password: '',
        checkbox: false,
        country: 'Argentina',
        custom_country: '',
        email: '',

      }
    const [ formState, inputHandler, reset ] = useForm(initialValues)
    const [otherCountry, setOtherCountry] = useState(false);
    const selectHandler = (e) => {
        inputHandler(e.target.value, 'country')
    }
    useEffect(() => {
        if(formState.country === "Argentina") {
            setOtherCountry(false);
        }
        else if(formState.country === 'Other'){
            setOtherCountry(true);
        }
    }, [formState.country])
    const submitHandler = async () => {
        console.log(formState);
        try{
            const response = await fetch('http://localhost:3000/register', {
            method: 'POST',
            body: JSON.stringify({inputs: formState})
        })
        console.log(response)
        }catch(e){
            console.log(e.message)
        }
        
        reset(initialValues);
    };
    return (
        <Layout>
            <main> 
                <section><h1>Welcome</h1></section>
                <section>
                    <Form>
                        <CustomInput 
                            id='fullname' 
                            type='text' 
                            name='fullname' 
                            tag='Your full name' 
                            onInput={inputHandler} 
                            value={formState.fullname} 
                        />
                        <CustomInput 
                            id='email' 
                            type='email' 
                            name='email' 
                            tag='Email' 
                            onInput={inputHandler} 
                            value={formState.email} 
                        />
                        <CustomInput 
                            id='username' 
                            type='text' 
                            name='username' 
                            tag='Username' 
                            onInput={inputHandler} 
                            value={formState.username} 
                        />
                        <CustomInput 
                            id='password' 
                            type='password' 
                            name='password' 
                            tag='Password' 
                            onInput={inputHandler} 
                            value={formState.password} 
                        />
                        <CustomInput 
                            id='confirm_password' 
                            type='password' 
                            name='confirm_password' 
                            tag='Confirm your password' 
                            onInput={inputHandler} 
                            value={formState.confirm_password} 
                        />
                        <FormGroup>
                            <Label for="country">Where are you living?</Label>
                            <Input type="select" name="country" id="country"  onChange={selectHandler} value={formState.country}>
                            <option defaultValue value="Argentina">Argentina</option>
                            <option value='Other'>Other</option>
                            </Input>
                        </FormGroup>
                        {otherCountry && <FormGroup>
                            <Label for="custom_country">Specify which country</Label>
                            <Input 
                                type="text" 
                                name="custom_country" 
                                id="custom_country" 
                                onChange={(e) => inputHandler(e.target.value, 'custom_country')} 
                                value={formState.custom_country} 
                            />
                        </FormGroup>}
                        <CustomInput id='checkbox'onInput={inputHandler} value={formState.checkbox} />
                        <Button onClick={submitHandler}>Register</Button>
                    </Form>
                    <Link href="https://digiventures.la/">
                        <a>¿Any problem? Contact us</a>
                    </Link>
                </section>
        </main>
        </Layout>
    );
  }
  