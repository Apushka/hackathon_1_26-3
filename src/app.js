import './styles.css';
<<<<<<< HEAD
import { ContextMenu } from './menu';
import { ClicksModule } from './modules/clicks.module';
import { StageModule } from './modules/stage.module';
import { BackgroundModule } from './modules/background.module';
import { DoubleGame } from './modules/double.module';
import { CoinModule } from './modules/coin.module';
import { RandomMessage } from './modules/message.module';
import { ShapeModule } from './modules/shape.module';
import { TimerModule } from './modules/timer.module';

const contextMenu = new ContextMenu('.menu');
contextMenu.add(new ClicksModule('clicks', 'Анализ кликов'));
contextMenu.add(new StageModule('stage', 'Время поиграть'));
contextMenu.add(new BackgroundModule('background', 'Изменить цвет'));
contextMenu.add(new DoubleGame('doublegame', 'Игра "Найди пару"'));
contextMenu.add(new CoinModule('coin', 'Орёл или Решка'));
contextMenu.add(new RandomMessage('message', 'Получить сообщение'));
contextMenu.add(new ShapeModule('shape', 'Создать фигуру'));
contextMenu.add(new TimerModule('timer', 'Таймер'));
=======
import { App } from './modules/start.module.js';

const app = new App();
app.start();

>>>>>>> develop
