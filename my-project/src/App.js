import './App.css';
import HotelPost from './HotelPost';


function App () {
  let hotels = [
    { name: "Barcelo", pays: "Morocco" },
    { name: "Africa", pays: "Tunisie" }
  ]
  hotels = new Array(80).fill({ 
    name: "Africa", pays: "Tunisie"
  })
  return (
    <div className="App">
      {
        hotels.map(hotel => (
            <HotelPost name={hotel.name}
              pays={hotel.pays} />
          )
        )
      }
    </div>
  );
}

export default App;
