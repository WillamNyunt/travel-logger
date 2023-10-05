import React from 'react'
import '../../scss/Widgets/AccountBar.scss';
import { useSelector, useDispatch } from 'react-redux';

function AccountBar() {

  const user = useSelector(state => state.user.user); 

  return (
    <div className="accountBar">
        {user.name}
        <div className="accountBar__thumbnail">
            <span>WN</span>
        </div>
    </div>
  )
}

export default AccountBar;
