import React from 'react';
import PropTypes from 'prop-types';
import Section from '../../../components/Section';

const propTypes = {
    icon: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

function WalletSection(props) {
    const {icon, children, subtitle, title} = props;
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

WalletSection.propTypes = propTypes;

export default WalletSection;
