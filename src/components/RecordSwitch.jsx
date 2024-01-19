'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LoadingRecSwitch from '../LazyLoadings/LoadingRecSwitch';
import {
    ChevronRightIcon,
    ChevronLeftIcon,
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon

} from "@heroicons/react/24/solid";




const RecordSwitch = ({ children, recordID, pathName, enable, userId }) => {

    const router = useRouter();
    const [recordIndex, setRecordIndex] = useState({});
    const [isShowingRecord, setIsShowingRecord] = useState(false);

    const [isShowingFirstRecord, setIsShowingFirstRecord] = useState(false);
    const [isShowingLastRecord, setIsShowingLastRecord] = useState(false);

    const [isShowingNextRecord, setIsShowingNextRecord] = useState(false);
    const [isShowingPrevRecord, setIsShowingPrevRecord] = useState(false);

    console.log("Record Switch: ", userId);

    useEffect(() => {
        const showRecordOutofTotal = async () => {
            try {
                setIsShowingRecord(true);
                const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/getrecordinfobyid/${recordID}?userId=${userId}`);
                const data = await resp.json();
                setRecordIndex(data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsShowingRecord(false);
            }
        };

        if (recordID) {
            showRecordOutofTotal();

        }
    }, [recordID, userId]);

    const NextRecord = async () => {
        try {
            setIsShowingNextRecord(true)
            const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/recordswitch/${recordIndex.index}?userId=${userId}`);
            const data = await resp.json();
            router.push(`${pathName}/${data.id}`);
        } catch (error) {
            console.error(error);
        } finally {
            setIsShowingNextRecord(false)
        }
    };

    const PreviousRecord = async () => {
        const prevIndex = recordIndex.index - 2;
        try {
            setIsShowingPrevRecord(true)
            const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/recordswitch/${prevIndex}?userId=${userId}`);
            const data = await resp.json();
            router.push(`${pathName}/${data.id}`);
        } catch (error) {
            console.error(error);
        } finally {
            setIsShowingPrevRecord(false)
        }
    };

    const FirstRecord = async () => {
        try {
            setIsShowingFirstRecord(true)
            const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/firstrecord?userId=${userId}`);
            const data = await resp.json();
            router.push(`${pathName}/${data.id}`);
        } catch (error) {
            console.error(error);
        } finally {
            setIsShowingFirstRecord(false)
        }
    };

    const LastRecord = async () => {
        try {
            setIsShowingLastRecord(true);
            const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects/lastrecord?userId=${userId}`);
            const data = await resp.json();
            router.push(`${pathName}/${data.id}`);
        } catch (error) {
            console.error(error);
        } finally {
            setIsShowingLastRecord(false);
        }
    };

    return (
        <div className='w-full flex flex-col justify-center items-center space-y-3'>
            {children}

            {
                enable
                    ? (isShowingRecord ? (
                        <LoadingRecSwitch />
                    ) : (
                        <div className='flex space-x-3 items-center text-center '>
                            <button
                                className='btn btn-square'
                                disabled={recordIndex.index === 1 || isShowingFirstRecord}
                                onClick={FirstRecord}
                            >
                                {isShowingFirstRecord
                                    ? <span className="loading loading-spinner text-neutral"></span>
                                    : <ChevronDoubleLeftIcon className={`${recordIndex.index === 1 ? "text-gray-500 " : null} text-black h-7 w-7`} />
                                }

                            </button>
                            <button
                                className='btn'
                                onClick={PreviousRecord}
                                disabled={recordIndex.index === 1 || isShowingPrevRecord}
                            >
                                {isShowingPrevRecord
                                    ? <span className="loading loading-spinner text-neutral"></span>
                                    : <ChevronLeftIcon className={`${recordIndex.index === 1 ? "text-gray-500 " : null} text-black h-7 w-7`} />

                                }

                            </button>
                            <h1 className='font-bold'>
                                {recordIndex.index}/{recordIndex.totalRecords}
                            </h1>
                            <button
                                className='btn'
                                onClick={NextRecord}
                                disabled={recordIndex.index === recordIndex.totalRecords || isShowingNextRecord}
                            >
                                {isShowingNextRecord
                                    ? <span className="loading loading-spinner text-neutral"></span>
                                    : <ChevronRightIcon className={`${recordIndex.index === recordIndex.totalRecords ? "text-gray-500 " : null} text-black h-7 w-7`} />

                                }
                            </button>
                            <button
                                className='btn btn-square'
                                disabled={recordIndex.index === recordIndex.totalRecords || isShowingLastRecord}
                                onClick={LastRecord}
                            >
                                {isShowingLastRecord
                                    ? <span className="loading loading-spinner text-neutral"></span>
                                    : <ChevronDoubleRightIcon className={`${recordIndex.index === recordIndex.totalRecords ? "text-gray-500 " : null} text-black h-7 w-7`} />
                                }

                            </button>
                        </div>
                    ))
                    : null
            }





        </div>
    );
};

export default RecordSwitch;
