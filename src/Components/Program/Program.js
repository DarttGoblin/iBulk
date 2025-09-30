import "./Program.css";

import goal_icon from '../../Media/Programs.Media/goal.png'
import level_icon from '../../Media/Programs.Media/level.png'
import frequency_icon from '../../Media/Programs.Media/frequency.png'
import equipment_icon from '../../Media/Programs.Media/equipment.png'
import time_icon from '../../Media/Programs.Media/time.png'

const Program = ({ available, onClick, image, title, description, goal, level, frequency, equipment, time }) => {
    if (!available) return null;

    return (
        <div className="program-card" onClick={onClick}>
            <img className="program-image" src={image} alt={title} />
            <div className="program-info">
                <span className="program-title">{title}</span>
                <span className="program-description">{description}</span>
                <div className="program-attrs-container">
                    <span className="program-attr"><span className="program-attr-word">
                        <img className="program-attr-icon" src={goal_icon}/> Goal:</span> {goal}
                        </span>
                    <span className="program-attr"><span className="program-attr-word">
                        <img className="program-attr-icon" src={level_icon}/> Level:</span> {level}
                    </span>
                    <span className="program-attr"><span className="program-attr-word">
                        <img className="program-attr-icon" src={frequency_icon}/> Frequency:</span> {frequency} days/week
                    </span>
                    <span className="program-attr"><span className="program-attr-word">
                        <img className="program-attr-icon" src={equipment_icon}/> Equipment:</span> {equipment}
                    </span>
                    <span className="program-attr"><span className="program-attr-word">
                        <img className="program-attr-icon" src={time_icon}/> Time:</span> {time} min
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Program;
