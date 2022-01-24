import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Bell as BellIcon } from '../../icons/bell';
import { UserCircle as UserCircleIcon } from '../../icons/user-circle';
import { Users as UsersIcon } from '../../icons/users';
import { userLogoutAction } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { getAccessToken } from '../../utils/accessTokenUtil';
import { useNavigate } from 'react-router';


const DashboardNavbarRoot = styled(AppBar)(() => ({
  backgroundColor:'#FFFFFF',
  boxShadow: '0px 1px 4px rgba(100, 116, 139, 0.12)'
}));

export const DashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(userLogoutAction());
    if(!getAccessToken()){
      navigate('/login');
    }
  }
  return (
    <>
      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280
          },
          width: {
            lg: 'calc(100% - 280px)'
          }
        }}
        {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <Tooltip title="Search">
            <IconButton sx={{ ml: 1 }}>
              <SearchIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="Contacts">
            <IconButton sx={{ ml: 1 }}>
              <UsersIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Notifications">
            <IconButton sx={{ ml: 1 }}>
              <Badge
                badgeContent={4}
                color="primary"
                variant="dot"
              >
                <BellIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip>
          <Avatar
            sx={{
              height: 40,
              width: 40,
              ml: 1
            }}
            src="/static/images/avatars/avatar_1.png"
          >
            <UserCircleIcon fontSize="small" onClick={handleLogOut} />
          </Avatar>
        </Toolbar>
      </DashboardNavbarRoot>
    </>
  );
};

DashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func
};