import Nav from "./components/Nav";
import ContentContainer from "./components/ContentContainer";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Main = () => {
  return (
    <Box padding={"20px"} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Nav />
        </Grid>

        <Grid item xs={8}>
          <ContentContainer />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
