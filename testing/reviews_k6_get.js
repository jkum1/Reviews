import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
};

export default function () {
  http.get('http://localhost:3000/reviews?product_id=' + (Math.floor(Math.random() * 1000000)));
  // http.get('http://localhost:3000/reviews/meta?product_id=' + (Math.floor(Math.random() * 1000000)));
}
