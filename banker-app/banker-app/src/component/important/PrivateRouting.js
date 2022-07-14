import React,{useContext} from 'react'
import { Authcontext } from '../context/Authcontext';
import Login from '../landingpage/Login/Login';

function PrivateRouting(props) {
    const {isAuthanticated} = useContext(Authcontext);
    const {Component} = props;
    if (!isAuthanticated) {
        return <Login />
    }
  return (
    <Component />
  )
}

export default PrivateRouting;