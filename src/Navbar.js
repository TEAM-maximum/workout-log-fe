import {
  Grid,
  Button,
  AppBar,
  Toolbar,
 
} from "@material-ui/core";
import { signout } from "./service/ApiService"; // signout 추가

const Navbar = () => {
    return (
        <AppBar position="static">
        <Toolbar>
        <Grid justify="space-between" container>
            <Grid item >
            <Button href="/" color="inherit"> 오운</Button>
            </Grid>

            <Grid>
             <Button href="/todo" color="inherit"> Todo</Button>
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