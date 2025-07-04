import { Card, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';
import colors from '@src/alchemy-components/theme/foundations/colors';

import { formatNumber } from '@app/shared/formatNumber';

import { Highlight as HighlightType } from '@types';

type Props = {
    highlight: HighlightType;
    shortenValue?: boolean;
};

const HighlightCard = styled(Card)`
    width: 160px;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 0;
    box-shadow: ${(props) => props.theme.styles['box-shadow']};
    background-color: ${colors.secondary[90]};
    border: 1px solid ${colors.secondary[80]};
    border-radius: 8px;
    transition: all 0.2s ease;
    
    &:hover {
        box-shadow: ${(props) => props.theme.styles['box-shadow-hover']} || '0 4px 12px rgba(0, 0, 0, 0.15)';
        transform: translateY(-2px);
    }
`;

const TitleText = styled(Typography.Text)`
    line-height: 1.4em;
    margin-top: -6px;
    font-weight: 600;
    color: ${colors.primary[600]};
`;
const BodyText = styled(Typography.Text)`
    font-size: 10px;
    line-height: 1.4em;
    color: ${colors.secondary[600]};
`;

const TitleContainer = styled.div`
    margin-top: -8px;
`;

const BodyContainer = styled.div`
    margin-top: 8px;
`;

export const Highlight = ({ highlight, shortenValue }: Props) => {
    return (
        <HighlightCard>
            <Typography.Title level={1}>
                {(shortenValue && formatNumber(highlight.value)) || highlight.value}
            </Typography.Title>
            <TitleContainer>
                <TitleText strong>{highlight.title}</TitleText>
            </TitleContainer>
            <BodyContainer>
                <BodyText>{highlight.body}</BodyText>
            </BodyContainer>
        </HighlightCard>
    );
};
