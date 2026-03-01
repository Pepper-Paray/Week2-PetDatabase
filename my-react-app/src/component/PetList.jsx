import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import PetCard from "./PetCard";

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
            {pets.map((pet) => {

                const { id, name, breed, image_url } = pet;

                return (
                    <div key={id} className="pet-card">

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
            })}
        </div>
    );
}

