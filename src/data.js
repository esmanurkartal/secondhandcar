// import car images
import Car1 from './assets/img/cars/car1.png';
import Car2 from './assets/img/cars/car2.png';
import Car3 from './assets/img/cars/car3.png';
import Car4 from './assets/img/cars/car4.png';
import Car5 from './assets/img/cars/car5.png';
import Car6 from './assets/img/cars/car6.png';
import Car7 from './assets/img/cars/car7.png';
import Car8 from './assets/img/cars/car8.png';
import Car9 from './assets/img/cars/car9.png';
import Car10 from './assets/img/cars/car10.png';
import Car11 from './assets/img/cars/car11.png';
import Car12 from './assets/img/cars/car12.png';
// import car large images
import Car1Lg from './assets/img/cars/car1lg.jpg';
import Car2Lg from './assets/img/cars/car2lg.jpg';
import Car3Lg from './assets/img/cars/car3lg.webp';
import Car4Lg from './assets/img/cars/car4lg.jpg';
import Car5Lg from './assets/img/cars/car5lg.jpg';
import Car6Lg from './assets/img/cars/car6lg.jpg';
import Car7Lg from './assets/img/cars/car7lg.jpg';
import Car8Lg from './assets/img/cars/car8lg.webp';
import Car9Lg from './assets/img/cars/car9lg.jpg';
import Car10Lg from './assets/img/cars/car10lg.jpg';
import Car11Lg from './assets/img/cars/car11lg.jpg';
import Car12Lg from './assets/img/cars/car12lg.jpg';

