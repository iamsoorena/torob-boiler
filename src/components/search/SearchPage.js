import { h, Component } from 'preact';
import SearchInput from './searchinput';
import Banner from './Banner';
// import style from './style.less';

export default class SearchPage extends Component {
  render() {
    return (
      <div>
        <Banner />
        <SearchInput />
      </div>
    );
  }
}
