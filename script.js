const guests = [];

function addGuest() {
  const input = document.getElementById('guestName');
  const name = input.value.trim(); // user type in the name and store in const name
  const message = document.getElementById('guest-message');
  const list = document.getElementById('guest-list');

  if (name === ' ') {
    message.textContent = 'Please enter a guest name!';
    return;
  }

  guests.push(name);

  const listItem = document.createElement('li'); // <ul> is just the container for the list items (<li>)
  listItem.textContent = name;
  list.appendChild(listItem);
  // list = variable that refers to <ul>
  // appendChild() = method inserts the listItem into the end of list

  message.textContent = `${name} was added to the guest list!`;
  input.value = '';
}
