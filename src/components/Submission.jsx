import { Link } from "react-router-dom";

const Submission = () => {
    return (
        <div className="flex min-h-screen justify-center items-center text-violet-100  space-x-5 w-full">
            <div className="flex flex-col items-center rounded-lg p-10 border-solid border-2 max-w-screen-md max-h-min border-gray-200">
                <div className="font-bold text-4xl tracking-wide p-8">
                    <h1>Thank You for Contacting Us!</h1>
                </div>
                <div className="">
                    <p className="pt-2 text-violet-100 text-md pl-9 mt-10">
                        Your message has been successfully submitted. 
                        We appreciate your interest and will get back to you as soon as possible. 
                        If you have any urgent inquiries, please feel free to reach out to us directly. Thank you for choosing us!
                    </p>
                </div>
                <div>
                    <Link to="/contact">
                        <button type="submit" className=" ml-3 mt-2 px-8 py-2.5 font-medium bg-white focus:border-black focus:border-solid hover:border-2 hover:bg-gray-300 hover:text-gray-600 text-slate-500 rounded-lg text-sm">
                            Submit Another Response
                        </button>
                    </Link>
                </div>
            </div>
            
        </div>
    )
};

export default Submission;