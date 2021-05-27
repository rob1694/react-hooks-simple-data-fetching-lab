import React, { useEffect, useState } from 'react';


const url = 'https://dog.ceo/api/breeds/image/random';

function App() {
    const [dogPic, setDogPic] = useState(null);


    useEffect(() => {
        fetch(url)
          .then((r) => r.json())
          .then((data) => {
            setDogPic(data.message);
          });
      }, []);

      if (!dogPic) return <p>Loading...</p>;

      return <img src={dogPic} alt = "A Random Dog" />;
}

export default App;