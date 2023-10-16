import React from 'react'
import '../../scss/Widgets/AccountBar.scss';
import { useSelector } from 'react-redux';
import AccountModal from '../Modal/AccountModal';
import { useState, useEffect } from 'react';
import { set } from 'date-fns';

function AccountBar() {
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const user = useSelector(state => state.user.user); 

  const getInitials = (name) => {
    if (name) {
      const nameArr = name.split(' ');
      const firstInitial = nameArr[0][0];
      const lastInitial = nameArr[1][0];
      return firstInitial + lastInitial;
    }
  }

  const handleModalClose = () => {
    setAccountModalOpen(false);
  }


  return (
    <div className="accountBar">
        <div className="accountBar__thumbnail">
            <span onClick={() => setAccountModalOpen(!accountModalOpen)}>{getInitials(user.name)}</span>
            {accountModalOpen && <AccountModal modalCloseHandler={() => handleModalClose}/>}
        </div>
    </div>
  )
}

export default AccountBar;
