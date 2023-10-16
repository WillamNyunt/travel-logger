import React from 'react'
import './AccountModal.scss';
import { useSelector } from 'react-redux';
import {BiEditAlt } from "react-icons/bi";
import {RxCross2} from "react-icons/rx";
import { logout } from 'src/firebase';

export default function AccountModal(props) {

  const user = useSelector(state => state.user.user); 
  const getInitials = (name) => {
    if (name) {
        const nameArr = name.split(' ');
        const firstInitial = nameArr[0][0];
        const lastInitial = nameArr[1][0];
        return firstInitial + lastInitial;
    }
  }
  
  return (
    <div className='account-modal'>
         <RxCross2 className='account-modal__exit'  onClick={props.modalCloseHandler()} />
        <span className='account-modal__thumbnail'>{getInitials(user.name)}<BiEditAlt/></span>
        Hi,       {user.name}!
        <button className='account-modal__logout' onClick={logout}>Logout</button>
    </div>
  )
}
