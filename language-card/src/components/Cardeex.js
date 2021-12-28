import React, { Component } from "react";

import { FlashcardComponent } from "react-flashcard";

const cardData = [
  {
    front: {
      text: "living outside, often in a tent",
      image: "https://o.quizlet.com/RWRdgDus.uuqNDUrJ0ernA.jpg",
    },
    back: {
      text: "Camping",
    },
  },
];

class Example extends Component {
  render() {
    return <FlashcardComponent dataSource={cardData} className="Card"/>;
  }
}
export default Example;