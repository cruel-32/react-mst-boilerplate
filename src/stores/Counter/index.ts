/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
import { types } from 'mobx-state-tree';

export const Counter = types
  .model({
    count: types.number,
  })
  .actions((self) => ({
    increment() {
      self.count++;
    },
    decrement() {
      self.count--;
    },
  }));
