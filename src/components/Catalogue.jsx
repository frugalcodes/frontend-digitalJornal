import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Catalogue = ({ cards, onEdit, onDelete }) => {
  const [editedCard, setEditedCard] = useState(null);

  function handleEdit(card) {
    setEditedCard(card);
  }

  function handleDelete(id) {
    onDelete(id);
  }

  function handleSave() {
    const title = editedCard.title.trim();
    const body = editedCard.body.trim();

    if (title && body) {
      onEdit(editedCard);
      setEditedCard(null);
    }
  }

  function handleCancel() {
    setEditedCard(null);
  }

  return (
    <Container>
      <Row md={3} className="g-4">
        {cards.map((card) => (
          <Col key={card.id}>
            <Card style={{ width: '23rem' }}>
              {editedCard && editedCard.id === card.id ? (
                <Card.Body>
                  <div className="mb-3">
                    <h6 htmlFor="edited-title-input">Title:</h6>
                    <input
                      className="w-100"
                      type="text"
                      id="edited-title-input"
                      value={editedCard.title}
                      onChange={(event) =>
                        setEditedCard({
                          ...editedCard,
                          title: event.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <h6 htmlFor="edited-body-input">Body:</h6>
                    <textarea
                      className="w-100"
                      type="text"
                      id="edited-body-input"
                      value={editedCard.body}
                      onChange={(event) =>
                        setEditedCard({
                          ...editedCard,
                          body: event.target.value,
                        })
                      }
                    />
                  </div>
                  
                  <Card.Link role="button" onClick={handleSave}>Save</Card.Link>
                  <Card.Link role="button" onClick={handleCancel}>Cancel</Card.Link>
                </Card.Body>
              ) : (
                <>
                  <Card.Header>{card.title}</Card.Header>
                  <Card.Body>
                    <Card.Text>{card.body}</Card.Text>
                  </Card.Body>
                  <Card.Header>
                  <Card.Link role="button" onClick={() => handleEdit(card)}>Edit</Card.Link>
                    <Card.Link role="button" onClick={() => handleDelete(card.id)}>Delete</Card.Link>
                  </Card.Header>
                </>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Catalogue;
