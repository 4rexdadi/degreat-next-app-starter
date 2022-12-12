import emailjs from "@emailjs/browser";

const SERVICE_ID = String(process.env.NEXT_PUBLIC_YOUR_SERVICE_ID);
const TEMPLATE_ID = String(process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID);
const PUBLIC_KEY = String(process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY);

type handleSubmitMailProps = {
	name: string;
	email: string;
	message: string;
};

const handleSubmitMail = async (
	data: handleSubmitMailProps
): Promise<0 | 1> => {
	const res = await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);

	if (res.status === 200) {
		return 1;
	} else {
		console.log(res);
		return 0;
	}
};

export default handleSubmitMail;
