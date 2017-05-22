import { h, Component } from 'preact';
import style from './style.less';

export default class Banner extends Component {
  render() {
    return (
      <div class={style.banner}>
        <img class={style.logo} src={"../../assets/logo.svg"}/>
        {/*<p class={style.torobtitle}>ترب</p>*/}
        {/*<p class={style.torobsubtitle}>موتور جستجوی هوشمند خرید</p>*/}
        <div class={style.torobtitle}>
          ترب <span class={style.torobsubtitle}>موتور جستجوی هوشمند خرید</span>
        </div>
      </div>
    );
  }
}
