import Background from '../assets/images/background.png';
import {Button, Form, BackgroundImage, TextField,} from "../components";
function ForgotPassword() {
  return (
    <BackgroundImage imageUrl={Background} className={'flex items-center justify-center'}>
        <Form heading={'Forgotten your password?'} 
        subHeading={'There is nothing to worry about, we\'ll send you a message to help you reset your password.'} 
        style={{ textAlign: 'center' }}  
        haveTF={false}      
        />
      </BackgroundImage>
  )
}

export default ForgotPassword;
