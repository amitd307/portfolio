import { v4 as uuidv4 } from 'uuid';
import gun from '../images/Gun.png';
import aim from '../images/aim.png';
import Knife from '../images/Knife.jpg';
import Bike from '../images/Bike.jpg';
import jeep from '../images/jeep.jpg';
import Jet from '../images/SuperJet.jpg';
import bomb from '../images/bomb.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Cafe Racer',
    desc:
      'Designed the Honda 750 Cafe Racer from Scratch utilizing SolidWorks,it took me 7 days to finish this excellent venture.',
    img: Bike,
  },
  {
    id: uuidv4(),
    name: 'Machine Gun',
    desc:
      'I needed to give myself a test by making a lightweight automatic weapon in Fusion 360. I totally love Fusion 360. Its my go-to program for everything hard surface related.',
    img: gun,
  },
  {
    id: uuidv4(),
    name: 'WWII Jeep',
    desc:
      'Here is my endeavor at a World War II Jeep Rubicon Concept. Changed renders added April third 2021. Frame and motor subtleties and resuscitated body.',
    img: jeep,
  },
  {
    id: uuidv4(),
    name: 'MK2 Grenade',
    desc:
      'Uniquely designed hand Grenade TNT 70g dependent on Russian-French F1 projectile. This task is likewise made for a game. The model is in stp design. Anybody can change over to any organize.',
    img: bomb,
  },
  {
    id: uuidv4(),
    name: 'Super Sonic Jet',
    desc:
      'A key feature of designing of an Super Sonic Aircraft is ability to maintain supersonic cruise for long haul, So long drag is essential.',
    img: Jet,
  },
  {
    id: uuidv4(),
    name: 'Holographic Scope',
    desc:
      'Specially designed Fusion 360 work on, making weapon scopes/optics. Delivered in Fusion 360 too, minor post-work in photoshop to change contrast.',
    img: aim,
  },
  {
    id: uuidv4(),
    name: 'Spyderco Delica 4 FRN',
    desc:
      'This is a completely planned Fusion 360 model of the a Spyderco Delica 4 FRN full level ground folding knife. It is displayed 1:1 scale, with the all parts need for a full get together.',
    img: Knife,
  },
];

export default projects;
