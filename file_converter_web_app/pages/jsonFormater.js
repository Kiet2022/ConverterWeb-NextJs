import ConverterBody from "@/components/converterBody";
import {useEffect } from "react";

export default function JsonFormater() {
    function handleFormatedJsonString(data) {
        let convertedInput = '';
        try {
            convertedInput = JSON.stringify(JSON.parse(data), null, 2)
        } catch (error) {
            convertedInput = "Input string is not in JSON format:\n\n" + data;
        }
        return convertedInput;
    }

    return (
        <div className="bg-slate-400 flex flex-col justify-start text-center text-xl font-bold h-screen">
            <div className="h-60 box-border py-8">
            <p className="text-white text-4xl py-5">Json Formater</p>
            </div>
            <ConverterBody onConvert={handleFormatedJsonString} />
        </div>
    );
}