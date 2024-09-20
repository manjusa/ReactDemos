export const MovieComponent = ({ item }) => {
  const { original_name, profile_path, popularity } = item;
  const imageUrl = `https://image.tmdb.org/t/p/w500${profile_path}`;
  return (
    <div className="card mb-4" style={{ width: "18em" }}>
      <img src={imageUrl} className="card-img-top" alt={original_name} />
      <div className="card-body">
        <h5 className="card-title">{original_name}</h5>
        <p className="card-text"> Populairty is {popularity}</p>
      </div>
    </div>
  );
};
