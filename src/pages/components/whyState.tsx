import { sculptureList } from "../../data/data";

/**
 * A component that displays a gallery of sculptures.
 * The component is incorrect because it does not use state
 * to manage the index of the sculpture to display.
 */

export default function Gallery() {
  let index = 0;

  function handleClick() {
    index = index + 1;
    // PROBLEM - the index is updated but how does the
    // view know to update / refresh the display?
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}
