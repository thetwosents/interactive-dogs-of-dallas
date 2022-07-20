import React, { useEffect, useState } from 'react';
import { onValue, ref } from "firebase/database";
import { database } from '../firebase'

const DogList = ({items}) => {
  return (
    <>
      <h1>Dogs</h1>
      {/* Json print items */}
      {items && <pre>{JSON.stringify(items, null, 2)}</pre>}
      {
        items &&
        Object.keys(items).map((key, index) => (
          <DogItem key={index} index={key} />
        ))
      }
    </>
  )
}

const DogItem = ({index}) => {
  const [dog, setDog] = useState({})
  useEffect(() => {
    if (database) {
      let path = ref(database, `dogs/${index}`);
      onValue(path, snapshot => {
        console.log(snapshot.val())
        setDog(snapshot.val())
      });
    }
  }, [database,index])

  return (
    <>
      <h1>Dog: {index}</h1>
      {dog && <p>{dog.name}</p>}
      {/* Print all attributes on the object as json */}
      {dog && <pre>{JSON.stringify(dog, null, 2)}</pre>}

    </>
  )
}

export default DogList;