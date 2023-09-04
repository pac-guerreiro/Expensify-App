import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../../components/Section';

const propTypes = {
    icon: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

function WalletSection({icon, children, subtitle, title}) {
    return (
        <Section
            icon={icon}
            subtitle={subtitle}
            title={title}
        >
            {children}
        </Section>
    );
}

WalletSection.displayName = 'WalletSection';
WalletSection.propTypes = propTypes;

export default WalletSection;
