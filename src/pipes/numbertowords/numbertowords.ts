import {
  Pipe,
  PipeTransform
} from '@angular/core';

@Pipe({
  name: 'numbertoword'
})
export class NumberToWordsPipe implements PipeTransform {

  a = [
    '',
    'satu ',
    'dua ',
    'tiga ',
    'empat ',
    'lima ',
    'enam ',
    'tujuh ',
    'delapan ',
    'sembilan ',
    'sepuluh ',
    'sebelas ',
    'dua belas ',
    'tiga belas ',
    'empat belas ',
    'lima belas ',
    'enam belas ',
    'tujuh belas ',
    'delapan belas ',
    'sembilan belas '
  ];

  b = [
    '',
    '',
    'dua puluh',
    'tiga puluh',
    'empat puluh',
    'lima puluh',
    'enam puluh',
    'tujuh puluh',
    'delapan puluh',
    'sembilan puluh'
  ];

  transform(value: any, args ? : any): any {
    if (value) {
      let num: any = Number(value);
      if (num) {
        if ((num = num.toString()).length > 8) {
          return 'Too much digit';
        }
        const n = ('000000000' + num).substr(-8).match(/^(\d{2})(\d{1})(\d{2})(\d{1})(\d{2})$/);
        console.log(n)
        console.log(this.a[Number(n[3])] === 'satu')
        console.log(this.a[Number(n[3])] || this.b[n[3][0]] + ' ' + this.a[n[3][1]])
        if (!n) {
          return '';
        }
        let str = '';
        str += (Number(n[1]) !== 0) ? (this.a[Number(n[1])] || this.b[n[1][0]] + ' ' + this.a[n[1][1]]) + 'juta ' : '';
        str += (Number(n[2]) !== 0) ? ((Number(n[2]) == 1 ? 'se' : this.a[Number(n[2])]) || this.b[n[2][0]] + ' ' + this.a[n[2][1]]) + (Number(n[3]) == 0 ? 'ratus ribu ' : 'ratus ') : '';
        str += (Number(n[3]) !== 0) ? ((Number(n[3]) == 1 ? 'se' : this.a[Number(n[3])]) || this.b[n[3][0]] + ' ' + this.a[n[3][1]]) + 'ribu ' : '';
        str += (Number(n[4]) !== 0) ? ((Number(n[4]) == 1 ? 'se' : this.a[Number(n[4])]) || this.b[n[4][0]] + ' ' + this.a[n[4][1]]) + 'ratus ' : '';
        str += (Number(n[5]) !== 0) ? ((str !== '') ? ' ' : '') +
          (this.a[Number(n[5])] || this.b[n[5][0]] + ' ' +
            this.a[n[5][1]]) + 'rupiah' : '';
        return str;
      } else {
        return '';
      }
    } else {
      return '';
    }
  }
}
