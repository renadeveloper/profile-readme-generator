import { useEffect, useState } from 'react';

import { editingPanels } from 'components';
import { PanelBase } from '../base';

import { events } from 'app';
import { Sections, Events } from 'types';

const PanelEditSection = () => {
  const [panel, setPanel] = useState<Sections>();
  const Panel = (editingPanels as any)[panel!] || editingPanels.default;

  const handleChangePanel = (event: CustomEvent<Sections>) => {
    setPanel(event.detail);
  };

  useEffect(() => {
    events.on(Events.EDIT_PANEL_OPEN, handleChangePanel);

    return () => {
      events.off(Events.EDIT_PANEL_OPEN, handleChangePanel);
    };
  }, []);

  return (
    <PanelBase>
      <Panel />
    </PanelBase>
  );
};

export { PanelEditSection };
