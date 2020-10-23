import React, { useEffect, useState } from "react";
import Header from "../../components/Header";

import "../../globalStyle";
import { User, UsersContainer } from "./style";
import IUsersDTO from "../../dtos/IUsersDTO";

const Users: React.FC = () => {
  const [users, setUsers] = useState<IUsersDTO[] | null>(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const resultsJSON = await fetch("../data.json", {
      headers: {
        Accept: "application/json",
      },
    });
    const results = await resultsJSON.json();

    results.users.sort(function (a: IUsersDTO, b: IUsersDTO) {
      const date1 = Number(new Date(a.joinedAt));
      const date2 = Number(new Date(b.joinedAt));
      return date2 - date1;
    });

    setUsers(results.users);
  }

  return (
    <>
      <Header
        title="Usuários"
        description="Veja abaixo todos os usuários cadastrados."
      />
      <UsersContainer>
        {users &&
          users.map((user) => (
            <User key={user.id}>
              <div>
                <img src={user.picture} />
              </div>
              <div>
                <p>{user.name}</p>
                <p>Profissão: {user.job}</p>
                <p>
                  Perfil criado desde:{" "}
                  {new Date(user.joinedAt).toLocaleDateString("pr-br")}
                </p>
              </div>
            </User>
          ))}
      </UsersContainer>
    </>
  );
};

export default Users;
