import { events } from 'app';
import { contents } from './contents';

import * as S from './styles';

const PanelNewSection = () => {
  return (
    <S.Container>
      {contents.map(({ icon: Icon, name, sectionType }) => (
        <S.Wrapper key={name} onClick={() => events.canvas.add(sectionType)}>
          <S.Block>
            <Icon size={48} />
            {name}
          </S.Block>
        </S.Wrapper>
      ))}
    </S.Container>
  );
};

export { PanelNewSection };
