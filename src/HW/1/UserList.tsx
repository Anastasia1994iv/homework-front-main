type AddressType = {
  street: string;
  city: string;
};

type UserType = {
  id: number
  name: string
  age: number
  address: AddressType
};

type UserListPropsType = {
  users: UserType[]; // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

export const UserList = (props: UserListPropsType) => {

  const { users } = props;
  const mappedUsers = users.length ?
    users.map((el) => {
      return (
        <li key={el.id} id={`hw01-user-${el.id}`}>
          <strong>{el.name}</strong> (Age: {el.age})<strong> Address:</strong>
          {el.address.street}, {el.address.city}
        </li>
      )
    }) :

    <div>Нет данных</div>

  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>

      <ul>
        {mappedUsers}
        {/* {props.users.map((user) => (
          <li key={user.id} id={`hw01-user-${user.id}`}>
            <strong>{user.name}</strong> (Age: {user.age})<strong> Address:</strong>
            {user.address.street}, {user.address.city}
          </li>
        ))} */}
      </ul>
    </div >
  )}