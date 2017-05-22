import {h, Component} from 'preact';
import style from './style.less';


export default class SortOptions extends Component {
  handleClick(sortoption) {
    this.props.changeSort(sortoption);
  }

  render() {
    return (
      <div>
        <div id={style.sortrow}>
          <a class={style.sortitem} onClick={() => this.handleClick("popularity")}>محبوب ترین</a>
          <a class={style.sortitem} onClick={() => this.handleClick("newest")}>جدیدترین</a>
          <a class={style.sortitem} onClick={() => this.handleClick("price_asc")}>کمترین قیمت</a>
          <a class={style.sortitem} onClick={() => this.handleClick("price_desc")}>بیشترین قیمت</a>
        </div>
      </div>
    );
  }
}