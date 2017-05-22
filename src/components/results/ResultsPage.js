import { h, Component } from 'preact';
import Header from './Header';
import SortOptions from './SortOptions';
import Card from './Card';
import style from './style.less';

export default class ResultsPage extends Component {
  constructor() {
    super();
    this.state = {
      cardsdata : [
        {
          is_accessible: true,
          price: 3930000,
          availability: true,
          shop_id: 7,
          slug_name: "ایفون-7-پلاس-ظرفیت-256-گیگابایت",
          english_name: "",
          web_client_absolute_url: "/p/c1495d9b-2ee6-4aeb-95cd-064bc99b74ef/%D8%A7%DB%8C%D9%81%D9%88%D9%86-7-%D9%BE%D9%84%D8%A7%D8%B3-%D8%B8%D8%B1%D9%81%DB%8C%D8%AA-256-%DA%AF%DB%8C%DA%AF%D8%A7%D8%A8%D8%A7%DB%8C%D8%AA/",
          torob_category: 184,
          shop_name: "فمیلیو",
          discount_info: [ ],
          image_url: "http://fomilio.com/1020-large_default/آیفون-7-پلاس-ظرفیت-256-گیگابایت.jpg",
          shop_num: 1,
          random_key: "c1495d9b-2ee6-4aeb-95cd-064bc99b74ef",
          persian_name: "آیفون 7 پلاس ظرفیت 256 گیگابایت",
          more_info_url: "http://api.torob.ir/search-result-base-product-more-info-with-log/?search_id=73858&prk=c1495d9b-2ee6-4aeb-95cd-064bc99b74ef&rank=0&source=torob_search"
        },
        {
          is_accessible: true,
          price: 3690000,
          availability: true,
          shop_id: 16,
          slug_name: "اپل-ایفون-7-پلاس-256-گیگ-قرمز-تولید-محدود",
          english_name: "Apple iPhone 7 Plus - 256GB (PRODUCT)RED™ Special Edition",
          web_client_absolute_url: "/p/29c6b6db-7cc4-4439-a12f-90f55213cd43/%D8%A7%D9%BE%D9%84-%D8%A7%DB%8C%D9%81%D9%88%D9%86-7-%D9%BE%D9%84%D8%A7%D8%B3-256-%DA%AF%DB%8C%DA%AF-%D9%82%D8%B1%D9%85%D8%B2-%D8%AA%D9%88%D9%84%DB%8C%D8%AF-%D9%85%D8%AD%D8%AF%D9%88%D8%AF/",
          torob_category: 184,
          shop_name: "دیلی آفرز",
          discount_info: [ ],
          image_url: "http://cdn.torob.com/products-images/be7c8267cc273ccb1220f93e5314beac.png",
          shop_num: 1,
          random_key: "29c6b6db-7cc4-4439-a12f-90f55213cd43",
          persian_name: "اپل آیفون 7 پلاس - 256 گیگ قرمز (تولید محدود)",
          more_info_url: "http://api.torob.ir/search-result-base-product-more-info-with-log/?search_id=73858&prk=29c6b6db-7cc4-4439-a12f-90f55213cd43&rank=1&source=torob_search"
        }
      ]
    }
  }
  render() {
    return (
      <div class={style.resultspage}>
        <Header />
        <SortOptions />
        <div>
          { this.state.cardsdata.map( card => (
            <Card carddata={card} />
          )) }


        </div>

      </div>
    );
  }
}
