// Imports
import emailjs from "@emailjs/browser";

// rename .env.example to .env.local and get all variables from emailJS
const SERVICE_ID = String(process.env.NEXT_PUBLIC_YOUR_SERVICE_ID);
const TEMPLATE_ID = String(process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID);
const PUBLIC_KEY = String(process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY);

interface HandleSubmitMailProps {
  name: string;
  email: string;
  message: string;
  [key: string]: string;
}

// call handleSubmitMail in form submission and pass needed props
// handleSubmitMail return 1 if successful and 0 if submission fails
const handleSubmitMail = async (
  data: HandleSubmitMailProps
): Promise<0 | 1> => {
  const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);

  if (res.status === 200) {
    return 1;
  }

  // eslint-disable-next-line no-console
  console.log(res);
  return 0;
};

export default handleSubmitMail;
