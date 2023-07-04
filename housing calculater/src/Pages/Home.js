import React, { useState } from 'react'
import Excelcal from "../Components/Excelcal"
import Excelcal2 from "../Components/Excelcal2"
import Excelcal3 from "../Components/Excelcal3"
import Excelcal4 from "../Components/Excelcal4"
import Exceltotal from "../Components/Exceltotal"

function Home() {
    const [country, setCountry] = useState("")
    const [houseincome, setHouseincome] = useState("")
    const [downpayment, setDownpayment] = useState("")
    const [time, setTime] = useState("")
    const [percentage, setPercentage] = useState("")
    const [debt, setDebt] = useState("")
    const [monthlyexpense, setMonthlyexpense] = useState("")
    const [mortagepayment, setMortagepayment] = useState("")
    const [tds, setTds] = useState("")

    return (
        <div className='flex flex-col justify-center items-center space-y-11'>
            <h1 className='w-full py-2 text-center text-[#3a6ae4] text-5xl border-b-2 border-[#245550]'>Home Affordability calculater</h1>
            <div className="max-w-[1400px] space-y-10">

                <div className='flex w-full justify-center'>
                    <Excelcal downpayment={downpayment} setTime={setTime} time={time} percentage={percentage} setPercentage={setPercentage} setDownpayment={setDownpayment} houseincome={houseincome} setHouseincome={setHouseincome} />
                    <Exceltotal setCountry={setCountry} time={time} percentage={percentage} downpayment={downpayment} houseincome={houseincome} monthlyexpense={monthlyexpense} debt={debt} mortagepayment={mortagepayment} />
                </div>
                <div className='flex justify-between items-center'>
                    <Excelcal2 monthlyexpense={monthlyexpense} setMonthlyexpense={setMonthlyexpense} />
                    <Excelcal3 debt={debt} setDebt={setDebt} />
                </div>
                <Excelcal4 debt={debt} tds={tds} setTds={setTds} country={country} setCountry={setCountry} monthlyexpense={monthlyexpense} houseincome={houseincome} mortagepayment={mortagepayment} setMortagepayment={setMortagepayment} />
            </div>
        </div>
    )
}

export default Home
