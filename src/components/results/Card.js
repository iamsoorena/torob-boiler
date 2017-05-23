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
          <div class={style.prices}>
            <div class={style.pricetag}>
              {el.shop_num != 1 &&
              (<span style={{marginLeft : 3}}> از  </span>)
              }
              {priceFarsi(el.price)}
            </div>
            <div class={style.shopnum}>
              {el.shop_num > 1 ?
                (
                  <span>در {digitsToFa(el.shop_num)} فروشگاه</span>
                )
                :(<span>در {el.shop_name}</span>)
              }
            </div>
            {typeof el.discount_info[0] !== 'undefined' &&
              <div class={style.discount}>
                <span class={style.rate}>%{digitsToFa(Math.ceil((1 - el.discount_info[0].price/el.discount_info[0].old_price)*100))}</span>
                <div class={style.shopname}>
                  <span>{el.discount_info[0].shop_name}</span>
                </div>
              </div>
            }
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