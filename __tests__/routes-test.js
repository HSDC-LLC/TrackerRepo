import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import subject from '../client/reducers/habitsReducers';

describe("Routes", () =>{
  let state;
  beforeEach(() => {
    state = {
        user_id: 0,
        habitId: 100,
        newHabit: '',
        habitType: 'positive',
        totalAmountsWanted: 1,
        habitList: [],
    };
  });

  describe('default state', () => {
    it('should return a default state when given an undefined input', () => {
        expect(subject(undefined, { type: undefined })).toEqual(state);
    });
  });

  describe('unrecognized action types', () => {
    it('should return the same state passed into it', () => {
      const action = { type: 'not_a_type' };
      expect(subject(state, action)).toBe(state);
    });
  });

  describe('ADD_MARKET', () => {
    const action = {
      type: 'ADD_MARKET',
      payload: 'Azkaban',
    };

    xit('adds a market', () => {
      const { marketList } = subject(state, action);
      expect(marketList[0]).toEqual({
        location: 'Azkaban',
        cards: 0,
      });
    });

    xit('increases total market count by 1', () => {
      expect(state.totalMarkets).toEqual(0);
      let currentMarket = subject(state, action);
      expect(currentMarket.totalMarkets).toEqual(1);
    });

    // Remember that in Redux we never mutate. If something changes, we copy
    // the data structure! Hint: `.toBe` or `.not.toBe` are your questions.
    xit('returns a state object not strictly equal to the original', () => {
      let currentMarket = subject(state, action);
      expect(currentMarket).toEqual(subject(state, action));
      expect(currentMarket).not.toBe(subject(state, action));
    });

    xit('includes a marketList not strictly equal to the original', () => {
      let currentMarket = subject(state, action);
      expect(currentMarket.marketList).toEqual(subject(state, action).marketList);
      expect(currentMarket.marketList).not.toBe(subject(state, action).marketList);
    });

    xit('clears the newLocation field', () => {
      let currentMarket = subject(state, {type: 'UPDATE_LOCATION', payload: 'Brooklyn'});
      expect(currentMarket.newLocation).toEqual('Brooklyn');
      currentMarket = subject(currentMarket, {type: 'ADD_MARKET', payload: currentMarket.newLocation});
      expect(currentMarket.newLocation).toEqual('');
    });
  });
});