import request from 'request';
import cheerio from 'cheerio';
import { Iconv } from 'iconv';

const uri = 'https://www.nts.go.kr/openinfo/openinfo_03_01_list.asp?nsearch_utype=1';
const MAPPER = ['num', 'year', 'name', 'age', 'shop', 'job', 'addr', 'total',
  'taxItem', 'date', 'behiList'];

const onlyTypeTag = ({ type }) => type === 'tag';

const eucKrToUtf8 = (str) => {
  const iconv = new Iconv('euc-kr', 'utf-8');
  const buf = new Buffer(str, 'binary');
  return iconv.convert(buf).toString();
};

export const getThiefs = async ({page}) => {
  const data = await new Promise((resolve, reject) => {
    request({
      method: 'POST',
      encoding: 'binary',
      uri,
      form: {
        nsearch_page: page,
      },
    }, (err, res, body) => {
      if (err) {
        return reject(err);
      }

      return resolve(eucKrToUtf8(body));
    });
  });

  const $ = cheerio.load(data);
  return $('tbody')[0].children
    .filter(onlyTypeTag)
    .map((tr) => tr.children
      .filter(onlyTypeTag)
      .map(({ children }) => (children.length > 0 ? children[0].data : '')))
    .map((i) => i.reduce((acc, cur, index) => ({
      ...acc,
      [MAPPER[index]]: cur,
    }), {}));
};
