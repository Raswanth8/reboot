// Practical DSA Applications in the real world applications

// HashMap (Maps) are just key value pairs. An Ideal usage would be with respect any JSON related data manipulation.

const messages = [
  {
    id: "message-1",
    text: "Hey folks!",
    userId: "user-1",
  },
  {
    id: "message-2",
    text: "Hi",
    userId: "user-2",
  },
];

const user = {
  id: "user-1",
  name: "Paul",
};

const messageText = messages.find((message) => message.userId === user.id).text;
console.log(messageText);

// Set is more like an unique array. The practical application would be keeping a track of the selected items
// Lets take a checkbox of a datagrid to handle multi-selection of rows scenario.

const [selected, setSelected] = useState(new Set());

const handleChange = (selectedVal) => {
  const selectedValues = new Set(selected);
  if (selectedValues.has(selectedVal)) {
    selectedValues.delete(selectedVal);
  } else {
    selectedValues.add(selectedVal);
  }
  setSelected(selectedValues);
};
