import { SelectStyleProps } from '@components/components/Select/types';
import { colors, radius, spacing, typography } from '@components/theme';
import { getFontSize } from '@components/theme/utils';

export const getOptionLabelStyle = (
    isSelected: boolean,
    isMultiSelect?: boolean,
    isDisabled?: boolean,
    applyHoverWidth?: boolean,
) => {
    const color = isSelected ? colors.primary[30] : colors.gray[1900];
    const backgroundColor = !isDisabled && !isMultiSelect && isSelected ? colors.secondary[50] : 'transparent';

    return {
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        padding: spacing.xsm,
        borderRadius: radius.md,
        lineHeight: typography.lineHeights.normal,
        backgroundColor,
        color,
        fontWeight: typography.fontWeights.medium,
        fontSize: typography.fontSizes.md,
        display: 'flex',
        alignItems: 'center',
        width: applyHoverWidth ? '100%' : 'auto',
        '&:hover': {
            backgroundColor: isSelected ? colors.secondary[90] : colors.secondary[70],
            color: isSelected ? colors.primary[30] : colors.primary[10],
        },
    };
};

export const getFooterButtonSize = (size) => {
    return size === 'sm' ? 'sm' : 'md';
};

export const getSelectFontStyles = (size) => {
    const baseFontStyles = {
        lineHeight: typography.lineHeights.none,
    };

    const sizeStyles = {
        sm: {
            ...baseFontStyles,
            fontSize: getFontSize(size),
        },
        md: {
            ...baseFontStyles,
            fontSize: getFontSize(size),
        },
        lg: {
            ...baseFontStyles,
            fontSize: getFontSize(size),
        },
    };

    return sizeStyles[size];
};

export const getSelectPadding = (size) => {
    const paddingStyles = {
        sm: {
            padding: `${spacing.xxsm} ${spacing.xsm}`,
        },
        md: {
            padding: `${spacing.xsm} ${spacing.xsm}`,
        },
        lg: {
            padding: `${spacing.sm} ${spacing.sm}`,
        },
    };

    return paddingStyles[size];
};

export const getSearchPadding = (size) => {
    const paddingStyles = {
        sm: {
            padding: `${spacing.xxsm} ${spacing.xsm}`,
        },
        md: {
            padding: `${spacing.xsm} ${spacing.xsm}`,
        },
        lg: {
            padding: `${spacing.xsm} ${spacing.xsm}`,
        },
    };

    return paddingStyles[size];
};

export const getMinHeight = (size) => {
    const minHeightStyles = {
        sm: {
            minHeight: '32px',
        },
        md: {
            minHeight: '42px',
        },
        lg: {
            minHeight: '42px',
        },
    };

    return minHeightStyles[size];
};

export const getSelectStyle = (props: SelectStyleProps) => {
    const { isDisabled, isReadOnly, fontSize, isOpen } = props;

    const baseStyle = {
        borderRadius: radius.md,
        border: `1px solid ${isDisabled ? colors.gray[1800] : colors.gray[100]}`,
        fontFamily: typography.fonts.body,
        color: isDisabled ? colors.gray[300] : colors.gray[600],
        cursor: isDisabled || isReadOnly ? 'not-allowed' : 'pointer',
        backgroundColor: isDisabled ? colors.secondary[50] : 'initial',
        boxShadow: '0px 1px 2px 0px rgba(33, 23, 95, 0.07)',
        textWrap: 'nowrap',

        '&::placeholder': {
            color: colors.gray[1900],
        },

        // Open Styles
        ...(isOpen
            ? {
                borderColor: colors.gray[1800],
                outline: `1px solid ${colors.primary[30]}`,
            }
            : {}),

        // Hover Styles
        ...(isDisabled || isReadOnly || isOpen
            ? {}
            : {
                '&:hover': {
                    boxShadow: '0px 1px 2px 1px rgba(33, 23, 95, 0.07)',
                },
            }),
    };

    const fontStyles = getSelectFontStyles(fontSize);
    const paddingStyles = getSelectPadding(fontSize);
    const minHeightStyles = getMinHeight(fontSize);

    return {
        ...baseStyle,
        ...fontStyles,
        ...paddingStyles,
        ...minHeightStyles,
    };
};
