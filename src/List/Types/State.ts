import { Element } from './ElemType';
type State = {
  elements: [] | Element[];
  selected: [] | Element[];
  error: undefined | string;
};
export default State;
