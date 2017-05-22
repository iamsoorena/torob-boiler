import { h, Component } from 'preact';
import style from './style.less';

export default class Banner extends Component {
  render() {
    return (
      <div class={style.banner}>
        <img src={"../../assets/logo.svg"}/>
        <p>ترب</p>
        <p>موتور جستجوی هوشمند خرید</p>
      </div>
    );
  }
}
