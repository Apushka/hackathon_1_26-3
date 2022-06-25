import './styles.css'

import {BackgroundModule} from './modules/background.module';


const backgroundChange = new BackgroundModule('background', 'Изменить цвет');
backgroundChange.trigger();
