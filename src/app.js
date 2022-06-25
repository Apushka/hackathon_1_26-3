import './styles.css';
import { ContextMenu } from './menu';
import { ClicksModule } from './modules/clicks.module';
import { StageModule } from './modules/stage.module';

const contextMenu = new ContextMenu('.menu');
contextMenu.add(new ClicksModule('clicks', 'Анализ кликов'));
contextMenu.add(new StageModule('stage', 'Время поиграть'));
