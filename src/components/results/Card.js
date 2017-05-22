import {h, Component} from 'preact';
import style from './style.less';


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
              {this.props.carddata.slug_name}
            </span>
            <br/>
            <span>
              {this.props.carddata.english_name}
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