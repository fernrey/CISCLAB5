import React, {useState, useEffect } from 'react';
export default function TableContainer() {


//this component will be where i will fetch the api from the database
const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/`) // the proxy that i am using from my local machine in order for things to print
      .then(res => res.json())
      .then(
        (result) => {
          setCars(result.data);


        },
      )
  }, [])
  	
 return (
 		<ul>
 			{cars.map(cars => (
 			<li key ={cars.id}>
 			</li>))}
 		</ul>

 	)
}

