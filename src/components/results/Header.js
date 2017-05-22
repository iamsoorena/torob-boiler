import { h, Component } from 'preact';
import TorobLogo from '../common/TorobLogo';
import SearchInput from '../common/SerachInput';
import style from './style.less';


export default class Header extends Component {
  render() {
    return (
      <div>
        <div class={style.headercontent}>
          <div class={style.logotitle}>
            <TorobLogo />
            <span class={style.torobtitle}>
            ترب
          </span>
          </div>
          <div class={style.searchinput}>
            <SearchInput />
          </div>

        </div>
      </div>
    );
  }
}