import {h, Component} from 'preact';
import Header from './Header';
import SortOptions from './SortOptions';
import Card from './Card';
import axios from 'axios';
import style from './style.less';

export default class ResultsPage extends Component {
  constructor() {
    super();
    this.state = {
      sort : 'popularity',
      cardsdata: []
    }
  }
  askServer() {
    axios.get(`http://api.torob.com/android-api/3/search/?sort=${this.state.sort}&query=${this.props.query}&category=175`)
      .then(res => {
        const cardsdata = res.data.result;
        this.setState({ cardsdata });
      });
  }
  componentDidMount() {
    this.askServer();
  }

  changeSort = (sortoption) => {
    this.setState({sort : sortoption});
    this.askServer();
  };

  render() {
    return (
      <div class={style.resultspage}>
        <Header />
        <SortOptions changeSort={this.changeSort} />
        <div class={style.container}>
          <div class={style.cards}>

            { this.state.cardsdata.map(card => (
              <div class={style.card}>
                <Card  carddata={card}/>
              </div>
            )) }
          </div>
        </div>

      </div>
    );
  }
}
