import { REQ_TAB, SELECTED_TAB } from './types';

export const selectNewTab = (letter) => ({
	type: REQ_TAB,
	payload: letter
});
