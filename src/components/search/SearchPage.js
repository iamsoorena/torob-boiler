import { h, Component } from 'preact';
import SearchInput from './SerachInput';
import Banner from './Banner';
import style from './style.less';

export default class SearchPage extends Component {
  render() {
    return (
      <div class={style.searchpage}>
        <Banner />
        <SearchInput />
      </div>
    );
  }
}
