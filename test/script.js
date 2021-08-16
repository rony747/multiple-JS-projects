'use strict';

const gerTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  return data;
};
gerTodos().then(data => {
  console.log(data);
});
