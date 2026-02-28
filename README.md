# Week2-PetDatabase
## Assignment-Objective
 Connect your app to Supabase to fetch pet data. You will master Object Destructuring to create clean variables directly from the database object, avoiding messy code like data.name.

## Detailed Instructions

Step 1: Supabase Table: Create a table named pets. Add the following columns: name, breed, and image_url. Insert at least 3 pet records.
Step 2: Connection: Set up your supabaseClient.js with your project credentials.
Step 3: Fetching: Use the useEffect hook to fetch the list of pets from Supabase when the component loads.
Step 4: Destructuring (The Clean Way): When you receive the pet object, extract the values immediately in a single line.
Do this: const { name, breed, image_url } = pet;
Step 5: Visualizing: Use those specific variables in your JSX to display the pet's name, breed, and photo