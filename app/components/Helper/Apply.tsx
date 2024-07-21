"use client"
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
export default function Apply(){
    const applyHandler = () => toast("Application Successful !");
    return <div>
       <button onClick={applyHandler} className="px-10 rounded-lg py-3 bg-blue-600 text-white font-semibold transition-all duration-500 hover:bg-blue-500">
        Apply Now
       </button>
       <ToastContainer position='top-center'/>
    </div>
        
        
}