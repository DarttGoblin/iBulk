import React from 'react'
import './Programs.css'
import Nav from '../../Components/Nav/Nav'
import Footer from '../../Components/Footer/Footer'
import Program from '../../Components/Program/Program'

import ppl from '../../Media/Programs.Media/ppl.jpg'

const Programs = () => {
    const [filters, setFilters] = React.useState({
        goal: "",
        level: "",
        frequency: "",
        equipment: "",
        time: ""
    });

    const handleFilterChange = (e) => {
    const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const filterPrograms = (program) => {
        return (
            (filters.goal === "" || program.goal === filters.goal) &&
            (filters.level === "" || program.level === filters.level) &&
            (filters.frequency === "" || program.frequency === filters.frequency) &&
            (filters.equipment === "" || program.equipment === filters.equipment) &&
            (filters.time === "" || program.time === filters.time)
        );
    };

    const programs = [
        {
            available: true,
            onClick: () => window.location.href = '',
            image: ppl,
            title: 'Push Pull Legs (PPL)',
            description: 'A classic split to maximize muscle growth by targeting Push, Pull, and Leg muscles on separate days. This structure allows enough recovery while still training each muscle group multiple times a week for steady progress.',
            goal: 'Muscle',
            level: 'Intermediate',
            frequency: '4-5',
            equipment: 'Barbells',
            time: '60+',
        },
    ];

    return (
        <>
            <Nav/>
            <section class="programs-section">
                <div className='programs-text-container'>
                    <span className='programs-title'>Your Best Training Programs</span>
                    <span className='programs-description'>Pick the workout plan that matches your grind and goals</span>
                    <span className='programs-count'>Programs Count: {programs.filter(p => p.available).length}</span>
                </div>
                <div className='programs-selects-container'>
                    <select name="goal" onChange={handleFilterChange} value={filters.goal}>
                        <option value="">Goal</option>
                        <option value="Muscle">Muscle Gain</option>
                        <option value="Fatloss">Fat Loss</option>
                        <option value="Strength">Strength</option>
                        <option value="Endurance">Endurance</option>
                        <option value="Fitness">General Fitness</option>
                    </select>

                    <select name="level" onChange={handleFilterChange} value={filters.level}>
                        <option value="">Experience Level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>

                    <select name="frequency" onChange={handleFilterChange} value={filters.frequency}>
                        <option value="">Workout Frequency</option>
                        <option value="2-3">2-3 days/week</option>
                        <option value="4-5">4-5 days/week</option>
                        <option value="6-7">6-7 days/week</option>
                    </select>

                    <select name="equipment" onChange={handleFilterChange} value={filters.equipment}>
                        <option value="">Equipment Needed</option>
                        <option value="None">No Equipment</option>
                        <option value="Dumbbells">Dumbbells</option>
                        <option value="Barbells">Barbells</option>
                        <option value="Machines">Machines</option>
                        <option value="Bands">Resistance Bands</option>
                    </select>

                    <select name="time" onChange={handleFilterChange} value={filters.time}>
                        <option value="">Time per Session</option>
                        <option value="Under30">Under 30 min</option>
                        <option value="30-60">30-60 min</option>
                        <option value="60+">60+ min</option>
                    </select>
                </div>

                <div className="programs-container">
                    {programs.filter(filterPrograms).length === 0 ? (
                        <span className="no-available-program">Nothing found... maybe your filters are skipping leg day? 🦵😂</span>
                    ) : (
                        programs.filter(filterPrograms).map((program, index) => (
                            <Program key={index} {...program} />
                        ))
                    )}
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Programs