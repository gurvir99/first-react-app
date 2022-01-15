import {useState, useEffect} from 'react';

function Shop() {
    
    //By using this, you tell React that your component needs to do something after render
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () =>{
        const data = await fetch('https://date.nager.at/api/v2/publicholidays/2020/US');
        const data2 = await data.json();
        console.log(data2);
        setItems(data2)
    };

    return (
      <div>
        {items.map(item =>(
            <h3>{item.name}</h3>
        ))};
      </div>
    );
  }
  
  export default Shop;