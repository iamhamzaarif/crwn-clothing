import React from 'react';
import './directory-item.styles.scss';
import {createStructuredSelector} from 'reselect'
import {selectDirectorySections} from '../../redux/directory/directory.selectors'
import {connect } from 'react-redux'

import MenuItem from '../menu-item/menu-item.componeny';

const DirectoryItem =({sections})=> {
    return(
        <div className='directory-menu'>
            {
                sections.map(({id, ...otherSectionprops}) =>(
                    <MenuItem key={id} {...otherSectionprops}/>
                ))
            }
            </div>
    )
}


const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(DirectoryItem);