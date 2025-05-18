import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Badge,
  badgeClasses,
  Drawer,
  List,
  ListItem,
  ListItemText,
  styled,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router";

const navItems = [{ name: "Shop", url: '/shop' }, { name: "About Us", url: '/aboutus' }, { name: "Login", url: '/login' }];

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export default function ButtonAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [searchItem, setSearchItem] = React.useState('')
  const navigate = useNavigate()

  const drawer = (
    <Box onClick={() => setDrawerOpen(false)} sx={{ width: 250 }}>
      <List>
        {navItems.map((item) => (
          <ListItem button key={navItems.indexOf(item)}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="white">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon sx={{ display: { xs: "flex", sm: "none" } }} />
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            {drawer}
          </Drawer>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            color="green"
            onClick={() => navigate('/')}
            className="cursor-pointer"
          >
            Sarah's Crochet Hub
          </Typography>

          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Button key={navItems.indexOf(item)} color="green" onClick={() => navigate(`/${item.url}`)}>
                {item.name}
              </Button>
            ))}
          </Box>
          <TextField id="filled-basic" label="Search Something" variant="filled" onChange={(e) => setSearchItem(e.target.value)} />
          <IconButton>
            <SearchIcon onClick={() => {navigate(`/shop/search/${searchItem}`); console.log(searchItem)}}/>
          </IconButton>
          <IconButton>
            <ShoppingCartIcon />
            <CartBadge badgeContent={2} color="primary" overlap="cirular" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
