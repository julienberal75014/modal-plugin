# ~ React modal plugin ~

A simple plugin to add a modal to your React project.

## Installation

```ruby
npm install modal-plugin-jbdv
```

```ruby
yarn install modal-plugin-jbdv
```

## Files to import

```ruby
import { Modal } from "modal-plugin-jbdv/dist/index.js";
```

Then you can use the Modal component in your project.

```ruby
<Modal></Modal>
```

## Props

```
title: string
content: string
buttons: array
onClose: function
customStyle: any
```

title: The title of the modal

content: The content of the modal

buttons: An array of objects to add buttons to the modal

onClose: A function to execute when the modal is closed

customStyle: An object to add custom styles to the modal

## Example

```ruby
import React, { useState } from "react";
import { Modal } from "modal-plugin-jbdv/dist/index.js";

function App() {
const [showModal, setShowModal] = useState(false);

const handleOpenModal = () => {
    setShowModal(true);
  };

const handleCloseModal = () => {
    setShowModal(false);
  };

const buttons = [
{
label: "Close",
onClick: () => handleCloseModal()
}
];

return (
  <div className="App">
    <button onClick={() => handleOpenModal()}>Open modal</button>
      <Modal
        title="Modal title"
        content="Modal content"
        buttons={buttons}
        onClose={() => handleCloseModal()}
        customStyle={{
            modal: {
            backgroundColor: "red"
            },
            button: {
            backgroundColor: "white",
            color: "red"
             }
        }}
      />
  </div>
 );
}

export default App;
```
