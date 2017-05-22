import { h, Component } from 'preact';
import style from './style.less';


export default class Card extends Component {
  render() {
    return (
      <div class={style.card}>
        <a>
          <div>
            <img class={style.productimg}/>
          </div>
          <div>
            <span>
              نام
            </span>
            <br/>
            <span>
              name
            </span>
          </div>
          <div>
            <div>
              قیمت 1
            </div>
            <div>
              تعداد فروشگاه
            </div>
            <div>
              تخفیف
            </div>
          </div>
        </a>
        <div class={style.fav}>
          <i class="fa fa-heart" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
}