import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';
import { save, load } from './storage';

//получаю ссылку на объект iframe
const iframe = document.querySelector('iframe#vimeo-player');
//создаю новый экземпляр player класса VimeoPlayer
const player = new VimeoPlayer(iframe);

//создание и инициализация переменной для хранения текущего времени
const currentVideoTime = load('videoplayer-current-time');

//задание плейеру значения времени, с которого необходимо начать проигрывание
if (currentVideoTime) {
  player.setCurrentTime(currentVideoTime);
} else {
  player.setCurrentTime(0);
}

//получаем ссылку на функцию вызываемую только каждую секунду
let throttled = throttle(timeUpdate, 1000);

//отслеживание текущего времени проигрывания
player.on('timeupdate', throttled);

//функция записывает текущее время проигрывания в локальное хранилище
function timeUpdate(data) {
  save('videoplayer-current-time', data.seconds);
}
