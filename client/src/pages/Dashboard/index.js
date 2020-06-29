import React, { useEffect, useState, useCallback } from "react";
import api from "../../service/api";
import User from "../../components/User";
import Post from "../../components/Post";
import {
  Container,
  UsersList,
  PostList,
  UsersContainer,
  PostsContainer,
  Title,
} from "./style";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [usersPosts, setUsersPosts] = useState([]);
  const [userSelected, setUserSelected] = useState(null);

  useEffect(() => {
    try {
      async function loadUsers() {
        const { data } = await api.get("users");
        setUsers(data);
      }
      async function loadPosts() {
        const { data } = await api.get("posts");
        setPosts(data);
      }
      loadUsers();
      loadPosts();
    } catch (err) {
      alert("Erro ao buscar os dados" + err.message);
    }
  }, []);

  const handleSelect = useCallback(
    (user) => {
      if (userSelected && userSelected.id === user.id) {
        setUserSelected(null);
        return;
      }
      const postsData = posts.filter((u) => u.userId === user.id);
      setUsersPosts(postsData);
      setUserSelected(user);
    },
    [userSelected, posts]
  );

  return (
    <Container>
      <UsersContainer>
        <Title>Grupo</Title>
        <UsersList>
          {users.map((user) => (
            <User
              key={user.id}
              data={user}
              handleSelect={() => handleSelect(user)}
              isSelected={userSelected ? user.id === userSelected.id : false}
            />
          ))}
        </UsersList>
      </UsersContainer>

      <PostsContainer>
        <Title>Posts</Title>
        <PostList>
          {userSelected
            ? usersPosts.map((post) => <Post key={post.id} data={post} />)
            : posts.map((post) => <Post key={post.id} data={post} />)}
        </PostList>
      </PostsContainer>
    </Container>
  );
};

export default Dashboard;
