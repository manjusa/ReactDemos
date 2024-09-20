import "./App.css";
import { useState, useRef, useEffect } from "react";
import { MovieComponent } from "./MovieComponent";
function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const YOUR_API_KEY = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjRkODE3YzViN2JjMjA1M2I4NzIwNzAxYjM1NjJmNSIsIm5iZiI6MTcyNjY0NDE2My45Njg4MDksInN1YiI6IjY2ZTkzYzA3YjI5MTdlYjE4MDBhYjFjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hKDHMnIVPDAQQ4CqxHUAB2rSen7IL8ZDBv-n_4uJcho`;
  useEffect(() => {
    fetchMovies();
  }, [page]);

  const fetchMovies = async () => {
    setLoading(true);
    const url = `https://api.themoviedb.org/3/person/popular?language=en-US&page=${page}`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + YOUR_API_KEY,
      },
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`Response status: ${response.status}`);

      const json = await response.json();
      setData(json.results);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((page) => page + 1);
        }
      },
      { threshold: 0.1 }
    );
    if (observerTarget.current) {
      const x = observerTarget.current;
      observer.observe(observerTarget.current);
      console.log("Observer:", observerTarget.current);
    }
    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
        console.log("Unobserver:", observerTarget.current); //stopping observation
      }
    };
  }, []);
  const observerTarget = useRef(null);
  return (
    <div className="App container">
      {!loading &&
        Array.isArray(data) &&
        data.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <MovieComponent item={item}></MovieComponent>
          </div>
        ))}
      <div
        ref={observerTarget}
        className="col-12 text-center"
        style={{
          backgroundColor: "orange",
          color: "black",
          fontWeight: "bold",
        }}
      >
        Loading ...
      </div>
    </div>
  );
}

export default App;
