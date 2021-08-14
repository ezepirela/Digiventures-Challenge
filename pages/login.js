import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import CustomInput from '../components/CustomInput';
import Layout from '../components/layout';
import { useForm } from '../hooks/FormHandler';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
const initialValues = {
  username: '',
  password: '',
  checkbox: false
}
export default function Login() {
  const [formState, inputHandler, reset] = useForm(initialValues);
  const submit = async () => {
    console.log(formState)
    try{
      const response = await fetch('http://localhost:4000/test', {
            method: 'POST',
            body: JSON.stringify({inputs: formState}),
            headers: {'Content-Type': 'application/json'}
        })
      console.log(response)
    }
    catch(e){
      console.log(e.message);
    }
    reset(initialValues)
  }
  return (
    <Layout>
      <main className='login'>
        <section><h1 className='login__title'>Welcome Back</h1></section>
        <section>
          <Form >
            <CustomInput type='text' id='username' name='username' tag='Username' onInput={inputHandler} value={formState.username}/>
            <CustomInput type='password' id='password' name='password' tag='Password' onInput={inputHandler} value={formState.password} />
            <CustomInput id='checkbox' onInput={inputHandler} value={formState.checkbox}/>
            <Button onClick={submit}>Login</Button>
          </Form>
          <Link href="https://digiventures.la/">
            <a>¿Any problem? Contact us</a>
          </Link>
        </section>
      </main>
    </Layout>
  );
}
