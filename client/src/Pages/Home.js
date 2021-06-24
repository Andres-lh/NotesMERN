import React, { useState, useEffect } from 'react';
import Notes from '../Components/Notes/Notes';
import Navbar from '../Components/Navbar';
import ExpenseTracker from '../Components/ExpenseTracker/ExpenseTracker';
import { useSelector } from 'react-redux';
import './styles/Home.css';

function Home() {
    const user = useSelector(state => state.auth)
    const [option, setOption] = useState('Notes');

    useEffect(() => {
        
    }, [])

    return (
        <div className = "home">
            <Navbar setOption={setOption}/>
            {
                option === 'Notes' ? (
                    <Notes />
                ) : (
                    <ExpenseTracker/>
                )
            }
            
        </div>
    )
}

export default Home
