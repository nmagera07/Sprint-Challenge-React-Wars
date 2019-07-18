import React, {useState, useEffect} from 'react';
import axios from 'axios'

const DogAPI = (props) => {
    const [dog, setDog] = useState([])


  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breeds/image/random/6`)
      .then(response => {
        console.log(response.data.message)
        setDog(response.data.message)
      })
      .catch(error => console.log('things went south...way south'))
  }, [])
  console.log("dog",dog)
    return ( 
        <div className="doggos-title">
            <h1>Look at the doggos</h1>
        <div className="doggos">
            {dog.map(dog => {
                return <div key={dog}>
                <img src={dog} alt="dogs"></img>
                </div>
            })}
           
        </div>
        </div>
     );
}
 
export default DogAPI;