import ConverterBody from "@/components/converterBody";
import { useState } from "react";

export default function Base64() {
    const [isEncode, setIsEncode] = useState(true);

    return (
        <div className="bg-slate-400 flex flex-col justify-start text-center text-xl font-bold h-screen">
            <div className="h-60 box-border py-8">
            <p className="text-white text-4xl py-5">Base 64</p>
                <div>
                    <button
                        className={"w-32 h-10 text-white rounded-s-full " + (isEncode ? 'bg-sky-300' : "bg-slate-600")}
                        onClick={() => setIsEncode(true)}
                    >
                        Encode
                    </button>
                    <button
                        className={"w-32 h-10 text-white rounded-e-full " + (!isEncode ? 'bg-sky-300' : "bg-slate-600")}
                        onClick={() => setIsEncode(false)}
                    >
                        Decode
                    </button>
                </div>
            </div>
            <ConverterBody onConvert={isEncode? btoa: atob} />
        </div>
    );
}