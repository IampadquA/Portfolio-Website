import FormData from 'form-data';
import Mailgun from 'mailgun.js';

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";

export default async function handler(req, res) {

    console.log('Data', req.body);
    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({username: 'api', key: API_KEY});

    const { firstName, lastName, company, email, message } = req.body;
    
    try{
        const emailRes = await mg.messages.create(DOMAIN, {
            from: "Contact-Form <mailgun@sandboxcc73306b78304d1a9e51b2b4bab57169.mailgun.org>",
            to: ["tefegulmez@gmail.com"],
            subject: "New Contact from Submission",
            text:`${req.body.firstName} ${req.body.lastName} from ${req.body.company} with email ${req.body.email} sent a message: ${req.body.message}` ,
        })

        console.log(emailRes);
    }catch(err){
        console.error('Error Sending Email', err);
    }
    
    

    res.status(200).json({ submitted: true });
  }