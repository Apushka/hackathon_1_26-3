import './styles.css';
import { ContextMenu } from './menu';
import { ClicksModule } from './modules/clicks.module';
import { StageModule } from './modules/stage.module';
import { BackgroundModule } from './modules/background.module';
import { DoubleGame } from './modules/double.module';
import { CoinModule } from './modules/coin.module';

const contextMenu = new ContextMenu('.menu');
contextMenu.add(new ClicksModule('clicks', 'Анализ кликов'));
contextMenu.add(new StageModule('stage', 'Время поиграть'));
contextMenu.add(new BackgroundModule('background', 'Изменить цвет'));
contextMenu.add(new DoubleGame('doublegame', 'Игра "Найди пару"'));
contextMenu.add(new CoinModule('coin', 'Орёл или Решка'));
