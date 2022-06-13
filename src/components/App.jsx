import React from "react";
import Event from "./Event";
import emojipedia from "../emojipedia";

function emojiCard(contact) {
  return (
    <Event
      key={contact.id}
      emoji={contact.emoji}
      name={contact.name}
      meaning={contact.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(emojiCard)}</dl>
    </div>
  );
}

export default App;
