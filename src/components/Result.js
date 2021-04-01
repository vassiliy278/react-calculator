import "../App.css";
const Result = ({ log, resultNumber }) => {
  return (
    <div className="result_wrapper">
      {log.length > 18 ? <p className="small_cyfrals">{log}</p> : <p>{log}</p>}
      <p id="preresult_field">{resultNumber}</p>
    </div>
  );
};

export default Result;
