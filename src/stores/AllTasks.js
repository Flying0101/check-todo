import React from 'react';
import { atom } from 'recoil';



export const allTasks = atom({
    key: 'allTodos',
    default: [],
  });