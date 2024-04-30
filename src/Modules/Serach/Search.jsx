import React, { useContext, useEffect, useRef, useState } from 'react'
import { Context } from '../Services/ContextApi/Context';
import debounce from 'lodash.debounce';
import { Link } from 'react-router-dom';


const Search = () => {

    const { searchdata } = useContext(Context);
    const [records, setRecords] = useState(searchdata);
    const inputClick = useRef(null);

    const Filter = (e) => {
        if (e.target.value) {
            setRecords(searchdata.filter(f => f.title.toLowerCase().includes(e.target.value)));
        } else {
            setRecords([])
        }
    }

    const updatedQuery = debounce(Filter, 500)

    useEffect(() => {
        document.addEventListener("click", (event) => {
            if (inputClick.current && !inputClick.current.contains(event.target)) {
                console.log(inputClick.current)
                setRecords([])
            }
        })

    }, [])


    return (
        <>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={updatedQuery} />

            <div ref={inputClick} className='mt-5 position-absolute bg-white shadow'>
                {records.map((data) =>
                    <p className='px-3' key={data.id}><Link to={`/${data.id}`} >{data.title}</Link></p>)}
            </div>
        </>
    )
}

export default Search


