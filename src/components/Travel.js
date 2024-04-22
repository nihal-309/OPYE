"use client";
import styles from "../styles/Travel.module.css"
import { useState } from 'react';

function Travel(){
    const [inputType, setInputType] = useState('text');
    const [value, setValue] = useState('');

    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = today.toLocaleDateString('en-US', options);
    const day = formattedDate.split(',')[0];
    const shortDay = day.slice(0, 3);
    formattedDate = formattedDate.replace(day, shortDay);

    const handleFocus = () => {
        setInputType('date');
        if (value === 'Date') {
            setValue('');
        }
    };

    const handleBlur = () => {
        setInputType('text');
        if (value === '') {
            setValue(formattedDate);
        }
    };
    
    return (
        <>
        <div className={styles.travel}>
            <div className={styles.sec-1}>
                <h3 className={styles.head}>Select Destination</h3>
                <select className={styles.cities} id="cities">
                    <option value="bangalore">Bangalore</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Pondicherry">Pondicherry</option>
                </select>
            </div> 
            <div className={styles.sec-2}>
                <h3 className={styles.head}>Starting Date</h3>
                <input 
                    placeholder={formattedDate} 
                    className={styles.textbox} 
                    type={inputType} 
                    value={value}
                    onFocus={handleFocus} 
                    onBlur={handleBlur} 
                    id="date" 
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
            <div className={styles.sec-3}>
                <h3 className={styles.head}>Rooms</h3>
                <select className={styles.rooms} id="rooms">
                    <option value="one">1 Room</option>
                    <option value="two">2 Rooms</option>
                    <option value="three">3 Rooms</option>
                    <option value="four">4 Rooms</option>
                </select>
            </div>
        </div>
            <button className={styles.search}>Search</button>
        </>
    )
}

export default Travel;