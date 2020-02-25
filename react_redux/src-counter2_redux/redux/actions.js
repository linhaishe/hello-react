/*
action creator模块
 */
import {INCREMENT, DECREMENT} from './action-types'
//incrementCreator
export const increment = number => ({type: INCREMENT, number})
export const decrement = number => ({type: DECREMENT, number})