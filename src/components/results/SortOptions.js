import {h, Component} from 'preact';
import style from './style.less';


export default class SortOptions extends Component {
  constructor(props){
    super(props);
    this.state ={
      activeSort: 'popularity'
    }
  }
  handleClick(sortoption) {
    this.setState({activeSort: sortoption});
    this.props.changeSort(sortoption);
  }

  render() {
    return (
      <div>
        <div id={style.sortrow}>
          <a class={this.state.activeSort==='popularity' ? style.border : style.noborder} onClick={() => this.handleClick("popularity")}>محبوب ترین</a>
          <a class={this.state.activeSort==='newest' ? style.border : style.noborder} onClick={() => this.handleClick("newest")}>جدیدترین</a>
          <a class={this.state.activeSort==='price_asc' ? style.border : style.noborder}onClick={() => this.handleClick("price_asc")}>کمترین قیمت</a>
          <a class={this.state.activeSort==='price_desc' ? style.border : style.noborder} onClick={() => this.handleClick("price_desc")}>بیشترین قیمت</a>
        </div>
      </div>
    );
  }
}