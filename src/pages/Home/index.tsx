import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import { Container, Posts, Post } from "./style";
import Header from "../../components/Header";
import IPostDTO from "../../dtos/IPostDTO";
import ICategoryDTO from "../../dtos/ICategoryDTO";
import ICommentsDTO from "../../dtos/ICommentsDTO";
import IUsersDTO from "../../dtos/IUsersDTO";

const Home: React.FC = () => {
  const [posts, setPosts] = useState<IPostDTO[]>([]);
  const [categories, setCategories] = useState<ICategoryDTO[]>([]);
  const [users, setUsers] = useState<IUsersDTO[]>([]);

  const history = useHistory();
  function showDetails(post_id: number) {
    history.push(`/details/${post_id}`);
  }

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const resultsJSON = await fetch("./data.json", {
      headers: {
        Accept: "application/json",
      },
    });
    const results = await resultsJSON.json();

    results.posts.forEach((post: IPostDTO) => {
      post.likes = 0;
      results.comments.forEach((comment: ICommentsDTO) => {
        if (post.id === comment.post && comment.like) {
          post.likes++;
        }
      });
    });

    results.posts.sort(function (a: IPostDTO, b: IPostDTO) {
      const date1 = Number(new Date(a.postedAt));
      const date2 = Number(new Date(b.postedAt));
      return date2 - date1;
    });

    setPosts(results.posts);
    setUsers(results.users);
    setCategories(results.categories);
  }

  return (
    <>
      <Header
        title="Home"
        description="Encontre aqui suas postagens favoritas."
      />
      <Container>
        <Posts>
          {posts.map((post) => (
            <Post key={post.id}>
              <section>
                <div>
                  {users.map(
                    (user) =>
                      post.postedBy === user.id && (
                        <img key={user.id} src={user.picture} />
                      )
                  )}
                </div>
                <div>
                  <img src="https://images.vexels.com/media/users/3/144097/isolated/preview/3dedcd235214cdde6b4e171fdbf66c9d---cone-de-cora----o-by-vexels.png" />
                  <p>{post.likes}</p>
                </div>
              </section>
              <h3>{post.title}</h3>
              <div>
                <p>
                  Data: {new Date(post.postedAt).toLocaleDateString("pt-br")}
                </p>
                {categories.map(
                  (category) =>
                    post.category === category.id && (
                      <p key={category.id}>Categoria: {category.name}</p>
                    )
                )}
              </div>
              <button onClick={() => showDetails(post.id)}>
                Abrir detalhes
              </button>
            </Post>
          ))}
        </Posts>
      </Container>
    </>
  );
};

export default Home;
