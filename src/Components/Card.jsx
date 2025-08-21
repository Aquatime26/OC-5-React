function Card({ data }) {
    return (
        <div className="card">
            <img src={data.cover} className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{data.title}</h3>
                <div className="card-host">
                    <p className="card-host-name">{data.host.name}</p>
                    <img src={data.host.picture} alt={data.host.name} className="card-host-image" />
                </div>
                <p className="card-tags">{data.tags.join(' ')}</p>    
                    <div className="card-rating">

                    </div>
                <p className="card-description">{data.description}</p>
                <p className="card-equipments">{data.equipments.join(', ')}</p>
            </div>
        </div>
    );
}

export default Card;