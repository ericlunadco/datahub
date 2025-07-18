import { Button, Typography } from 'antd';
import styled from 'styled-components';

import { getColor } from '@components/theme/utils';

import { ANTD_GRAY } from '@app/entity/shared/constants';
import { REDESIGN_COLORS } from '@app/entityV2/shared/constants';
import colors from '@src/alchemy-components/theme/foundations/colors';

export const SearchFilterLabel = styled(Button)<{ $isActive: boolean }>`
    font-size: 14px;
    font-weight: 700;
    border: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    box-shadow: none;
    color: ${REDESIGN_COLORS.TEXT_HEADING};
    background-color: ${colors.secondary[90]};
    color: ${colors.primary[10]};
    &:hover {
        background-color: ${colors.secondary[90]};
        color: ${colors.primary[10]};
    }
    &:active {
        background-color: ${colors.secondary[90]};
        color: ${colors.primary[10]};
    }
    &:focus {
        background-color: ${colors.secondary[90]};
        color: ${colors.primary[10]};
    }
`;

export const MoreFilterOptionLabel = styled.div<{ $isActive: boolean; isOpen?: boolean }>`
    padding: 5px 12px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;

    &:hover {
        background-color: ${ANTD_GRAY[3]};
    }

    ${(props) => props.$isActive && `color: ${props.theme.styles['primary-color']};`}
    ${(props) => props.isOpen && `background-color: ${ANTD_GRAY[3]};`}
`;

export const TextButton = styled(Button)<{ marginTop?: number; height?: number }>`
    color: ${(p) => p.theme.styles['primary-color']};
    padding: 0px 6px;
    margin-top: ${(props) => (props.marginTop !== undefined ? `${props.marginTop}px` : '8px')};
    ${(props) => props.height !== undefined && `height: ${props.height}px;`}

    &:hover {
        background-color: white;
    }
`;

export const Label = styled(Typography.Text)`
    max-width: 125px;
`;

export const IconSpacer = styled.span`
    width: 4px;
`;
