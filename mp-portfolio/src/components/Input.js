import React, { useState } from 'react'
import { motion } from 'framer-motion'

export const Input = ({ InputName, PlaceHolder, Type, className }) => {
    const [inputValue, setInputValue] = useState("");
    const [validate, setValidate] = useState(true);
    const [canishowit, setCanIShowIt] = useState(false);

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameRegex = /^[A-ZÇĞIİÖŞÜa-zçğıöşü]{2,}$/;
    const companyRegex = /^[A-ZÇĞİÖŞÜa-zçğıöşü0-9\s&-]{3,100}$/;

    const handleChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        switch (Type) {
            case "email":
                setValidate(emailRegex.test(value));
                break;
            case "name":
                setValidate(nameRegex.test(value));
                break;
            case "company":
                setValidate(companyRegex.test(value));
                break;
            default:
                setValidate(value.trim() !== "");
        }
    };

    const handleSubmit = () => {
        validate ? setCanIShowIt(true) : setCanIShowIt(false);
    };

    return (
        <div className={`relative flex flex-col ${className}`}>
            <label className='w-full font-urbanist font-bold text-xl sm:text-2xl leading-[24px]'>
                {InputName}
            </label>
            <motion.input
                type={Type}
                value={inputValue}
                onChange={handleChange}
                whileHover={{
                    transformOrigin: "left",
                    borderColor: "#36d0f2", 
                    transition: { duration: 0.5, ease: "easeInOut" }, 
                }}
                whileFocus={{
                    borderColor: inputValue !== "" 
                        ? (validate ? "#36d0f2" : "#F2364C") 
                        : "#36d0f2",
                    transition: { duration: 0.5, ease: "easeInOut" },
                }}
                style={{
                    borderColor: inputValue !== "" 
                        ? (validate ? "#36d0f2" : "#F2364C") 
                        : "#000000"
                }}
                className={`h-16 w-full p-2 border-b-2 bg-transparent font-urbanist font-medium text-base sm:text-xl text-black 
                    placeholder:font-normal placeholder:text-text-p2 focus:outline-none 
                    ${inputValue !== "" 
                        ? (validate ? "border-blue-primary" : "border-error") 
                        : "border-black"} ${className}`} 
                placeholder={PlaceHolder}
            />
            {validate && inputValue !== "" && (
                <motion.div 
                    initial={{ opacity: 0, y: -10, transformOrigin: "top" }}
                    animate={{ opacity: 1, y: 0, transformOrigin: "top" }}
                    exit={{ opacity: 0, y: -10, transformOrigin: "top" }}
                    transition={{ duration: 1 }}
                    className='absolute top-1/2 right-3'
                >
                    <svg 
                        width="22" 
                        height="22" 
                        viewBox="0 0 22 22" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            d="M8 11L10 13L14.5 8.5M6.33377 2.8187C7.1376 2.75455 7.90071 2.43846 8.51447 1.91542C9.94672 0.69486 12.0533 0.69486 13.4855 1.91542C14.0993 2.43846 14.8624 2.75455 15.6662 2.8187C17.5421 2.96839 19.0316 4.45794 19.1813 6.33377C19.2455 7.1376 19.5615 7.90071 20.0846 8.51447C21.3051 9.94672 21.3051 12.0533 20.0846 13.4855C19.5615 14.0993 19.2455 14.8624 19.1813 15.6662C19.0316 17.5421 17.5421 19.0316 15.6662 19.1813C14.8624 19.2455 14.0993 19.5615 13.4855 20.0846C12.0533 21.3051 9.94672 21.3051 8.51447 20.0846C7.90071 19.5615 7.1376 19.2455 6.33377 19.1813C4.45794 19.0316 2.96839 17.5421 2.8187 15.6662C2.75455 14.8624 2.43846 14.0993 1.91542 13.4855C0.69486 12.0533 0.69486 9.94672 1.91542 8.51447C2.43846 7.90071 2.75455 7.1376 2.8187 6.33377C2.96839 4.45794 4.45794 2.96839 6.33377 2.8187Z" 
                            stroke="#1CF24A" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />
                    </svg>
                </motion.div>
            )}
        </div>
    )
}