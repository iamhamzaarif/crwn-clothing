import React, {useEffect} from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route, Redirect} from 'react-router-dom';
import  ShopPage from './pages/shop/shoppage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './component/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utlis';
import CheckoutPage from '../src/pages/check-out/check-out.componnt' 
import './App.css';
import {connect} from 'react-redux'
import { checkUserSession } from './redux/user/user.action'
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from './redux/user/user.selector'
//import { selectCollectionsForPreview } from './redux/shop/shop.selector' 


const App = ({ checkUserSession, currentUser }) => 
{
  // unsubscribeFromAuth= null;
  
  useEffect(()=> {
    checkUserSession();

  }, [checkUserSession])

    
    
    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if(userAuth){
    //     const userRef  = await createUserProfileDocument(userAuth);

    //     userRef.onSnapshot(snapShot => {
    //       setCurrentUser ({
    //           id: snapShot.id,
    //           ...snapShot.data()
    //         })
    //       })
        
    //   }
    //     else{
    //       setCurrentUser (userAuth)
    //     //  addCollectiionAndDocument('collections', collectionsArray.map(({title,items}) => ({title, items})))
    //     }
    //   })
      
    
    
  

  // componentWillUnmount() 
  // {
  //   this.unsubscribeFromAuth();
  // }
    return (
      <div >
        <Header />
        <Switch>
        <Route  exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/checkout' component={CheckoutPage}/>
        <Route exact path='/signin' render={() => currentUser? (<Redirect to='/' />) : <SignInAndSignUpPage/>   }/>
         
        </Switch>
        
      </div>
    );
    
    
}
  

export const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
  
  
})

export const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})




export default connect(mapStateToProps, mapDispatchToProps)(App);
