import { h, Component } from 'preact';
import style from './style.less';


export default class SortOptions extends Component {
  render() {
    return (
      <div>
        <div id={style.sortrow}>
          <a class={style.sortitem} href="?sort=popularity&amp;query=s&amp;category=">محبوب ترین</a>
          <a class={style.sortitem} href="?sort=newest&amp;query=s&amp;category=">جدیدترین</a>
          <a class={style.sortitem} href="?sort=price_asc&amp;query=s&amp;category=">کمترین قیمت</a>
          <a class={style.sortitem} href="?sort=price_desc&amp;query=s&amp;category=">بیشترین قیمت</a>
        </div>
      </div>
    );
  }
}