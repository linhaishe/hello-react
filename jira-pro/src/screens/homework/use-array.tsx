import React, { useEffect, useState } from 'react';

interface Person {
  name: string;
  age: number;
}

const useArray = (params: Person[]) => {
  const [value, setValue] = useState(params);
  const copy = [...value];

  return {
    value,
    setValue,
    add: (values: Person) => setValue([...value, values]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      copy.splice(index, 1);
      setValue(copy);
    },
  };
};

function UseArrayComponent() {
  const persons: { name: string; age: number }[] = [
    { name: 'jack', age: 25 },
    { name: 'petter', age: 22 },
  ];
  const { value, clear, removeIndex, add } = useArray(persons);

  useEffect(() => {}, []);

  return (
    <div>
      <button
        type='button'
        onClick={() => add({ name: 'jhone', age: 22 })}
      >
        add jhon
      </button>
      <button
        type='button'
        onClick={() => removeIndex(0)}
      >
        remove 0
      </button>
      <button
        type='button'
        onClick={() => clear()}
      >
        clear
      </button>
      {value.map((person, index) => (
        <div>
          <span>{index}</span>
          <span>{person.name}</span>
          <span>{person.age}</span>
        </div>
      ))}
    </div>
  );
}

export default UseArrayComponent;
