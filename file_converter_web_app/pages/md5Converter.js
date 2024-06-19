import ConverterBody from "@/components/converterBody";
import { useState, useEffect } from "react";
import md5 from "md5";


export default function Md5Converter() {
    const [input, setInput] = useState('')
    const [output, setOutput] = useState(new Image())

    function handleInputData(data) {
        setInput(data);
    }

    useEffect(() => {
        let convertedInput = '';
        if (input !== '') {
            convertedInput = md5(input);
        }
        setOutput(convertedInput)
    }, [input])
    return (
        <div className="bg-slate-400 flex flex-col justify-start text-center text-xl font-bold h-screen">
            <div className="h-60 box-border py-8">
                <h1>Md5 Converter</h1>
            </div>
            <ConverterBody setInput={handleInputData} output={output} />
        </div>
    );
}