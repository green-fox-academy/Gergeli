'use strict'

interface Reservation {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservation {
  daysOfTheWeeks: string[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fre', 'Sat', 'San'];

  getCodeBooking() {
    let codeBase: string = 'ABCDEFGHIJKLMNOPQSTVWXYZ0123456789';
    let code: string = '';

    for(let i: number = 0; i < 8; i++){
      let numb: number = Math.random() * (codeBase.length + 1);
      code += codeBase.charAt(numb);
    }
    return code;
  }

  getDowBooking() {
    let day: string = this.daysOfTheWeeks[Math.floor(Math.random() * 7)];
    return day;
  }

  reservationBill() {
    return `Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}.`;
  }
}

let res = new Reservation();


for(let i: number = 0; i < 10; i++){
console.log(res.reservationBill());
}