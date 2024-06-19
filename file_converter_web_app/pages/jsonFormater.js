import ConverterBody from "@/components/converterBody";
import { useState, useEffect } from "react";

export default function JsonFormater() {
    const [input, setInput] = useState('')
    const [output, setOutput] = useState('')

    function handleInputData(data) {
        setInput(data);
    }

    useEffect(() => {
        let convertedInput = '';
        try {
            convertedInput = JSON.stringify(JSON.parse(input), null, 2)
            setOutput(convertedInput)
        } catch (error) {
            convertedInput = "Input string is not in JSON format:\n\n" + input;
            setOutput(convertedInput)
        }
    }, [input])
    return (
        <div className="bg-slate-400 flex flex-col justify-start text-center text-xl font-bold h-screen">
            <div className="h-60 box-border py-8">
            <p className="text-white text-4xl py-5">Json Formater</p>
            </div>
            <ConverterBody setInput={handleInputData} output={output} />
        </div>
    );
}