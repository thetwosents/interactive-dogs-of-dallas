import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { onValue, ref } from "firebase/database";
import { database } from '../../firebase'

const Park = () => {
  const router = useRouter()
  const { pupid } = router.query;
  const [item, setItem] = useState({})

  useEffect(() => {
    if (database) {
      let path = ref(database, `dogs/${pupid}`);
      onValue(path, snapshot => {
        console.log(snapshot.val())
        setItem(snapshot.val())
      });
    }
  }, [database])
  return (
    <>
      <h1>Pup: {pupid}</h1>
      {item && <p>{item.name}</p>}
      {/* Print all attributes on the object as json */}
      {item && <pre>{JSON.stringify(item, null, 2)}</pre>}
      
    </>
  )
}



export default Park;