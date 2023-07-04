import React, { useState } from 'react'

function Excelcal3({ debt, setDebt }) {

    const [carloan, setCarloan] = useState("")
    const [cardpayment, setCardpayment] = useState("")
    const [creditline, setCreditLine] = useState("")
    const [studentloan, setStudentloan] = useState("")
    const [childsupport, setChildsupport] = useState("")

    const result = Number(carloan) + Number(cardpayment) + Number(creditline) + Number(studentloan) + Number(childsupport)

    setDebt(result)

    return (
        <div className='mt-[80px]'>
            <h3 className='text-xl font-medium'>Monthly Debts</h3>
            <main className='max-w-[450px]'>
                <ul className='flex justify-between space-x-4 items-center'>
                    <h3>Car Loans</h3>
                    <input type='number' onChange={(e) => setCarloan(e.target.value)} placeholder='enter value' className='max-w-[150px] outline-none border-2 h-[40px] bg-yellow-300 text-end px-3' />
                </ul>
                <ul className='flex justify-between space-x-4 items-center'>
                    <h3>Credit-Card payments</h3>
                    <input onChange={(e) => setCardpayment(e.target.value)} placeholder='enter value' className='max-w-[150px] outline-none border-2 h-[40px] bg-yellow-300 text-end px-3' />
                </ul><ul className='flex justify-between space-x-4 items-center'>
                    <h3>Line of Credit</h3>
                    <input type='number' onChange={(e) => setCreditLine(e.target.value)} placeholder='enter value' className='max-w-[150px] outline-none border-2 h-[40px] bg-yellow-300 text-end px-3' />
                </ul><ul className='flex justify-between space-x-4 items-center'>
                    <h3>Student Loans </h3>
                    <input onChange={(e) => setStudentloan(e.target.value)} placeholder='enter value' className='max-w-[150px] outline-none border-2 h-[40px] bg-yellow-300 text-end px-3' />
                </ul>
                <ul className='flex justify-between space-x-4 items-center'>
                    <h3>Child Support & Other Obligations</h3>
                    <input type='number' onChange={(e) => setChildsupport(e.target.value)} placeholder='enter value' className='max-w-[150px] outline-none border-2 h-[40px] bg-yellow-300 text-end px-3' />
                </ul>
                <ul className='flex justify-between space-x-4 items-center'>
                    <h3 className='text-xl font-bold'>Total Housing housedebt </h3>
                    <input value={debt} type='number' id='mytotal' placeholder='0' className='max-w-[150px] outline-none h-[40px] bg-green-600 border-y-2 border-black text-end px-3' />
                </ul>
            </main>
        </div>
    )
}

export default Excelcal3
