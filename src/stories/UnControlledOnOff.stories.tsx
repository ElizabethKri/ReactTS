import {UnControlledOnOff} from '../components/onnOff/UnControlledOnOff';
import {action} from '@storybook/addon-actions';



export default {
    title: 'UncontrolOnOff',
    component: UnControlledOnOff
}

const callback = action('on or off clicked')

export const OnMode = () => <UnControlledOnOff defaultOn={true} onChangeOn={callback}/>
export const OffMode = () => <UnControlledOnOff defaultOn={false} onChangeOn={callback}/>
