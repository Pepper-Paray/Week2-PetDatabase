import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

export default function PetList() {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        async function loadPets() {
            const { data, error } = await supabase
                .from("pets")
                .select("*");

            if (error) {
                console.error("Error fetching pets:", error);
                return;
            }

            setPets(data);
        }

        loadPets();
    }, []);

    return (
        <div>
            <h2>Pet List</h2>
            {pets.map((pet) => (
                <PetCard key={pet.id} pet={pet} />
            ))}
        </div>
    );
}
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
