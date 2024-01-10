import React, { useEffect, useState } from 'react'
import Theme from './Theme'

const Dropdown = () => {
    const [countries, setCountries] = useState(null)
    const [inputValue, setInputValue] = useState("")
    const [selected, setSelected] = useState("")
    const [open, setOpen] = useState(false)
    

    // API Call
    const fetchData = async() => {
        const res = await fetch(`https://restcountries.com/v2/all?fields=name`)
        const data = await res.json()
        console.log(data)
        setCountries(data)
    }

    useEffect(() => {
        fetchData()
    }, [])


  return (
    <div className='flex items-center justify-center flex-col h-full '>
      <div className='border border-gray-100 w-1/3 h-14 flex items-center justify-between cursor-pointer mt-3 px-2 rounded-md  '
      
      >
        <h3>{selected? selected?.length > 20 ? selected.substring(0, 20) +"..." : selected 
        : "Select Country"}</h3>
        <div>
            <Theme />
        </div>
        <span
            className='text-3xl '
            onClick={()=>setOpen(!open)}
        >🔽</span>
      </div>
      
        <ul className={`flex items-start flex-col w-1/3 border border-1 mt-4  overflow-y-auto rounded-md   ${open ? "max-h-screen" : "max-h-0 border-0"}`}>

            {/* INPUT BOX */}

            <div className=' w-full flex items-center justify-start sticky top-0  dark:bg-slate-800 '>
                <span>🔎</span>
                <input type="text" placeholder='Enter Your Country...' className='w-3/4 outline-none pl-2 text-2xl dark:bg-slate-800' 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                />
            </div>
            {/* {inputValue} */}
            {countries?.map((country)=>{
                
                return(
                    
                    <li key={country.name} 
                    className={`cursor-pointer text-3xl hover:bg-blue-500 my-1 p-1 rounded-sm ${country?.name?.toLowerCase().startsWith(inputValue) ? "block" : "hidden"}`}

                    onClick={() => {
                        if(country?.name?.toLowerCase() !== selected.toLowerCase()){
                            setSelected(country?.name)
                        }
                        setOpen(false)
                    }}
                    
                    >{country.name}</li>
                )
            })}
        </ul>
      </div>
    
  )
}

export default Dropdown
