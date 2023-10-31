import data from "/components/data/data.json";
const UserDetails = () => {
  return (
    <>
      <div>
        <div>Name: {data.name}</div>
        <div>Email: {data.email}</div>
        <div>Website: {data.website}</div>
        <div>
          <label>Country:</label>
          <select>
            {data.country.map((country) => {
              return (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
