import React, { useState } from 'react'
import { BsArrowDown } from "react-icons/bs"
function Excelcal2({ monthlyexpense, setMonthlyexpense }) {

  const [tax, setTax] = useState("")
  const [insurance, setInsurance] = useState("")
  const [utilities, setUtilities] = useState("")
  const [other, setOther] = useState("")

  const total = Number(tax) + Number(insurance) + Number(utilities) + Number(other)
  setMonthlyexpense(total)

  return (
    <div className=' relative bottom-2'>
      <h1 className='text-2xl font-extrabold h-[60px] flex max-w-[300px] items-center bg-green-800 rounded-md justify-between px-2'>Other Monthly Costs<BsArrowDown /></h1>
      <h3 className='text-lg font-medium my-5'>Monthly Housing Expenses</h3>
      <main className='max-w-[400px]'>
        <ul className='flex justify-between items-center'>
          <h3>Property Tax (Monthly)</h3> <input onChange={(e) => setTax(e.target.value)} type="number" placeholder='enter value' className='max-w-[150px] ml-7 outline-none border-2 h-[40px] bg-yellow-300 text-end px-3' />
        </ul>
        <ul className='flex justify-between items-center'>
          <h3>Home Owners Insurance</h3> <input onChange={(e) => setInsurance(e.target.value)} type="number" placeholder='enter value' className='max-w-[150px] ml-7 outline-none border-2 h-[40px] bg-yellow-300 text-end px-3' />
        </ul><ul className='flex justify-between items-center'>
          <h3>Utilities</h3> <input onChange={(e) => setUtilities(e.target.value)} type="number" placeholder='enter value' className='max-w-[150px] ml-7 outline-none border-2 h-[40px] bg-yellow-300 text-end px-3' />
        </ul><ul className='flex justify-between items-center'>
          <h3>Other </h3> <input type="number" placeholder='enter value' onChange={(e) => setOther(e.target.value)} className='max-w-[150px] ml-7 outline-none border-2 h-[40px] bg-yellow-300 text-end px-3' />
        </ul>
        <ul className='flex justify-between items-center'>
          <h3 className='text-xl font-bold'>Total Housing Expenses </h3> <input type="number" value={monthlyexpense} placeholder='0' className='max-w-[150px] ml-7 outline-none h-[40px] bg-green-600 border-y-2 border-black text-end px-3' />
        </ul>
      </main>
    </div>
  )
}

export default Excelcal2
