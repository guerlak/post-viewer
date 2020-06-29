import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;
export const UsersContainer = styled.div`
  min-width: 250px;
  width: 25%;
`;

export const UsersList = styled.ul`
  height: 90vh;
  margin-top: 10px;
  overflow-y: auto;
  list-style: none;
`;

export const PostsContainer = styled.div`
  background-color: ;
  list-style: none;
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #eee;
`;

export const PostList = styled.ul`
  margin-top: 15px;
  height: 86vh;
  width: 70%;
  min-width: 400px;
  margin-left: 50px;
  overflow-y: scroll;
  list-style: none;
`;
export const Title = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #048b8b;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  padding: 30px;
  border-left: solid 1px #fff;
  /* font-size: 25px; */
`;
