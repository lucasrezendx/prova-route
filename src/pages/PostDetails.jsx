import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Paper, CircularProgress } from "@mui/material";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Busca o post
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        // Busca o usuário do post
        return fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`);
      })
      .then((res) => res.json())
      .then((userData) => {
        setUser(userData);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (!post) {
    return (
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h6">Post não encontrado.</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          {post.title}
        </Typography>
        <Typography variant="body1">{post.body}</Typography>
        <Typography variant="caption" display="block" sx={{ mt: 2 }}>
          ID do post: {post.id}
        </Typography>
        {user && (
          <>
            <Typography variant="h6" sx={{ mt: 3 }}>
              Dados do Usuário
            </Typography>
            <Typography>Nome: {user.name}</Typography>
            <Typography>Email: {user.email}</Typography>
            <Typography>Username: {user.username}</Typography>
            <Typography>Telefone: {user.phone}</Typography>
            <Typography>Website: {user.website}</Typography>
          </>
        )}
      </Paper>
    </Container>
  );
}

export default PostDetails;