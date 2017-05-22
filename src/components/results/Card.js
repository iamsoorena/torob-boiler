import {h, Component} from 'preact';
import digitsToFa from '../common/digitsToFa';
import style from './style.less';
import priceFarsi from '../common/priceFarsi';


export default class Card extends Component {

  render() {
    let el = this.props.carddata;
    return (
      <div class={style.card}>
        <a>
          <div>
            <img src={el.image_url} class={style.productimg}/>
          </div>
          <div>
            <span>
              {digitsToFa(el.slug_name)}
            </span>
            <br/>
            <span>
              {el.english_name}
            </span>
          </div>
          <div>
            <div>
              {priceFarsi(el.price)}
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