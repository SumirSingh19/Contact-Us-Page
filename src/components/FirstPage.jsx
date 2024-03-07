import { useNavigate } from "react-router-dom";

const FirstPage = () => {

    const navigate = useNavigate();

    const handleNavigate = () => {
        
        navigate("/contact");
    };



    return (
        <div className="flex min-h-screen justify-center items-center text-violet-100  space-x-5 w-full">
        <div className='mt-2'>
        
        <button
        type="submit"
        className="ml-3 mt-2 px-8 py-2.5 font-medium bg-white focus:border-black focus:border-solid hover:border-2 hover:bg-gray-300 hover:text-gray-600 text-slate-500 rounded-lg text-sm"
        onClick={handleNavigate}
        >
            Contact Us
        </button>
      
      </div>

        </div>
    )
};

export default FirstPage;