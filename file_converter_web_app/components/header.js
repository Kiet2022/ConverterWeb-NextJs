import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Header() {
    const [openTab, setOpenTab] = useState(0);
    const router = useRouter();

    return (
        <div className="bg-slate-500 text-white text-center py-12 grid  gap-y-6">
            <p className="text-5xl font-bold">Text Converter</p>
            <p className="text-2xl">Decode 64 base - Simplifying Data Encoding and Decoding</p>
            <div className='flex justify-center'>
                <ul className='flex flex-row flex-wrap justify-center w-full space-x-1 text-xl font-bold gap-5' role="tablist">
                    <li >
                        <div
                            className={'w-48 h-12 flex justify-center items-center rounded-full hover:bg-slate-700 active:bg-slate-800' + (openTab === 0 ? ' bg-sky-300 hover:bg-sky-300' : ' bg-slate-600')}
                            onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(0);
                                router.push('/');
                            }}
                        >
                            Base 64
                        </div>
                    </li>

                    <li >
                        <div
                            className={'w-48 h-12 flex justify-center items-center rounded-full hover:bg-slate-700 active:bg-slate-800' + (openTab === 1 ? ' bg-sky-300 hover:bg-sky-300' : ' bg-slate-600')}
                            onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(1);
                                router.push('/base64Image');
                            }}>
                            Base 64 Image
                        </div>
                    </li>
                    <li >
                        <div
                            className={'w-48 h-12 flex justify-center items-center rounded-full hover:bg-slate-700 active:bg-slate-800' + (openTab === 2 ? ' bg-sky-300 hover:bg-sky-300' : ' bg-slate-600')}
                            onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(2);
                                router.push('/jsonFormater');
                            }}>
                            JSON Formater
                        </div>
                    </li>
                    <li >
                        <div
                            className={'w-48 h-12 flex justify-center items-center rounded-full hover:bg-slate-700 active:bg-slate-800' + (openTab === 3 ? ' bg-sky-300 hover:bg-sky-300' : ' bg-slate-600')}
                            onClick={(e) => {
                                e.preventDefault();
                                setOpenTab(3);
                                router.push('/md5Converter');
                            }}>
                            Md5 Converter
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}