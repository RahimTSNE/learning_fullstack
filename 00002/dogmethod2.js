const Dog = (name, breed) => {
  const bark = () => console.log('Woof!');
  return {
    name, breed, bark
  };
}

const dog = Dog('Fido', 'Collie');
