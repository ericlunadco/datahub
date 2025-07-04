import React from 'react';
import styled from 'styled-components/macro';

import { REDESIGN_COLORS } from '@app/entity/shared/constants';
import { colors } from '@src/alchemy-components';
import { useShowNavBarRedesign } from '@src/app/useShowNavBarRedesign';

const Card = styled.div<{
    clickable: boolean;
    maxWidth: number;
    minWidth: number;
    height?: number;
    $isShowNavBarRedesign?: boolean;
}>`
    border-radius: 10px;
    background-color: ${(props) => props.theme.styles['component-background']};
    padding: 16px;
    border: ${(props) => (props.$isShowNavBarRedesign ? `1px solid ${(props) => props.theme.styles['border-color-base']}` : '2px solid transparent')};
    ${(props) => props.$isShowNavBarRedesign && 'border-radius: 8px;'}
    max-width: ${(props) => props.maxWidth}px;
    min-width: ${(props) => props.minWidth}px;
    :hover {
        ${(props) => props.clickable && `border: 2px solid ${(props) => props.theme.styles['primary-color']};`}
        ${(props) => props.clickable && 'cursor: pointer;'}
    }
    overflow: hidden;
`;

const Title = styled.div`
    font-size: 16px;
    color: ${(props) => props.theme.styles['text-color']};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

type Props = {
    id?: string;
    title?: React.ReactNode;
    children?: React.ReactNode;
    maxWidth?: number;
    minWidth?: number;
    onClick?: () => void;
};

export const InsightCard = ({ id, title, children, maxWidth = 300, minWidth = 300, onClick }: Props) => {
    const isShowNavBarRedesign = useShowNavBarRedesign();
    return (
        <Card
            id={id}
            maxWidth={maxWidth}
            minWidth={minWidth}
            clickable={onClick !== undefined}
            onClick={onClick}
            $isShowNavBarRedesign={isShowNavBarRedesign}
        >
            <Title>{title}</Title>
            {children}
        </Card>
    );
};
