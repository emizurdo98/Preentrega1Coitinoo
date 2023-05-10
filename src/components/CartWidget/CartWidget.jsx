import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import {useContext} from 'react';
import {cartContext} from '../../context/cartContext';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

function CartWidget(props) {
  const { getTotalItemCount } = useContext(cartContext);

    return (
      <>
      <Link to="/cart">
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={getTotalItemCount()} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </Link>
      </>
    );
  }
  
  export default CartWidget;