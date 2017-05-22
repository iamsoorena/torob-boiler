import { h, Component } from 'preact';
import TorobLogo from '../common/TorobLogo';
import SearchInput from '../common/SerachInput';
import style from './style.less';


export default class Header extends Component {
  render() {
    return (
      <div>
        <div class={style.headercontent}>
          <TorobLogo />
          <span class={style.torobtitle}>
            ترب
          </span>
          <SearchInput />
        </div>
      </div>
    );
  }
}