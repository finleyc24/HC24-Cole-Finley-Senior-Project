// Creates the page for the Alumni Stadium EAPs

import data from "/components/data/data.json";

const AlumniStadium = () => {
  return (
    <>
      <div>
        <div>Venue: {data.venue}</div>
        <div>Sport: {data.sport}</div>
        <div>Address: {data.address}</div>
        <div>
          <label>EAP Type:</label>
          <select>
            {data.actionPlan.map((actionPlan) => {
              return (
                <option key={actionPlan.id} value={actionPlan.id}>
                  {actionPlan.name}
                </option>
              );
            })}
          </select>
          <script>getElementById</script>
        </div>
      </div>
    </>
  );
};

export default AlumniStadium;
