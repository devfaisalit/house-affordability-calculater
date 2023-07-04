import React from 'react'

function Excelcal4({ mortagepayment, houseincome, monthlyexpense, setMortagepayment, country, tds, setTds,debt}) {


    let house = houseincome * country / 100
    let mortagpayment = house / 12 - monthlyexpense
    setMortagepayment(mortagpayment)

    if (country === 32) {
        setTds(40)
    }
    else if (country === 35) {
        setTds(43)
    }

    let totaltds = tds / 100

    // setTdspayment(totaltds * (houseincome / 12) - monthlyexpense - debt)

    let mytds = totaltds * (houseincome / 12) - monthlyexpense - debt

    return (
        <div className='mt-5 pl-5 space-y-8'>
            <ul className='space-y-2'>
                <h5>This part should not display</h5>
                <h4 className='text-lg font-semibold'>Gross Debt Ratio (GDS)</h4>
                <div className='flex items-center space-x-4'>
                    <h2 className='text-xl font-bold text-blue-700'>Max GDS Ratio Mortgage Payment </h2>
                    <div className='flex flex-col'>
                        <input type="text" value={country + "%"} className='text-lg bg-[#a8a8a8] text-end max-w-[100px] h-[30px] px-1.5 border border-black' />
                        <input type="text" value={"$"+ " " + mortagepayment}
                            className='text-xl text-blue-700 font-semibold text-end max-w-[100px] h-[30px] px-1.5 border border-black' placeholder='$ 0' />
                    </div>
                    <h3>(Annual house hold *Gross debit)/12-Total housing expense</h3>
                </div>
            </ul>
            <ul className='space-y-2'>
                <h4 className='text-lg font-semibold'>Gross Debt Ratio (TDS)</h4>
                <div className='flex items-center space-x-4'>
                    <h2 className='text-xl font-bold text-blue-700'>Max TDS Ratio Mortgage Payment </h2>
                    <div className='flex flex-col'>
                        <input type="text" value={tds + "%"} className='text-lg bg-[#a8a8a8] text-end max-w-[100px] h-[30px] px-1.5 border border-black' />
                        <input type="text" value={"$"+ " " + mytds} className='text-xl text-blue-700 font-semibold text-end max-w-[100px] h-[30px] px-1.5 border border-black' placeholder='0' />
                    </div>
                    <h3>Gross debt ratio *(Annual House hold/12)-Total housing expense-Money debts total</h3>
                </div>
            </ul>

            <h6 className='max-w-[50px]'>usa canada</h6>
        </div>
    )
}

export default Excelcal4
