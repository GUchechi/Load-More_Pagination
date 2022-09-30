import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] =useState([]);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    fetch("https://jsonPlaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => setItems(data))
  }, [])

  const showMore = () => {
    setVisible((prevValue) => prevValue + 3)
  }

  return (
    <div className="App">
      <div className="container">
        {
          items.slice(0,visible).map((item) => (
            <div className="card">
              <div className="id">
                <span>{item.id}</span>
              </div>
              <p>{item.body}</p>
            </div>
          ))
        }
        <button onClick={showMore}>Load More</button>
      </div>
    </div>
  );
}

export default App;
