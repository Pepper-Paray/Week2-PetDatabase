export default function PetCard({ pet }) {

    const { name, breed, image_url } = pet;

    return (
        <div className="pet-card">

            <h3>{name}</h3>
            <p>Breed: {breed}</p>

            {image_url && (
                <img
                    src={image_url}
                    alt={name}
                    style={{ width: "200px", borderRadius: "8px" }}
                />
            )}
        </div>
    );
}

