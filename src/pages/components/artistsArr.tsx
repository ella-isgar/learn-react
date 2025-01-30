import { useState } from "react";
import { ArtistType } from "../../types/artist";

let nextId = 0;

/*
export interface ArtistType {
    name: string;
    id: number;
}
*/

export default function List() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState<ArtistType[]>([]); // Initialize this list as empty

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          setArtists([...artists, { id: nextId++, name: name }]); // Create a COPY of artists
        }}
      >
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  );
}
