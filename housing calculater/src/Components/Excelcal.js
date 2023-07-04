import React, { useState } from 'react'
import { FaDollarSign } from "react-icons/fa"

function Excelcal({ houseincome, setHouseincome,downpayment, setDownpayment,setPercentage,time,setTime }) {

    const [percent, setPercent] = useState("")
    setPercentage(percent)

    return (
        <div className='w-full'>
            <div>
                <h1>How Much House Can I Afford?</h1>
            </div>
            <main>
                <h2 className='text-2xl'>Annual Household Income (before tax)</h2>
                <ul className='flex border-2 rounded-md border-[#899297] h-[50px] max-w-[280px]'>
                    <li className='text-2xl pt-3 w-[35px] border-r border-[#899297] rounded-md h-full '><FaDollarSign /></li>
                    <input type="number" onChange={(e) => setHouseincome(e.target.value)}
                        value={houseincome} placeholder='0' className=' w-full outline-none px-3' />
                </ul>
                <h5>Add dial like a motgage calc</h5>
                <h2 className='text-2xl'>Down Payment</h2>
                <ul className='flex border-2 rounded-md border-[#899297] h-[50px] max-w-[280px]'>
                    <li className='text-2xl pt-3 w-[35px] border-r border-[#899297] rounded-md h-full '><FaDollarSign /></li>
                    <input type="number" onChange={(e) => setDownpayment(e.target.value)}
                         placeholder='0' className=' w-full outline-none px-3' />
                </ul>
                <h2 className='text-2xl'>Mortgage Interset Rate</h2>
                <ul className='flex border-2 justify-end items-center rounded-md border-[#899297] h-[50px] max-w-[280px]'>
                    <input type="number" placeholder='%' onChange={(e) => setPercent(e.target.value)} value={percent} className=' w-[200px] border h-[35px] border-b-0 border-r-0 outline-none border-black px-2' />
                    <li className='text-2xl pl-2 pt-2 w-[35px] border-l border-[#899297] rounded-md h-full '>%</li>
                </ul>
            </main>
            <label>
                <h2 className='text-xl font-bold'>Loan term</h2>
                <select id='select' onChange={(e) => setTime(e.target.value)} value={time} className='w-[150px] sm:w-[280px] h-[40px] border border-black rounded-md pl-5'>
                    <option id='five'>5.00</option>
                    <option id='ten'>10.00</option>
                    <option id='fifty'>15.00</option>
                    <option id='twenty'>20.00</option>
                    <option id='twentyfive'>25.00</option>
                    <option id='thirty'>30.00</option>
                </select>
            </label>
        </div>
    )
}

export default Excelcal;
