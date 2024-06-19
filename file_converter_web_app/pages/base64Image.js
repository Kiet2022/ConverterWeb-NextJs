import ConverterBody from "@/components/converterBody";
import { useState, useEffect } from "react";


export default function Base64Image() {
    const [input, setInput] = useState('')
    const [output, setOutput] = useState(new Image())

    function handleInputData(data) {
        setInput(data);
    }

    useEffect(() => {
        // let convertedInput = new Image();
        // convertedInput.src = input;
        setOutput(input);
    }, [input])
    return (
        <div className="bg-slate-400 flex flex-col justify-start text-center text-xl font-bold h-screen">
            <div className="h-60 box-border py-8">
                <h1>Base 64 Image</h1>            
            </div>
            <ConverterBody setInput={handleInputData} output={output} isImageConverter={true} />
        </div>
    );
}