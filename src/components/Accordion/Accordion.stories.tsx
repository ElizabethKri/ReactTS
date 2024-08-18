
import { action } from '@storybook/addon-actions';

import {Accordion} from './Accordion';
import {useState} from 'react';

// const meta: Meta<typeof Accordion> = {
//     component: Accordion,
// };

export default {
    component: Accordion,
};

// export default meta;

// type Story = StoryObj<typeof Accordion>;
//
// export const Primary: Story = {
//     args: {
//         titleValue: 'hello',
//         collapsed: true,
//         onChange: () => {}
//     },
// };

const onChangeHandler = action('onChange')

export const CollapsedAccordion = () => {
    return <Accordion titleValue={"CollapsedAccordion"}
                      collapsed={true}
                      onChange={onChangeHandler}/>
}

export const OpenedAccordion = () => {
    return <Accordion titleValue={"OpenedAccordion"}
                      collapsed={false}
                      onChange={onChangeHandler}/>
}

export const AccDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue={"Accordion"}
                      collapsed={collapsed}
                      onChange={() => {
                          setCollapsed(!collapsed)
                      }}/>
}