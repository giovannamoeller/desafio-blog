import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import Header from "../../components/Header";

import "../../globalStyle";
import { Post, Comments, Container, CommentContainer } from "./style";
import IPostDTO from "../../dtos/IPostDTO";
import ICategoryDTO from "../../dtos/ICategoryDTO";
import ICommentsDTO from "../../dtos/ICommentsDTO";
import IUsersDTO from "../../dtos/IUsersDTO";

interface IParams {
  id: string;
}

const Details: React.FC = () => {
  const [post, setPost] = useState<IPostDTO | null>(null);
  const [category, setCategory] = useState<ICategoryDTO | null>(null);
  const [user, setUser] = useState<IUsersDTO | null>(null);
  const [users, setUsers] = useState<IUsersDTO[] | null>(null);
  const [comments, setComments] = useState<ICommentsDTO[] | null>(null);

  const { params } = useRouteMatch<IParams>();
  const post_id = Number(params.id);

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
    const findPost = results.posts.find(
      (post: IPostDTO) => post.id === post_id
    );
    const findCategory = results.categories.find(
      (category: ICategoryDTO) => category.id === findPost.category
    );
    const findUser = results.users.find(
      (user: IUsersDTO) => user.id === findPost.postedBy
    );
    const findComments = results.comments.filter(
      (comment: ICommentsDTO) => comment.post === findPost.id
    );

    results.comments.sort(function (a: ICommentsDTO, b: ICommentsDTO) {
      const date1 = Number(new Date(a.postedAt));
      const date2 = Number(new Date(b.postedAt));
      return date2 - date1;
    });

    setPost(findPost);
    setCategory(findCategory);
    setUser(findUser);
    setComments(findComments);
    setUsers(results.users);
  }

  return (
    <>
      <Header title="Detalhes" description="Veja abaixo os detalhes do post." />
      <Container>
        {post && category && user && (
          <Post>
            <div>
              <img src={user.picture} />
              <section>
                <h1>{post.title}</h1>
                <p>Postado por: {user.name}</p>
                <p>Categoria: {category.name}</p>
              </section>
            </div>
            <p>{post.body}</p>
          </Post>
        )}
        {comments && users && (
          <>
            <h1>Comentários</h1>
            <CommentContainer>
              {comments.map((comment) => (
                <Comments key={comment.id}>
                  <div>
                    {users.map(
                      (user) =>
                        user.id === comment.author && (
                          <img key={user.id} src={user.picture} />
                        )
                    )}
                  </div>
                  <div>
                    <p>{comment.content}</p>
                    <p>
                      Data:{" "}
                      {new Date(comment.postedAt).toLocaleDateString("pt-br")}
                    </p>
                    {users.map(
                      (user) =>
                        user.id === comment.author && (
                          <p key={user.id}>Autor: {user.name}</p>
                        )
                    )}
                  </div>
                </Comments>
              ))}
            </CommentContainer>
          </>
        )}
      </Container>
    </>
  );
};

export default Details;
