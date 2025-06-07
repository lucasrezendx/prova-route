import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Typography, Container, Paper } from "@mui/material";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const handlePostClick = (id) => {
    window.open(`/dados/${id}`, "_blank");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Lista de Posts
      </Typography>
      <Paper>
        <List>
          {posts.map((post) => (
            <ListItem
              button
              key={post.id}
              onClick={() => handlePostClick(post.id)}
              divider
            >
              <ListItemText
                primary={post.title}
                secondary={post.body}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default PostList;