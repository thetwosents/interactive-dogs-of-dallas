import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { onValue, ref } from "firebase/database";
import { database } from '../../firebase'
import DogList from '../../components/DogList';

const Park = () => {
  const router = useRouter()
  const { pid } = router.query;
  const [item, setItem] = useState({})

  useEffect(() => {
    if (database) {
      let path = ref(database, `parks/${pid}`);
      onValue(path, snapshot => {
        console.log(snapshot.val())
        setItem(snapshot.val())
      });
    }
  }, [database,pid])
  return (
    <>
      <h1>Park: {pid}</h1>
      {item && <p>{item.name}</p>}
      {/* Print all attributes on the object as json */}
      {item && <pre>{JSON.stringify(item, null, 2)}</pre>}
      {item && <DogList items={item.dogs} />}
    </>
  )
}



export default Park;