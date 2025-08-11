import { Box, Button, Grid, Paper, TextField, Typography, IconButton, InputAdornment } from "@mui/material";
import { LOGIN_PAGE_IMAGE_URL } from "../data/constants";
import LoginIcon from "@mui/icons-material/Login";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });

  const [showPassword,setShowPassword] = useState(false);

  const onHandleLoginFormSubmit = (e) => {
    e.preventDefault();
    setUserCredentials({
      username:'',
      password:''
    })
  };

  return (
    <Box>
      <Box
        margin={4}
        p={2}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LEFT SECTION */}
        <Box
          component={"img"}
          alt="login image"
          src={LOGIN_PAGE_IMAGE_URL}
          sx={{
            width: "48%",
          }}
        />
        {/* RIGHT SECTION */}
        <Box
          component="form"
          onSubmit={onHandleLoginFormSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "32%",
            mx: "auto",
          }}
        >
          <TextField
            label="Username"
            variant="outlined"
            required
            value={userCredentials.username}
            onChange={(e) =>
              setUserCredentials({
                ...userCredentials,
                username: e.target.value,
              })
            }
          />
          <TextField
            label="Password"
            variant="outlined"
            required
            type={showPassword ? "text" : "password"}
            value={userCredentials.password}
            onChange={(e) =>
              setUserCredentials({
                ...userCredentials,
                password: e.target.value,
              })
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword((prev) => !prev)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button variant="contained" endIcon={<LoginIcon />} type="submit">
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
