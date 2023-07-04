import React from 'react'

function Exceltotal({ monthlyexpense, debt, mortagepayment,downpayment,percentage, time, setCountry,}) {



  let total = Number(monthlyexpense) + Number(debt) + Number(mortagepayment)

  let percent = percentage / 100

  
  const totalhousecoast=(mortagepayment*12)*((1-Math.pow((1+percent), -time)) / percent) + Number(downpayment)

  let a = document.getElementById('state')?.value

  if (a === 'usa') {
    setCountry(32)
  } else if (a === 'canada') {
    setCountry(35)
  }


  return (
    <div className='w-[500px]'>
      <ul className='flex justify-end items-center'>
      <select type='number' id='state' onChange={(e) => setCountry(e.target.value)}>
        <option value='canada'>CANADA</option>
        <option value='usa'>USA</option>
      </select>
      </ul>
      <div className='flex-col flex'>
        <ul className='flex justify-end my-4 items-center'>
<li className='text-5xl font-bold'>$</li>
        <input type="number" placeholder='Your housecoast' className='max-w-[180px] text-5xl' value={totalhousecoast} />
        </ul>

        <ul className='flex w-[500px] justify-between'>
          <h5>Mortage Payment</h5>
          $
          <input type="number" className='outline-none w-[120px]  px-2  text-end' value={mortagepayment} />
        </ul>
        <ul className='flex w-[500px] justify-between'>
          <h5>Monthly Expenses</h5>
          $
          <input type="number" className='outline-none w-[120px]  px-2  text-end' value={monthlyexpense} />
        </ul>
        <ul className='flex w-[500px] justify-between'>
          <h5 className='mr-7'>Debt Payment</h5>
          $
          <input type="number" className='outline-none w-[120px]  px-2  text-end' value={debt} />
        </ul>
        <ul className='flex w-[500px] justify-end'>
          <input type="number" className='outline-none border-y border-black h-[40px] w-[120px]  px-2  text-end' value={total} />
        </ul>
      </div>
    </div>
  )
}

export default Exceltotal
