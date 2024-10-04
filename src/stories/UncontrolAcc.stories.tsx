import {UncontrolAcc} from '../components/Accordion/UncontrolAcc';
import {action} from '@storybook/addon-actions';

export default {
    title: 'UncontrlledAcc',
    component: UncontrolAcc
}

const callback = action('acc mode change event fired')

export const ModeChanging = () => {
    return <UncontrolAcc items= {[{title: 'Ivan', value: 2}, {title: 'Svetlana', value: 1}]}
                         titleValue={'User'}
                         collapsed={true}
                         onChange={x=> x}
                         onClick={x => x}
    />
}