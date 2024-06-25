import ConverterBody from "@/components/converterBody";
import { useState, useEffect } from "react";


export default function Base64Image() {

    return (
        <div className="bg-slate-400 flex flex-col justify-start text-center text-xl font-bold h-screen">
            <div className="h-60 box-border py-8">
            <p className="text-white text-4xl py-5">Base 64 Image</p>            
            </div>
            <ConverterBody isImageConverter={true} />
        </div>
    );
}