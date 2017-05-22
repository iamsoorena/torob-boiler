import {h, Component} from 'preact';
import style from './style.less';

export default class SearchInput extends Component {
  render() {
    return (
      <div class={style.input}>
        <form role="search" method="get" id="searchform" class={style.searchform} action="#" _lpchecked="1">

          <div class={style.searchboxwrapper}>

            <input class={style.searchbox} type="text" value="" name="s" placeholder="نام کالا را وارد کنید" id="s"/>

            <input class={style.searchsubmit} type="submit" id="searchsubmit" value=""/>

          </div>
        </form>
      </div>
    );
  }
}
