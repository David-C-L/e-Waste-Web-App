import React, { useState } from 'react';
import MultiSelect from './MultiSelect'


function Filter(props) {

    const [category, setCategory] = useState([])

    const handleSelectChange = (event) => {
        setCategory(event.map(e => e.value))
    }

    const applyFilter = () => {
        props.setCategoryFilter(category)
        props.setReload(true)
    }

    const clearFilter = () => {
        props.setCategoryFilter([])
        props.setReload(true)
    }

    const styles = {
        option: provided => ({
            ...provided,
            color: 'black'
        }),
        control: provided => ({
            ...provided,
            color: 'black'
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'black'
        })
    }

    return (
        <div className="FilterByCategory">
            <p>Filter by Category: </p>
            <MultiSelect options={props.ops} styles={styles} value={category} onChange={handleSelectChange} />
            <button type="submit" onClick={applyFilter}>Apply filter</button>
            <button type="submit" onClick={clearFilter}>Clear filter</button>
        </div>
    )
}

export default Filter;