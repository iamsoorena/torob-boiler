import {h, Component} from 'preact';
import digitsToFa from '../common/digitsToFa';
import style from './style.less';
import priceFarsi from '../common/priceFarsi';


export default class Card extends Component {

  render() {
    let el = this.props.carddata;
    return (
      <div class={style.carditem}>
        <a href={"http://torob.ir"+el.web_client_absolute_url}>
          <div class={style.imgwrapper}>
            <img src={el.image_url} class={style.productimg}/>
          </div>
          <div class={style.titleswrapper}>
            <span class={style.biggertitle} >
              {digitsToFa(el.slug_name)}
            </span>
            <span class={style.smallertitle}>
              {el.english_name}
            </span>
          </div>
          <div>
            <div class={style.pricetag}>
              <span> از  </span>{priceFarsi(el.price)}
            </div>
            <div class={style.shopnum}>
              {el.shop_num > 1 ?
                (
                  <span>در {digitsToFa(el.shop_num)} فروشگاه</span>
                )
                :(<span>در {el.shop_name}</span>)
              }
            </div>
            <div>
              تخفیف
            </div>
          </div>
        </a>
        <div class={style.fav}>
          <i class="material-icons">favorite</i>
          <i class="material-icons">notifications</i>
        </div>
      </div>
    );
  }
}