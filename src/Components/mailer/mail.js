import emailjs from '@emailjs/browser';

emailjs.init("nsIPDphWPHf1B2KaP")
let NewAccountMail=(props)=>{
emailjs.send('service_vm00no9', 'template_khsc83l',props.new, 'nsIPDphWPHf1B2KaP')
.then((result) => {
    console.log(result.text);
}, (error) => {
    console.log(error.text);
});}
let se="hi"
export default {NewAccountMail}