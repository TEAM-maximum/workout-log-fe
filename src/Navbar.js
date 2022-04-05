import "./App.css";
import {
  Grid,
  Button,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { signout } from "./service/ApiService"; // signout 추가

const Navbar = () => {
    return (
        <AppBar position="static">
        <Toolbar>
        <Grid justify="space-between" container>
            <Grid item>
            <Typography variant="h6">오늘의 할일</Typography>
            </Grid>
            <Grid>
            <Button color="inherit" onClick={signout}>
                로그아웃
            </Button>
            </Grid>
        </Grid>
        </Toolbar>
        </AppBar>
    )
}

export default Navbar;