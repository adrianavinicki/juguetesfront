import React from "react";
import { useDispatch } from "react-redux";
import { getProducts, filterByAge } from "../redux/actions";

const FilterAndOrder = ({ setPage }) => {
    const dispatch = useDispatch();

    const handleAgeFilter = (e) => {
        const selectedAge = e.target.value;
        dispatch(filterByAge(selectedAge));
        setPage(1);
    };

    const resetInput = () => {
        const selects = document.querySelectorAll(".resetSelect");
            selects.forEach((select) => (select.selectedIndex = 0));
    }

    const ages = [
        'all',
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        8,
        '9',
        '10',
        '11',
        '12',
    ]


    return (
        <div>
            <select onChange={handleAgeFilter}>
                {ages.map((e) => (
                    <option key={e} value={e}>
                        {e}
                    </option>
                ))}
            </select>
            <button onClick={()=>{
                setPage(1)
                dispatch(getProducts())
                dispatch(filterByAge('all'))
                resetInput()
            }}>Reset</button>
        </div>
    )

}

export default FilterAndOrder;