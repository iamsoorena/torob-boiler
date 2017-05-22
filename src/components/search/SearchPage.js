import { h, Component } from 'preact';
import SearchInput from './SerachInput';
import Banner from './Banner';

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
