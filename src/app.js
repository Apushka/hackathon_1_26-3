import './styles.css';
import { ContextMenu } from './menu';
import { PlugOne } from './modules/plugOne';
import { PlugTwo } from './modules/plugTwo';
import { ClicksModule } from './modules/clicks.module';

const contextMenu = new ContextMenu('.menu');
const plugOne = new PlugOne('plugOne', 'Название модуля 1');
const plugTwo = new PlugTwo('plugTwo', 'Название модуля 2');
const clicksModule = new ClicksModule('clicks', 'Анализ кликов');
contextMenu.add(plugOne);
contextMenu.add(plugTwo);
contextMenu.add(clicksModule);