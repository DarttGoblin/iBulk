import React from 'react'
import './Programs.css'
import Nav from '../../Components/Nav/Nav'
import Footer from '../../Components/Footer/Footer'
import Program from '../../Components/Program/Program'

import ppl from '../../Media/Programs.Media/ppl.jpg'
import beginner from '../../Media/Programs.Media/beginner.jpg'
import deadlift from '../../Media/Programs.Media/deadlift.jpg'
import jumping from '../../Media/Programs.Media/jumping.jpg'
import running from '../../Media/Programs.Media/running.jpg'
import powerlifting from '../../Media/Programs.Media/powerlifting.jpg'
import hiit from '../../Media/Programs.Media/hiit.jpg'
import machines from '../../Media/Programs.Media/machines.jpg'
import hybrid from '../../Media/Programs.Media/hybrid.jpg'


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
            description: 'A classic 3-day split to maximize muscle growth by targeting Push, Pull, and Leg muscles on separate days. Ideal for intermediate lifters aiming for hypertrophy.',
            goal: 'Muscle',
            level: 'Intermediate',
            frequency: '4-5',
            equipment: 'Barbells',
            time: '60+',
        },
        {
            available: true,
            onClick: () => window.location.href = '',
            image: beginner,
            title: 'Full Body Beginner Program',
            description: 'Perfect for beginners focusing on overall fitness and strength. Covers all major muscle groups in each workout.',
            goal: 'Fitness',
            level: 'Beginner',
            frequency: '2-3',
            equipment: 'Dumbbells',
            time: '30-60',
        },
        {
            available: true,
            onClick: () => window.location.href = '',
            image: deadlift,
            title: 'Upper Lower Split',
            description: 'Targets upper and lower body alternately, allowing balanced development and recovery between sessions.',
            goal: 'Strength',
            level: 'Intermediate',
            frequency: '4-5',
            equipment: 'Barbells',
            time: '60+',
        },
        {
            available: true,
            onClick: () => window.location.href = '',
            image: jumping,
            title: 'Bodyweight Fat Loss',
            description: 'No equipment, high-intensity bodyweight training to burn fat and build lean muscle at home.',
            goal: 'Fatloss',
            level: 'Beginner',
            frequency: '4-5',
            equipment: 'None',
            time: '30-60',
        },
        {
            available: true,
            onClick: () => window.location.href = '',
            image: running,
            title: 'Athletic Endurance Program',
            description: 'Combination of cardio and resistance training to boost stamina, speed, and muscular endurance.',
            goal: 'Endurance',
            level: 'Intermediate',
            frequency: '6-7',
            equipment: 'Bands',
            time: '30-60',
        },
        {
            available: true,
            onClick: () => window.location.href = '',
            image: powerlifting,
            title: 'Powerlifting Program',
            description: 'Focused on the big three: squat, bench, and deadlift. Perfect for those looking to gain raw strength.',
            goal: 'Strength',
            level: 'Advanced',
            frequency: '4-5',
            equipment: 'Barbells',
            time: '60+',
        },
        {
            available: true,
            onClick: () => window.location.href = '',
            image: hiit,
            title: 'Home HIIT Burn',
            description: 'Short, high-intensity interval workouts designed to maximize calorie burn in minimal time. No equipment needed.',
            goal: 'Fatloss',
            level: 'Intermediate',
            frequency: '6-7',
            equipment: 'None',
            time: 'Under30',
        },
        {
            available: true,
            onClick: () => window.location.href = '',
            image: machines,
            title: 'Machine Circuit Training',
            description: 'A quick gym routine that combines multiple machine exercises in a circuit to improve strength and cardio simultaneously.',
            goal: 'Fitness',
            level: 'Beginner',
            frequency: '2-3',
            equipment: 'Machines',
            time: '30-60',
        },
        {
            available: true,
            onClick: () => window.location.href = '',
            image: hybrid,
            title: 'Hybrid Strength & Conditioning',
            description: 'Blends weight training and conditioning for the best of both worlds—strength, speed, and endurance.',
            goal: 'Endurance',
            level: 'Advanced',
            frequency: '6-7',
            equipment: 'Dumbbells',
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
                        <option value="">Training Goal</option>
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