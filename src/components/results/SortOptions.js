import { h, Component } from 'preact';
import style from './style.less';


export default class SortOptions extends Component {
  render() {
    return (
      <div>
        <div id={style.sortrow}>
          <a class={style.sortitem}>محبوب ترین</a>
          <a class={style.sortitem}>جدیدترین</a>
          <a class={style.sortitem}>کمترین قیمت</a>
          <a class={style.sortitem}>بیشترین قیمت</a>
        </div>
      </div>
    );
  }
}