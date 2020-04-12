import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import './header.styles.scss';
import {createStructuredSelector} from 'reselect'
import {selectHidden} from '../../redux/cart/cart.selector'
import {selectCurrentUser} from '../../redux/user/user.selector'
import CartIcon from '../card-icon/card-icon.component'
import {auth} from '../../firebase/firebase.utlis'

const Header = ({currentUser, hidden}) =>
(
    <div className='header'>
        <Link to="/">
            <Logo className="Logo"/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/'>CONTACTS</Link>
            {
                currentUser ?
                <div className='option' onClick= {() => auth.signOut()}>SIGN OUT</div>
              :
              <Link className='option' to='/signIn'>SIGN IN</Link>
            }
          <CartIcon/>

        </div>
    {
            hidden? null:
            <CartDropDown/>


    }
    </div>
)
const mappStateToProps =  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden
})



export default connect(mappStateToProps)(Header);