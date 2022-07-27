'use babel';

import BocoranSlotPalingGacorHariIniView from './bocoran-slot-paling-gacor-hari-ini-view';
import { CompositeDisposable } from 'atom';

export default {

  bocoranSlotPalingGacorHariIniView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.bocoranSlotPalingGacorHariIniView = new BocoranSlotPalingGacorHariIniView(state.bocoranSlotPalingGacorHariIniViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.bocoranSlotPalingGacorHariIniView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'bocoran-slot-paling-gacor-hari-ini:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.bocoranSlotPalingGacorHariIniView.destroy();
  },

  serialize() {
    return {
      bocoranSlotPalingGacorHariIniViewState: this.bocoranSlotPalingGacorHariIniView.serialize()
    };
  },

  toggle() {
    console.log('BocoranSlotPalingGacorHariIni was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
