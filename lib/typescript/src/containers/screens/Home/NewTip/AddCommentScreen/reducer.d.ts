/**
 *
 * AddCommentScreen reducer
 *
 */
import { AddCommentActionTypes, AddCommentState } from './types';
export declare const initialState: AddCommentState;
declare const addCommentScreenReducer: <Base extends {
    readonly creatingTip: boolean;
}>(base?: Base | undefined, action: AddCommentActionTypes) => Base;
export default addCommentScreenReducer;
