import './styles.css';
import { ContextMenu } from './menu';
import { PlugOne } from './modules/plugOne';
import { PlugTwo } from './modules/plugTwo';
import { StageModule } from './modules/stage.module';

const contextMenu = new ContextMenu('.menu');
const plugOne = new PlugOne('plugOne', 'Название модуля 1');
const plugTwo = new PlugTwo('plugTwo', 'Название модуля 2');
contextMenu.add(plugOne);
contextMenu.add(plugTwo);
contextMenu.add(new StageModule('stage', 'Время поиграть'));
