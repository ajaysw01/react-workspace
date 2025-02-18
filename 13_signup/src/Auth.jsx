import { Box, Button, TextField, Typography } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";
import { useState } from "react";

const Auth = () => {
  const [isRegister, setRegister] = useState(false);
  const [inputSt, setInputState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputSt);
  };

  const resetState = () => {
    setRegister(!isRegister);
    setInputState({ name: "", email: "", password: "" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems={"center"}
          justifyContent={"center"}
          margin={"auto"}
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20xp #ccc",
            },
          }}
        >
          <Typography variant="h4" padding={3} textAlign={"center"}>
            {!isRegister ? "Login Form " : "Registration form "}
          </Typography>
          {isRegister && (
            <TextField
              name="name"
              value={inputSt.name}
              margin={"normal"}
              type="text"
              variant="outlined"
              placeholder="Name"
              onChange={handleChange}
            />
          )}
          <TextField
            name="email"
            value={inputSt.email}
            margin={"normal"}
            type="email"
            variant="outlined"
            placeholder="Email"
            onChange={handleChange}
          />
          <TextField
            value={inputSt.password}
            name="password"
            margin={"normal"}
            type="password"
            variant="outlined"
            placeholder="Password"
            onChange={handleChange}
          />
          <Button
            endIcon={
              isRegister ? <HowToRegOutlinedIcon /> : <LoginOutlinedIcon />
            }
            type="submit"
            variant="contained"
            color="warning"
            sx={{ marginTop: 3, borderRadius: 3 }}
          >
            {isRegister ? "Register" : "Login"}
          </Button>

          <Button
            endIcon={
              !isRegister ? <HowToRegOutlinedIcon /> : <LoginOutlinedIcon />
            }
            onClick={resetState}
          >
            {!isRegister ? "Go to register" : "Go to login"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
