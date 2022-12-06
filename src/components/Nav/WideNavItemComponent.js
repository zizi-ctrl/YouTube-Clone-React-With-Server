import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeNav } from '../../redux/action'

import { useRecoilState } from 'recoil'
import { selectNavState } from '../../recoil/youtubeState'

const WideNavItemComponent = (props) => {
    const { data } = props
    const { src, name } = data 

    //const dispatch = useDispatch()
    
    //const selectedNav = useSelector(state => state.selectNav)
    const [ selectedNav, setSelectedNav ] = useRecoilState(selectNavState)

    const clickNavEvent = (e) => {
        const target = e.target
        if (target.className == 'nav_item'){
            const value = target.children[1].innerHTML

            setSelectedNav(value)
            //dispatch(changeNav(value))
        }
    }

    return(
        <React.Fragment>
        {
            name == selectedNav && 
            <div className='nav_item selected'>
                <img className='nav_icon' src={require('../../img/'+src)}/>
                <div className='nav_item_text'>
                    {name}
                </div>
            </div> ||
            name != selectedNav && 
            <div className='nav_item' onClick={clickNavEvent}>
                <img className='nav_icon' src={require('../../img/'+src)}/>
                <div className='nav_item_text'>
                    {name}
                </div>
            </div>
        }
        </React.Fragment>
    )   
}


export default WideNavItemComponent