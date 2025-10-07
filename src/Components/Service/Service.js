import "./Service.css";

const Service = ({ available, onClick, image, title, description, color}) => {
    if (!available) return null;

    return (
        <div className="service-card" style={{ backgroundColor: color }}>
            <img className="service-image" src={image} alt={title} />
            <div className="service-info">
                <span className="service-title">{title}</span>
                <span className="service-description">{description}</span>
            </div>
        </div>
    );
};

export default Service;
