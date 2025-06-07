import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  Paper,
  Divider,
  Box,
} from "@mui/material";

function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        return fetch(
          `https://jsonplaceholder.typicode.com/users/${data.userId}`
        );
      })
      .then((res) => res.json())
      .then((userData) => {
        setUser(userData);
        setLoading(false);
      });
  }, [id]);


  if (!post) {
    return (
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Typography variant="h6">Post não encontrado.</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom color="primary">
          {post.title}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {post.body}
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="subtitle2" color="text.secondary">
          ID do post: {post.id}
        </Typography>
        {user && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" gutterBottom>
              Dados do Usuário
            </Typography>
            <Typography>Nome: {user.name}</Typography>
            <Typography>Email: {user.email}</Typography>
            <Typography>Username: {user.username}</Typography>
            <Typography>Telefone: {user.phone}</Typography>
            <Typography>Website: {user.website}</Typography>
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default PostDetails;