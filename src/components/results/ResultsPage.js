import { h, Component } from 'preact';
import Header from './Header';
import SortOptions from './SortOptions';
import Card from './Card';
import style from './style.less';

export default class ResultsPage extends Component {
  render() {
    return (
      <div class={style.resultspage}>
        <Header />
        <SortOptions />
        <Card />
      </div>
    );
  }
}
