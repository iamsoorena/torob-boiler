import { h, Component } from 'preact';
import TorobLogo from '../common/TorobLogo'
import style from './style.less';

export default class Banner extends Component {
  render() {
    return (
      <div class={style.banner}>
        <TorobLogo />
        <div class={style.torobtitle}>
          ترب <span class={style.torobsubtitle}>موتور جستجوی هوشمند خرید</span>
        </div>
      </div>
    );
  }
}
