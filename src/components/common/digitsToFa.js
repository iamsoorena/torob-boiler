export default function digitsToFa(str) {
  str = '' + str;
  let out = '';
  for(let i=0; i<str.length; i++)
    if( str[i] >= '0' && str[i] <= '9' )
      out += faDigits[str[i] - '0'];
    else
      out += str[i];
  return out;
}

const faDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];