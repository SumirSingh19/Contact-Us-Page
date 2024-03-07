import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {

  const navigate = useNavigate();

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  
  const [phone, setPhone] = useState('');
  
  const [message, setMessage] = useState('');


  //submit event
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !message) {
      alert('Please fill out all required fields');
      return;
    }
    
    const data = {
      Name: name,
      Email: email,
      Phone: phone,
      Message: message,
    }

    axios.post("https://sheet.best/api/sheets/2b311bfd-4b03-4adc-a55a-e5e96bd2d3a8", data).then((response) => {console.log(response)});

    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    navigate("/submission");
  };

  return (
    <div className="bg-violet-100 rounded-xl p-6 min-w-min pr-8">
      
      <form action="" className="flex flex-col" onSubmit={handleSubmit}>

        <div id='div-name' className="p-2">
          <label htmlFor="name" className="text-sm text-gray-800 m-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your Name"
            className="text-gray-600 w-full px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-gray-500"
            onChange={(e) => setName(e.target.value)} value={name}
            required
          />
        </div>

        <div id='div-email' className="w-full">
            <div className="m-2">
              <label htmlFor="email" className="text-sm text-gray-800">
                Email
              </label>
              <input
                type="text"
                id="email"
                placeholder="Enter your Email"
                className="text-gray-600 w-full px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-gray-500 placeholder-top"
                onChange={(e) => setEmail(e.target.value)} value={email}
                required
              />
            </div>
        </div>

        <div id='div-phone' className="p-2">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm text-gray-800">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              placeholder="Enter your Phone Number"
              className="text-gray-600 w-full px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-gray-500"
              onChange={(e) => setPhone(e.target.value)} value={phone}
              required
            />
          </div>
        </div>

        <div id='div-message' className="p-2">
          <div className="">
            <label htmlFor="message" className="text-sm text-gray-800">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your Message...."
              className="text-gray-600 w-full px-4 py-2 rounded-md outline-none focus:ring-2 focus:ring-gray-500 min-h-32"
              onChange={(e) => setMessage(e.target.value)} value={message}
              required
            ></textarea>
          </div>
        </div>

        <div className='mt-2'>
        
          <button type="submit" className=" ml-3 mt-2 px-8 py-2.5 font-medium bg-white focus:border-black focus:border-solid hover:border-2 hover:bg-gray-300 hover:text-gray-600 text-slate-500 rounded-lg text-sm">
            Submit
          </button>
        
        </div>

      </form>
    </div>
  );
};

export default ContactForm;
