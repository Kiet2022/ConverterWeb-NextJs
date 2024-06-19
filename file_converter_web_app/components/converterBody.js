import "@/styles/converter.module.css";
import { useState, useEffect } from "react";

export default function ConverterBody({ output, setInput, isImageConverter }) {
    const [inputData, setInputData] = useState("");

    function handleData(data) {

        setInputData(data)
    }

    async function copyToClipBoard(data) {
        try {
            await navigator.clipboard.writeText(data)
        } catch (error) {
            alert("Cannot copy this data to the clipboard!!")
        }
    }

    useEffect(() => {
        setInput(inputData)
    }, [inputData])

    return (
        <div className="w-full h-screen flex flex-row justify-center mt-5 gap-10 pt-12">
            <div className="w-1/3 h-96 relative">
                <textarea
                    id="inputArea"
                    type="text"
                    className="w-full h-full rounded-lg block bg-sky-100 p-1 max-w-full"
                    placeholder="Input here"
                    onChange={(e) => handleData(e.target.value)}
                // value={input instanceof String ? input : ''} 
                />
                <button
                    className="absolute bottom-5 right-5 bg-slate-400 hover:bg-slate-500 active:ring active:bg-slate-600 rounded-full w-12 h-12 flex items-center justify-center"
                    onClick={() => copyToClipBoard(inputData)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                    </svg>
                </button>
            </div>
            <div className="w-1/3 h-96 relative">
                <textarea
                    id="outputArea"
                    type="text"
                    readOnly
                    className="w-full h-full rounded-lg block bg-sky-100 p-1 max-w-full"
                    placeholder="Result"
                    value={!isImageConverter ? output : ''}
                />
                {isImageConverter && (
                    <img src={output} alt="converted-img.png" className="absolute top-0 left-0 w-full h-full border border-black bg-white text-xs text-start" />
                )}
                {!isImageConverter ? (
                    <button
                        className="absolute bottom-5 right-5 bg-slate-400 hover:bg-slate-500 active:ring active:bg-slate-600 rounded-full w-12 h-12 flex items-center justify-center"
                        onClick={() => copyToClipBoard(output)}
                    >                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                        </svg>
                    </button>
                ) : (
                    <a
                        href={output}
                        download={"converted-img.png"}
                        type="image/png"
                        className="absolute bottom-5 right-5 bg-slate-400 hover:bg-slate-500 active:ring active:bg-slate-600 rounded-full w-12 h-12 flex items-center justify-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </a>
                )}

            </div>
        </div>
    )
}