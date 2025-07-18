import { Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

import { StyledSyntaxHighlighter } from '@app/entityV2/shared/StyledSyntaxHighlighter';

import { useBaseEntity } from '@app/entity/shared/EntityContext';
import { InfoItem } from '@app/entity/shared/components/styled/InfoItem';
import { ANTD_GRAY } from '@app/entity/shared/constants';

import { GetChartQuery } from '@graphql/chart.generated';

const InfoSection = styled.div`
    border-bottom: 1px solid ${ANTD_GRAY[4.5]};
    padding: 16px 20px;
`;

const InfoItemContainer = styled.div<{ justifyContent }>`
    display: flex;
    position: relative;
    justify-content: ${(props) => props.justifyContent};
    padding: 12px 2px;
`;

const InfoItemContent = styled.div`
    padding-top: 8px;
`;

const QueryText = styled(Typography.Paragraph)`
    margin-top: 20px;
    background-color: ${ANTD_GRAY[2]};
`;

const NestedSyntax = styled(StyledSyntaxHighlighter)`
    background-color: transparent;
    border: none;
`;

export function ChartQueryTab() {
    const baseEntity = useBaseEntity<GetChartQuery>();
    const query = baseEntity?.chart?.query?.rawQuery || 'UNKNOWN';
    const type = baseEntity?.chart?.query?.type || 'UNKNOWN';

    return (
        <>
            <InfoSection>
                <Typography.Title level={5}>Details</Typography.Title>
                <InfoItemContainer justifyContent="left">
                    <InfoItem title="Type">
                        <InfoItemContent>{type.toUpperCase()}</InfoItemContent>
                    </InfoItem>
                </InfoItemContainer>
            </InfoSection>
            <InfoSection>
                <Typography.Title level={5}>Query</Typography.Title>
                <QueryText>
                    <NestedSyntax language="sql">{query}</NestedSyntax>
                </QueryText>
            </InfoSection>
        </>
    );
}
