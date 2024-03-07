import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";


const Contact = () => {
  return (
    <div className="flex min-h-screen justify-center items-center text-violet-100  space-x-5 w-full">
      <div className="flex flex-col items-center rounded-lg p-10 border-solid border-2 max-w-screen-md max-h-min border-gray-200">
        <div>
          <h1 className="font-bold text-4xl tracking-wide p-8">CONTACT US</h1>
        </div>
        <div className="flex-1">
          <p className="pt-2 text-violet-100 text-md pl-9 mt-10">
            We would love to hear from you! Whether you have questions about our products, need assistance, or just want to say hello, our team is ready to help. Feel free to reach out using the contact form below, and we will get back to you as soon as possible.
          </p>
          <div className="text-lg p-10 space-x-3">
            <Link to="https://www.linkedin.com/in/sumir-singh-b5a608254" className="hover:cursor-pointer"><ion-icon name="logo-linkedin"></ion-icon></Link>
            <Link to="https://twitter.com/sumirsingh7" className="hover:cursor-pointer"><ion-icon name="logo-twitter"></ion-icon></Link>
          </div>
        </div>
      </div>
      <div className="pl-6">
        < ContactForm />
      </div>
    </div>
  );
};

export default Contact;
