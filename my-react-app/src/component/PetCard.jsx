function PetCard({ pet }) {
    const { id, name, age, type, image_url } = pet;

    return (
        <div className="pet-card">
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Type: {type}</p>
            {image_url && <img src={image_url} alt={name} />}
        </div>
    );
}
