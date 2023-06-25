import "./Event.scss";
import useEvent from "./useEvent";

export const Event = () => {
  const { data } = useEvent();

  return (
    <div className="event-container">
      <div className="date-and-type">
        <h2 className="date">{data?.date}</h2>
        <p className="type">{data?.type}</p>
      </div>

      <div className="time">
        <p className="start">Début du match : {data?.start_at}</p>
        <p className="end">Fin du match : {data?.end_at}</p>
      </div>

      <div className="teams">
        <h4 className="p-0">{data?.left_team.name}</h4>
        <div className="scores">
          <p className="green-col p-0">{data?.left_team.score}</p>
          <p className="p-0">-</p>
          <p className="red-col p-0">{data?.right_team.score}</p>
        </div>
        <h4 className="p-0">{data?.right_team.name}</h4>
      </div>
    </div>
  );
};
