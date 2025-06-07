import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Container,
  Paper,
  Divider,
  CircularProgress,
} from "@mui/material";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  const handlePostClick = (id) => {
    window.open(`/dados/${id}`, "_blank");
  };

  

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Lista de Posts
      </Typography>
      <Paper elevation={3} sx={{ p: 2 }}>
        <List>
          {posts.map((post, idx) => (
            <React.Fragment key={post.id}>
              <ListItem
                button
                onClick={() => handlePostClick(post.id)}
                sx={{
                  "&:hover": { backgroundColor: "#f5f5f5" },
                  borderRadius: 1,
                  mb: 1,
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="h6" color="primary">
                      {post.title}
                    </Typography>
                  }
                  secondary={post.body}
                />
              </ListItem>
              {idx < posts.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </Container>
  );
}

export default PostList;