const AddUser = () => {
  return (
    <form>
      <label>UserName</label>
      <input id="username" type="text" />
      <label htmlFor="username">Age</label>
      <input type="number" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
