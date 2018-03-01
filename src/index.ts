import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import {
  Dialog
} from '@jupyterlab/apputils';

import {
  PageConfig
} from '@jupyterlab/coreutils';

import {
  Widget
} from '@phosphor/widgets';

import '../style/index.css';


/**
 * Create a custom 404 error dialog.
 */
const main: JupyterLabPlugin<void> = {
  id: '@afshin/custom404-extension:main',
  autoStart: true,
  activate: (app: JupyterLab) => {
    const bad = PageConfig.getOption('notFoundUrl');
    const base = PageConfig.getOption('pageUrl');

    if (!bad) {
      return;
    }

    // Remove the bad part of the URL.
    window.history.replaceState({ }, '', base);

    // Create the error dialog.
    const dialog = new Dialog({
      title: '',
      body: new Widget({ node: Private.createNode(bad) }),
      buttons: [Dialog.okButton()]
    });

    // Add custom class to dialog and launch it.
    dialog.addClass('ad-Custom404');
    dialog.launch();
  }
};


export default main;


/**
 * A namespace for private module data.
 */
namespace Private {
  /**
   * Create the custom 404 dialog body.
   */
  export
  function createNode(location: string): HTMLElement {
    const node = document.createElement('div');
    const content = document.createElement('div');

    content.className = 'ad-Custom404-content';
    content.innerHTML = `Erreur: <code>${location}</code> est introuvable!`;
    node.appendChild(content);

    return node;
  }
}