export const carsData = [
  {
    id: 1,
    type: 'Volkswagen',
    name: 'Car 1',
    date: '20 Haziran 2022',
    fuel: 'Benzin',
    gear: 'Manuel',
    power: '105 hp',
    capacity: '1197 cc',
    color:'Gri',
    image: Car1,
    imageLg: Car1Lg,
    city: 'İstanbul',
    address: 'Volkswagen Jetta 1.2 TSI BlueMotion Highline ',
    year: '2016',
    price: '507.000',
    agent: {
      name: 'Ece ÇİFTÇİ',
    },
  },
  {
    id: 2,
    type: 'Volkswagen',
    name: 'Car 2',
    date: '18 Haziran 2022',
    fuel: 'Benzin',
    gear: 'Otomatik',
    power: '160 hp',
    capacity: '1390 cc',
    color:'Beyaz',
    image: Car2,
    imageLg: Car2Lg,
    city: 'İstanbul',
    address: 'Volkswagen VW CC 1.4 TSI Exclusive',
    year: '2016',
    price: '400.000',
    agent: {
      name: 'Kaan KOÇ',
    },
  },
  {
    id: 3,
    type: 'BMW',
    name: 'Car 3',
    date: '18 Haziran 2022',
    fuel: 'Benzin',
    gear: 'Yarı Otomatik',
    power: '170 hp',
    capacity: '1598 cc',
    color:'Siyah',
    image: Car3,
    imageLg: Car3Lg,
    city: 'Ankara',
    address:
     'BMW 3 Series 320i ED M Plus',
    year: '2016',
    price: '780.000',
    agent: {
      name: 'Fatih AKDEMİR',
    },
  },
  {
    id: 4,
    type: 'BMW',
    name: 'Car 4',
    date: '18 Haziran 2022',
    fuel: 'Benzin',
    gear: 'Yarı Otomatik',
    power: '136 hp',
    capacity: '1499 cc',
    color:'Gri',
    image: Car4,
    imageLg: Car4Lg,
    city: 'İzmir',
    address: 'BMW 4 Series 418i Gran Coupe M Sport',
    year: '2016',
    price: '995.000',
    agent: {
      name: 'Mert SÜREL',
    },
  },
  {
    id: 5,
    type: 'Renault',
    name: 'Car 5',
    date: '18 Haziran 2022',
    fuel: 'Benzin',
    gear: 'Manuel',
    power: '75 hp',
    capacity: '1149 cc',
    color:'Gri',
    image: Car5,
    imageLg: Car5Lg,
    city: 'Ankara',
    address: 'Renault Clio 1.2 Extreme',
    year: '2015',
    price: '241.950',
    agent: {
      name: 'Yusuf EKRAM',
    },
  },
  {
    id: 6,
    type: 'Renault',
    name: 'Car 6',
    date: '18 Haziran 2022',
    fuel: 'Dizel',
    gear: 'Yarı Otomatik',
    power: '110 hp',
    capacity: '1461 cc',
    color:'Gri',
    image: Car6,
    imageLg: Car6Lg,
    city: 'İzmir',
    address: 'Renault Megane 1.5 dCi Icon',
    year: '2014',
    price: '562.000',
    agent: {
      name: 'Mehmet YILMAZ',
    },
  },
  {
    id: 10,
    type: 'Renault',
    name: 'Car 7',
    date: '18 Haziran 2022',
    fuel: 'Dizel',
    gear: 'Yarı Otomatik',
    power: '130 hp',
    capacity: '1598 cc',
    color:'Kahverengi',
    image: Car7,
    imageLg: Car7Lg,
    city: 'İzmir',
    address: 'Renault Talisman 1.6 dCi Icon',
    year: '2015',
    price: '815.000',
    agent: {
      name: 'Emre KABAN',
    },
  },
  {
    id: 11,
    type: 'BMW',
    name: 'Car 8',
    date: '18 Haziran 2022',
    fuel: 'Dizel',
    gear: 'Otomatik',
    power: '176-200 hp',
    capacity: '1801-2000 cm3',
    color:'Siyah',
    image: Car8,
    imageLg: Car8Lg,
    city: 'İstanbul',
    address: 'BMW 3 Series 320d M Sport',
    year: '2019',
    price: '785.000',
    agent: {
      name: 'Mustafa Yalçın KAYA',
    },
  },
  {
    id: 12,
    type: 'Volkswagen',
    name: 'Car 9',
    date: '18 Haziran 2022',
    fuel: 'Benzin',
    gear: 'Yarı Otomatik',
    power: '150 hp',
    capacity: '1395 cc',
    color:'Gri',
    image: Car9,
    imageLg: Car9Lg,
    city: 'Ankara',
    address: 'Volkswagen Beetle 1.4 TSI Allstar',
    year: '2015',
    price: '812.750',
    agent: {
      name: 'Hüseyin ÖZGÜR',
    },
  },
  {
    id: 13,
    type: 'Renault',
    name: 'Car 10',
    date: '18 Haziran 2022',
    fuel: 'Dizel',
    gear: 'Manuel',
    power: '85 hp',
    capacity: '1461 cc',
    color:'Beyaz',
    image: Car10,
    imageLg: Car10Lg,
    city: 'İstanbul',
    address: 'Renault Fluence 1.5 dCi Business',
    year: '2014',
    price: '214.000',
    agent: {
      name: 'Emrah GÜNDÜZ',
    },
  },
  {
    id: 14,
    type: 'Volkswagen',
    name: 'Car 11',
    date: '18 Haziran 2022',
    fuel: 'Benzin',
    gear: 'Yarı Otomatik',
    power: '95 hp',
    capacity: '999 cc',
    color:'Turuncu',
    image: Car11,
    imageLg: Car11Lg,
    city: 'Ankara',
    address: 'Volkswagen Polo 1.0 TSI Highline',
    year: '2011',
    price: '615.000',
    agent: {
      name: 'Serhat DENİZ',
    },
  },
  {
    id: 15,
    type: 'BMW',
    name: 'Car 12',
    date: '18 Haziran 2022',
    fuel: 'Benzin',
    gear: 'Otomatik',
    power: '170 hp',
    capacity: '1597 cc',
    color:'Siyah',
    image: Car12,
    imageLg: Car12Lg,
    city: 'İstanbul',
    address: 'BMW 5 Series 520i Special Edition M Sport',
    year: '2013',
    price: '2.475.000',
    agent: {
      name: 'Bekir ÇETİN',
    },
  },
];
