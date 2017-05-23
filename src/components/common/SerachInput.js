import {h, Component} from 'preact';
import style from './style.less';
import { route } from 'preact-router';

export default class SearchInput extends Component {
  constructor(){
    super();
    this.state = {value : ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    route(`/search/${this.state.value}`);
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div class={style.input}>
        <form  onSubmit={this.handleSubmit} class={style.searchform} action="#">
          <div class={style.searchboxwrapper}>
            <input value={this.state.value} onChange={this.handleChange} class={style.searchbox} type="text" name="s" placeholder="نام کالا را وارد کنید" id="s"/>
            {/*<input class={style.searchsubmit} type="submit" id="searchsubmit" value=""/>*/}
            <button class={style.searchsubmit} type="submit" id="searchsubmit" >search</button>
          </div>
        </form>
      </div>
    );
  }
}
