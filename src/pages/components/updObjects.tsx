import { useState } from "react";

/**
 * The Form component renders an image,
 * a city input, and a paragraph with the person's name, artwork title,
 * and city.
 */
export default function Form() {
  const [person, setPerson] = useState({
    name: "Ranjani Shettar",
    artwork: {
      title: "Aureole",
      city: "Bangalore",
      image: "https://i.imgur.com/okTpbHhm.jpg",
    },
  }); // This is a NESTED object.

  /**
   * The handle function illustrates how to update nested objects in state.
   * Note the use of the spread operator to update by creating a copy of the
   * old object and changing only the relevant parts.
   * @param e The event object
   */
  function handleCityChange(e: { target: { value: string } }) {
    // First create a copy of the Artwork object with the new city value
    // Then create a copy of the person object with the updated Artwork value
    const nextArtwork = { ...person.artwork, city: e.target.value };
    const nextPerson = { ...person, artwork: nextArtwork };
    setPerson(nextPerson);

    // In JavaScript, the spread operator, represented by three dots (...),
    // expands an iterable object (like an array, string, or object literal)
    // into its individual elements.
  }

  return (
    <>
      <img src={person.artwork.image} />
      <label>
        City:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <p>
        {person.name} {person.artwork.title} ({person.artwork.city})
      </p>
    </>
  );
}
