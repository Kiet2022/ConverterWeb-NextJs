import ConverterBody from "@/components/converterBody";
import { useState, useEffect } from "react";
import md5 from "md5";


export default function Md5Converter() {
    function handleMd5Encode(data) {
        let convertedInput = '';
        if (data !== '') {
            convertedInput = md5(data);
        }
        return convertedInput;
    }

    return (
        <div className="bg-slate-400 flex flex-col justify-start text-center text-xl font-bold h-screen">
            <div className="h-60 box-border py-8">
                <p className="text-white text-4xl py-5">Md5 Encode</p>
            </div>
            <ConverterBody onConvert={handleMd5Encode} />
        </div>
    );
}