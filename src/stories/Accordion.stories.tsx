
import { action } from '@storybook/addon-actions';

import {Accordion, AccordionType, ItemType} from '../components/Accordion/Accordion';
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
const onClickCallback = action('some item was clicked')


export const CollapsedAccordion = () => {
    return <Accordion titleValue={"CollapsedAccordion"}
                      collapsed={true}
                      onChange={onChangeHandler}
                      items={[]}
                      onClick={onClickCallback}
    />
}


export const OpenedAccordion = () => {
    return <Accordion titleValue={"OpenedAccordion"}
                      collapsed={false}
                      onChange={onChangeHandler}
                      items={[{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {title: 'Art', value: 3}]}
                      onClick={onClickCallback}
    />
}

export const AccDemo = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <Accordion titleValue={"Accordion"}
                      collapsed={collapsed}
                      onChange={() => {
                          setCollapsed(!collapsed)
                      }}
                      items={[{title: 'Dimych', value: 1}, {title: 'Valera', value: 2}, {title: 'Art', value: 3}]}
                      onClick={(value) => {alert(`user with ID ${value} should be happy`)}}
    />
}