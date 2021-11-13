import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, ListItem, ListItemButton } from '@mui/material';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import Pay from '../UsersSection/Pay';
import MyOrders from '../UsersSection/MyOrders';
import MyReview from '../UsersSection/MyReview';
import DashBoardHome from './DashBoardHome';
import useAuth from '../../hooks/useAuth';
import AllOrders from '../AdminSection/AllOrders/AllOrders';
import AddProduct from '../AdminSection/AddProduct/AddProduct';
import MakeAdmin from '../AdminSection/MakeAdmin/MakeAdmin';
import ManageProduct from '../AdminSection/ManageProduct/ManageProduct';
import NotFound from '../../Shared/404/NotFound'
const drawerWidth = 200;

function ResponsiveDrawer(props) {
  // a drawer for nested button 
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const{logOut,isAdmin}=useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  let { path, url } = useRouteMatch();
  

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      {/* a normal user will see that section  */}
      {!isAdmin && <List>
      <ListItem >  
          <ListItemButton>
              <Link to={`${url}/pay`}  
              style={{textDecoration:'none'}} >
                 <Button style={{backgroundImage:'linear-gradient(to right, #4195FF , #7989FC)',color:'white'}}>Pay</Button>
              </Link> 
           </ListItemButton>
       </ListItem>
      <ListItem> 
           <ListItemButton>
               <Link to={`${url}/myorders` } 
               style={{textDecoration:'none'}}>
                   <Button style={{backgroundImage:'linear-gradient(to right, #4195FF , #7989FC)',color:'white'}}>My Orders</Button>
                </Link>
            </ListItemButton>
        </ListItem>
      <ListItem>  
          <ListItemButton> 
              <Link to={`${url}/myreview`} 
              style={{textDecoration:'none'}}>
                  <Button style={{backgroundImage:'linear-gradient(to right, #4195FF , #7989FC)',color:'white'}}>Review</Button>
                </Link> 
            </ListItemButton>
        </ListItem>
       <ListItem >  
           <ListItemButton>
               <Link to='/'
               style={{textDecoration:'none'}}
               ><Button  style={{backgroundImage:'linear-gradient(to right, #4195FF , #7989FC)',color:'white'}}>Home</Button> </Link>
               </ListItemButton>
               </ListItem>
       <ListItem>  
           <ListItemButton>
               <Button style={{backgroundImage:'linear-gradient(to right, #4195FF , #7989FC)',color:'white'}} onClick={logOut}>LogOut</Button> 
               </ListItemButton>
               </ListItem>
       
      </List>}
      <Divider />
      {/* only an admin will see that part   */}
      {isAdmin && <List>
      <ListItem>  
           <ListItemButton>
               <Link to={`${url}/allorder`} 
               style={{textDecoration:'none'}}
               ><Button style={{backgroundImage:'linear-gradient(to right, #4195FF , #7989FC)',color:'white'}}>Manage All Orders</Button> </Link>
               </ListItemButton>
               </ListItem>
               <ListItem>  
           <ListItemButton>
               <Link to={`${url}/addaproduct`} 
               style={{textDecoration:'none'}}
               ><Button style={{backgroundImage:'linear-gradient(to right, #4195FF , #7989FC)',color:'white'}}>Add A Product</Button> </Link>
               </ListItemButton>
               </ListItem>
               <ListItem>  
           <ListItemButton>
               <Link to={`${url}/makeadmin`} 
               style={{textDecoration:'none'}}
               ><Button style={{backgroundImage:'linear-gradient(to right, #4195FF , #7989FC)',color:'white'}}>Make Admin</Button> </Link>
               </ListItemButton>
               </ListItem>
               <ListItem>  
           <ListItemButton>
               <Link to={`${url}/manageproduct`} 
               style={{textDecoration:'none'}}
               ><Button style={{backgroundImage:'linear-gradient(to right, #4195FF , #7989FC)',color:'white'}}>Manage Product</Button> </Link>
               </ListItemButton>
               </ListItem>
               <ListItem>  
           <ListItemButton >
               <Link to='/'
               style={{textDecoration:'none'}}
               ><Button  style={{backgroundImage:'linear-gradient(to right, #4195FF , #7989FC)',color:'white'}}>Home</Button> </Link>
               </ListItemButton>
               </ListItem>
               <ListItem>  
           <ListItemButton>
               <Button style={{backgroundImage:'linear-gradient(to right, #4195FF , #7989FC)',color:'white'}} onClick={logOut}>LogOut</Button> 
               </ListItemButton>
               </ListItem>
      </List>}
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
       
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {/* for normal user  */}
        {isAdmin && <Switch>
          <Route exact path={path}>
              <DashBoardHome></DashBoardHome>
            </Route>
            <Route  path={`${path}/allorder`}>
             <AllOrders></AllOrders>
            </Route>
            <Route path={`${path}/addaproduct`}>
            <AddProduct></AddProduct>
            </Route>
            <Route path={`${path}/makeadmin`}>
            <MakeAdmin></MakeAdmin>
            </Route>
            <Route path={`${path}/manageproduct`}>
            <ManageProduct></ManageProduct>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
        </Switch>}
        {/* only for admin  */}
        {!isAdmin &&
            <Switch>
            <Route exact path={path}>
              <DashBoardHome></DashBoardHome>
            </Route>
            <Route  path={`${path}/pay`}>
              <Pay></Pay>
            </Route>
            <Route path={`${path}/myorders`}>
             <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/myreview`}>
            <MyReview></MyReview>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        }
        
        <Typography paragraph>
         
        </Typography>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
