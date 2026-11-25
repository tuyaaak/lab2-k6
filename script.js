 // k6 ашиглан 5 виртуал хэрэглэгчийн HTTP хариуны хурдыг хэмжих тест

import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 5,
  duration: '30s',
};

export default function () {
  const res = http.get('https://test.k6.io');

  check(res, {
    'HTTP статус 200': (r) => r.status === 200,
  });

  sleep(1);
}
