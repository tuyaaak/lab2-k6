 // k6-ийн виртуал хэрэглэгчдийн ачааллыг үе шаттай өсгөж, бууруулах тест

import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 5 },
    { duration: '1m', target: 30 },
    { duration: '30s', target: 100 },
    { duration: '30s', target: 0 },
  ],
};

export default function () {
  const res = http.get('https://test.k6.io');

  check(res, {
    'HTTP статус 200': (r) => r.status === 200,
  });

  sleep(1);
}
