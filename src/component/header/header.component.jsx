import React from 'react';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import {LogoContainer, HeaderContainer, OptionLink, OptionsCOntainer} from './header.styles'
import {createStructuredSelector} from 'reselect'
import {selectHidden} from '../../redux/cart/cart.selector'
import {selectCurrentUser} from '../../redux/user/user.selector'
import CartIcon from '../card-icon/card-icon.component'
import {auth} from '../../firebase/firebase.utlis'

const Header = ({currentUser, hidden}) =>
(
    <HeaderContainer >
        <LogoContainer to="/">
            <Logo className="Logo"/>
        </LogoContainer>
        <OptionsCOntainer>
            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/'>CONTACTS</OptionLink>
            {
                currentUser ?
                <OptionLink as='div' onClick= {() => auth.signOut()}>SIGN OUT</OptionLink>
              :
              <OptionLink to='/signIn'>SIGN IN</OptionLink>
            }
          <CartIcon/>

        </OptionsCOntainer>
    {
            hidden? null:
            <CartDropDown/>


    }
    </HeaderContainer>
)
const mappStateToProps =  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectHidden
})



export default connect(mappStateToProps)(Header);