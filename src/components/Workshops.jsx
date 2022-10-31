import { getWorkshops } from "../api";

export default function Workshops() {
  const workshops = getWorkshops();

  return (
    <div className="container">
      <h1>Workshop Categories</h1>
      <ul className="workshops">
        {workshops.map((workshop) => (
          <li key={workshop.id}>{workshop.name}</li>
        ))}
      </ul>
    </div>
  );
}
