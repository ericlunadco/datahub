import { Button } from 'antd';
import styled from 'styled-components';
import colors from '@src/alchemy-components/theme/foundations/colors';

import { ANTD_GRAY, REDESIGN_COLORS } from '@app/entityV2/shared/constants';

const MenuItem = styled.div`
    font-size: 12px;
    padding: 0 4px;
    color: #262626;
`;

export const ActionMenuItem = styled(Button) <{ disabled?: boolean; fontSize?: number; excludeMargin?: boolean }>`
    border-radius: 20px;
    width: ${(props) => (props.fontSize ? `${props.fontSize}px` : '28px')};
    height: ${(props) => (props.fontSize ? `${props.fontSize}px` : '30px')};
    margin: 0px ${(props) => (props.excludeMargin ? '0px' : '4px')};
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: none;
    background-color: ${colors.secondary[90]};
    border: 1px solid ${colors.secondary[50]};
    color: ${REDESIGN_COLORS.ACTION_ICON_GREY};
    box-shadow: none;
    &&:hover {
        background-color: ${colors.secondary[70]};
        color: ${(props) => props.theme.styles['primary-color']};
        border-color: ${(props) => props.theme.styles['primary-color']};
    }
    &&:active {
        background-color: ${colors.secondary[90]};
        color: ${(props) => props.theme.styles['primary-color']};
        border-color: ${(props) => props.theme.styles['primary-color']};
    }
    &&:focus {
        background-color: ${colors.secondary[70]};
        color: ${(props) => props.theme.styles['primary-color']};
        border-color: ${(props) => props.theme.styles['primary-color']};
    }

    ${(props) =>
        props.disabled
            ? `
            ${MenuItem} {
                color: ${ANTD_GRAY[7]};
            }
    `
            : ''};
`;
