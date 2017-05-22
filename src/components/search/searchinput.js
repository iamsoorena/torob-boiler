import { h, Component } from 'preact';
import style from './style.less';

export default class SearchInput extends Component {
  render() {
    return (
      <div class={style.input}>
        <input />
      </div>
    );
  }
}
