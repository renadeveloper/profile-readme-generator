import { CanvasHandleEvents } from './canvas';
import { ContextMenuHanldeEvents } from './context-menu';
import { SettingsHandleEvents } from './settings';
import { PanelHandleEvents } from './panel';
import { ResultHandleEvents } from './result';
import { ModalHandleEvents } from './modal';

class Handles {
  canvas = new CanvasHandleEvents();
  contextmenu = new ContextMenuHanldeEvents();
  settings = new SettingsHandleEvents();
  panel = new PanelHandleEvents();
  result = new ResultHandleEvents();
  modal = new ModalHandleEvents();
}

export { Handles };
