import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNews, getSearchNews, setCategory } from "../features/newsSlice";
import { useNavigate } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Container, Switch } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  ".MuiInputBase-root": {
    width: "100%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "default",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const Header = ({ toggleDark, settoggleDark }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState("general");
  const [query, setQuery] = useState("");

  const handleChange = (e, value) => {
    e.preventDefault();
    dispatch(getNews(value));
    dispatch(setCategory(e.target.textContent));
    setValue(value);
    setQuery("");
    value === "general" ? navigate("/") : navigate(`/${value}`);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      dispatch(getSearchNews(query));
      setValue(0);
      dispatch(setCategory(`Search : ` + query));
    }
  };

  const handleChangeSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleModeChange = () => {
    settoggleDark(!toggleDark);
  };

  return (
    <>
      <AppBar
        elevation={0}
        position="sticky"
        color="default"
        sx={{ padding: "10px 30px 0px 30px" }}
        enableColorOnDark
      >
        {/* <Toolbar component="nav"> */}
        <Stack spacing={1}>
          <Grid container spacing={0}>
            <Grid item lg={2} sm={12}>
              <Typography
                variant="h5"
                noWrap
                component="div"
                sx={{
                  fontFamily: "Roboto",
                  marginTop: "1rem",
                  flexGrow: 1,
                  alignSelf: "flex-end",
                }}
              >
                REA4C Berita
              </Typography>
            </Grid>
            <Grid item lg={8} sm={12} align="center">
              <Box
                sx={{
                  width: "70%",
                  display: "block",
                  textAlign: "left",
                }}
              >
                <Search sx={{ boxShadow: "0 0 1px 1px rgba(0,0,0,0.4)" }}>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    value={query}
                    onChange={handleChangeSearch}
                    onKeyDown={handleSearch}
                    placeholder="Telusuri topik, lokasi & sumber"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Box>
            </Grid>
            <Grid item lg={2}>
              <Box display="flex" justifyContent="flex-end" alignItems="center">
                {/* <IconButton size="large" aria-label="display more actions" checked={toggleDark} onChange={handleModeChange} name="toggleDark" edge="end" color="inherit"> */}
                {toggleDark ? <DarkModeIcon /> : <LightModeIcon />}
                {/* </IconButton> */}
                <Switch
                  checked={toggleDark}
                  onChange={handleModeChange}
                  name="toggleDark"
                  color="default"
                />
              </Box>
            </Grid>
          </Grid>
          <Container sx={{ display: "flex", justifyContent: "center" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
            >
              <Tab disableRipple value="general" label="Indonesia" />
              <Tab disableRipple value="business" label="Bisnis" />
              <Tab disableRipple value="technology" label="Teknologi" />
              <Tab disableRipple value="sports" label="Olahraga" />
              <Tab disableRipple value="science" label="Sains" />
              <Tab disableRipple value="health" label="Kesehatan" />
            </Tabs>
          </Container>
        </Stack>
      </AppBar>
    </>
  );
};

export default Header;
