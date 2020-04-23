import ShopActionTypes from './shop.types'
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utlis'

export const fetchCollectionsStart = () =>
({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
})

export const fetchCollectionsSucess = collectionsMap =>({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage =>({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCESS,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () =>
{
    return dispatch =>{ 
        const collectionRef = firestore.collection("collections")
        dispatch(fetchCollectionsStart())

        collectionRef.get().then(snapshot => {
       const collectionsMap = convertCollectionSnapshotToMap(snapshot)
        dispatch (fetchCollectionsSucess(collectionsMap))
      // this.setState({loading: false})
      }).catch(error => dispatch(fetchCollectionsFailure(error.message)))

    }
}