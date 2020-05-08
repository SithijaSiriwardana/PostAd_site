import { Redirect } from 'react-router-dom'
import React, { Component } from 'react'

const initState = {
    ads: [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
        {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
      ]
}

const adReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_AD_SUCCESS':
      console.log('create ad success');
      return <Redirect to='/' /> ;
    case 'CREATE_AD_ERROR':
      console.log('create ad error');
      return state;
    default:
      return state;
  }
};

export default adReducer;