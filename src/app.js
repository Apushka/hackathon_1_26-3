import './styles.css';
import { ContextMenu } from './menu';
import { PlugOne } from './modules/plugOne';
import { PlugTwo } from './modules/plugTwo';
import { ClicksModule } from './modules/clicks.module';
import { StageModule } from './modules/stage.module';
import { CoinModule } from './modules/coin.module';

const contextMenu = new ContextMenu('.menu');
const plugOne = new PlugOne('plugOne', 'Название модуля 1');
const plugTwo = new PlugTwo('plugTwo', 'Название модуля 2');
const clicksModule = new ClicksModule('clicks', 'Анализ кликов');
const coinModule = new CoinModule('coin', 'Орёл или Решка');
contextMenu.add(plugOne);
contextMenu.add(plugTwo);
contextMenu.add(clicksModule);
contextMenu.add(coinModule);
contextMenu.add(new StageModule('stage', 'Время поиграть'));
