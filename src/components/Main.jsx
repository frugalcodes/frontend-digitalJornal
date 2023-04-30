import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';


const InputForm = ({onSubmit}) => {

  const [titleValue, setTitleValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");

  function handleTitleChange(event) {
    setTitleValue(event.target.value);
  }

  function handleBodyChange(event) {
    setBodyValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (titleValue.trim() === "" || bodyValue.trim() === "") return; // prevent empty cards

    onSubmit(titleValue.trim(), bodyValue.trim());
    setTitleValue("");
    setBodyValue("");
  }

  return (
    <Container>
      <div className="mb-3">
        <h6 htmlFor="title-input">Title:</h6>
        <input
          className="w-100"
          type="text"
          id="title-input"
          value={titleValue}
          onChange={handleTitleChange}
        />
      </div>
      <div>
        <h6 htmlFor="body-input">Body:</h6>
        <textarea
          className="w-100"
          type="text"
          id="body-input"
          value={bodyValue}
          onChange={handleBodyChange}
        />
      </div>
      <p>
        Use the form above to create a post. make sure you fill the required
        title and body fields and then press submit.
      </p>
      <Button className="mb-3" variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Container>
  );

}

export default InputForm