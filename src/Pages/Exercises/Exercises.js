import React from 'react'
import './Exercises.css'
import Nav from '../../Components/Nav/Nav'
import Footer from '../../Components/Footer/Footer'
import Exercise from '../../Components/Exercise/Exercise'

import biceps from '../../Media/Exercises.Media/biceps.jpg'

const Exercises = () => {
    const [filters, setFilters] = React.useState({
        muscle: "",
        level: "",
        equipment: "",
        type: ""
    });

    const handleFilterChange = (e) => {
    const { name, value } = e.target;
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const filterExercises = (exercise) => {
        return (
            (filters.muscle === "" || exercise.muscle === filters.muscle) &&
            (filters.level === "" || exercise.level === filters.level) &&
            (filters.equipment === "" || exercise.equipment === filters.equipment) &&
            (filters.type === "" || exercise.type === filters.type)
        );
    };

    const exercises = [
        {
            available: true,
            onClick: () => window.location.href = '',
            image: biceps, 
            title: 'Barbell Squat',
            muscle: 'Legs',
            level: 'Intermediate',
            equipment: 'Barbells',
            type: 'Compound',
        }
    ];

    return (
        <>
            <Nav/>
            <section class="exercises-section">
                <div className='exercises-text-container'>
                    <span className='exercises-title'>Find Your Perfect Exercises</span>
                    <span className='exercises-description'>Filter moves, crush goals, and build your routine</span>
                    <span className='exercises-count'>Available Exercises: {exercises.filter(p => p.available).length}</span>
                </div>

                <div className='exercises-selects-container'>
                    <select name="muscle" onChange={handleFilterChange} value={filters.muscle}>
                        <option value="">All Muscles</option>
                        <option value="abdominals">Abdominals</option>
                        <option value="adductors">Adductors</option>
                        <option value="biceps">Biceps</option>
                        <option value="calves">Calves</option>
                        <option value="chest">Chest</option>
                        <option value="forearms">Forearms</option>
                        <option value="glutes">Glutes</option>
                        <option value="hamstrings">Hamstrings</option>
                        <option value="lats">Lats</option>
                        <option value="lower_back">Lower Back</option>
                        <option value="middle_back">Middle Back</option>
                        <option value="neck">Neck</option>
                        <option value="quadriceps">Quadriceps</option>
                        <option value="shoulders">Shoulders</option>
                        <option value="traps">Traps</option>
                        <option value="triceps">Triceps</option>
                        <option value="obliques">Obliques</option>
                    </select>

                    <select name="level" onChange={handleFilterChange} value={filters.level}>
                        <option value="">All Levels</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>

                   <select name="equipment" onChange={handleFilterChange} value={filters.equipment}>
                        <option value="">All Equipment</option>
                        <option value="none">None</option>
                        <option value="barbells">Barbells</option>
                        <option value="dumbbells">Dumbbells</option>
                        <option value="machines">Machines</option>
                        <option value="bands">Resistance Bands</option>
                        <option value="kettlebells">Kettlebells</option>
                        <option value="medicine ball">Medicine Ball</option>
                        <option value="cables">Cables</option>
                        <option value="sandbag">Sandbag</option>
                        <option value="pull-up bar">Pull-up Bar</option>
                    </select>


                    <select name="type" onChange={handleFilterChange} value={filters.type}>
                        <option value="">All Types</option>
                        <option value="compound">Compound</option>
                        <option value="isolation">Isolation</option>
                        <option value="bodyweight">Bodyweight</option>
                        <option value="isometric">Isometric</option>
                        <option value="plyometric">Plyometric</option>
                    </select>
                </div>


                <div className="exercises-container">
                        {exercises.filter(filterExercises).length === 0 ? (
                            <span className="no-available-program">No gains here! Try changing the filters and flex those options 💪😅</span>                            
                        ) : (
                            exercises.filter(filterExercises).map((exercises, index) => (
                                <Exercise key={index} {...exercises} />
                            ))
                        )}
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Exercises