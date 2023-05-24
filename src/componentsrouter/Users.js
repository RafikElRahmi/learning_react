import React from 'react'
import { NavLink, Outlet, useParams, useSearchParams } from 'react-router-dom';

const Users = () => {
    const [SearchParams, setSearchParams] = useSearchParams()
    const activeUser = SearchParams.get('filter') === 'active'
    const params = useParams()
    const id = params.id
  return (
    <nav>
      <NavLink to={id}>user</NavLink>
      {"  "}
      <NavLink to="admin">admin</NavLink>
      <Outlet />
      <button onClick={() => setSearchParams({ filter: "active" })}>
        {" "}
        on{" "}
      </button>
          <button onClick={() => setSearchParams({})}>reset</button>
          <div>
            {activeUser ? <div>
                active users
            </div>:<div>
                all users
            </div>}
          </div>
    </nav>
  );
}

export default Users