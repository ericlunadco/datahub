import { Button, Image } from 'antd';
import React from 'react';
import styled from 'styled-components';

import colors from '@src/alchemy-components/theme/foundations/colors';

const Container = styled(Button)`
    padding: 32px;
    height: 200px;
    display: flex;
    justify-content: center;
    border-radius: 8px;
    align-items: start;
    flex-direction: column;
    border: 1px solid ${colors.gray[200]};
    background-color: ${colors.secondary[50]};
    &&:hover {
        border: 1px solid ${colors.primary[30]};
        background-color: ${colors.secondary[50]};
    }
    white-space: unset;
`;

const PlatformLogo = styled(Image)`
    max-height: 32px;
    height: 32px;
    width: auto;
    object-fit: contain;
    background-color: transparent;
`;

const LogoContainer = styled.div`
    margin-bottom: 14px;
`;

const Title = styled.div`
    word-break: break-word;
    color: ${colors.white};
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 8px;
`;

const Description = styled.div`
    word-break: break-word;
    text-align: left;
    color: ${colors.secondary[45]} !important;
`;

type Props = {
    logoUrl?: string;
    logoComponent?: React.ReactNode;
    name: string;
    description?: string;
    onClick?: () => void;
};

export const DataPlatformCard = ({ logoUrl, logoComponent, name, description, onClick }: Props) => {
    return (
        <Container type="link" onClick={onClick}>
            <LogoContainer>
                {(logoUrl && <PlatformLogo preview={false} src={logoUrl} alt={name} />) || logoComponent}
            </LogoContainer>
            <Title>{name}</Title>
            <Description>{description}</Description>
        </Container>
    );
};
