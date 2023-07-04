import React, { useState } from 'react'

function Calculater() {

    const [result, setResult] = useState(" ")

    const clickhandler = (event) => {
        setResult(result.concat(event.target.innerHTML))
    }
    const clearnum = () => {
        setResult("")
    }
    const Result = () => {
        setResult(eval(result))
    }

    const backspace = () => {
        try {
            setResult(result.slice(0, result.length - 1))
        } catch (err) {
            setResult("ERROR")
        }

    }

    return (
        <div className=' w-full h-screen flex flex-col justify-center items-center'>
            <div className="space-y-3 w-[300px] h-[500px] bg-red-600 rounded-md flex flex-col justify-center items-center">
                <input type="string" className=" w-[250px] bg-opacity-50 bg-white outline-none focus:bg-white h-[40px] border-black border-2 rounded-md mb-10 text-xl px-2" value={result} />
                <div className="space-x-4">
                    <button className="h-[50px] w-[50px] hover:bg-red-700 bg-white bg-opacity-50 border border-black rounded-md text-xl" onClick={clearnum}>AC</button>
                    <button className="h-[50px] w-[50px] hover:bg-red-700 bg-white bg-opacity-50 border border-black rounded-md text-xl" onClick={backspace} >C</button>
                    <button className="h-[50px] w-[50px] hover:bg-red-700 bg-white bg-opacity-50 border border-black rounded-md text-xl" onClick={clickhandler}>%</button>
                    <button className="h-[50px] w-[50px] hover:bg-red-700 bg-white bg-opacity-50 border border-black rounded-md text-xl" onClick={clickhandler}>/</button>
                </div>
                <div className="space-x-4">
                    <button className="h-[50px] w-[50px] hover:bg-red-700 bg-white bg-opacity-50 border border-black rounded-md text-xl" onClick={clickhandler}>7</button>
                    <button className="h-[50px] w-[50px] hover:bg-red-700 bg-white bg-opacity-50 border border-black rounded-md text-xl" onClick={clickhandler}>8</button>
                    <button className="h-[50px] w-[50px] hover:bg-red-700 bg-white bg-opacity-50 border border-black rounded-md text-xl" onClick={clickhandler}>9</button>
                    <button className="h-[50px] w-[50px] hover:bg-red-700 bg-white bg-opacity-50 border border-black rounded-md text-xl" onClick={clickhandler}>*</button>
                </div>
                <div className="space-x-4">
                    <button className="h-[50px] w-[50px] hover:bg-red-700 bg-white bg-opacity-50 border border-black rounded-md text-xl" onClick={clickhandler}>4</button>
                    <button className="h-[50px] w-[50px] hover:bg-red-700 bg-white bg-opacity-50 border border-black rounded-md text-xl" onClick={clickhandler}>5</button>
                    <button className="h-[50px] w-[50px] hover:bg-red-700 bg-white bg-opacity-50 border border-black rounded-md text-xl" onClick={clickhandler}>6</button>
                    <button className="h-[50px] w-[50px] hover:bg-red-700 bg-white bg-opacity-50 border border-black rounded-md text-xl" onClick={clickhandler}>+</button>
                </div>
                <div className="space-x-4">
                    <button className="h-[50px] w-[50px] hover:bg-red-700 bg-white bg-opacity-50 border border-black rounded-md text-xl" onClick={clickhandler}>1</button>
                    <button className="h-[50px] w-[50px] hover:bg-red-700 bg-white bg-opacity-50 border border-black rounded-md text-xl" onClick={clickhandler}>2</button>
                    <button className="h-[50px] w-[50px] hover:bg-red-700 bg-white bg-opacity-50 border border-black rounded-md text-xl" onClick={clickhandler}>3</button>
                    <button className="h-[50px] w-[50px] hover:bg-red-700 bg-white bg-opacity-50 border border-black rounded-md text-xl" onClick={clickhandler}>-</button>
                </div>
                <div className="space-x-4">
                    <button className="h-[50px] w-[115px] hover:bg-red-700 bg-white bg-opacity-50 border border-black rounded-md text-xl" onClick={clickhandler} >0</button>
                    <button className="h-[50px] w-[50px] hover:bg-red-700 bg-white bg-opacity-50 border border-black rounded-md text-xl" onClick={clickhandler} >.</button>
                    <button className="h-[50px] w-[50px] hover:bg-red-700 bg-white bg-opacity-50 border border-black rounded-md text-xl" onClick={Result} >=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculater
