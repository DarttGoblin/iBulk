import "./Exercise.css";

const Exercise = ({ available, onClick, image, title, muscle, level, type }) => {
    if (!available) return null;

    return (
        <div className="exercise-card" onClick={onClick}>
            <img className="exercise-image" src={image} alt={title} />
            <div className="exercise-info">
                <span className="exercise-title">{title}</span>
                <span className={`exercise-level ${level ? level.toLowerCase() : ""}`}>{level}</span>
                <span className="exercise-muscle">Target: {muscle}</span>
                <span className="exercise-type">{type}</span>
            </div>
        </div>
    );
};

export default Exercise;
