import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import IllustratedHeaderPageLayout from '../../../components/IllustratedHeaderPageLayout';
import themeColors from '../../../styles/themes/default';
import useLocalize from '../../../hooks/useLocalize';
import * as LottieAnimations from '../../../components/LottieAnimations';
import Button from '../../../components/Button';
import Navigation from '../../../libs/Navigation/Navigation';
import SCREENS from '../../../SCREENS';
import ROUTES from '../../../ROUTES';
import Icon from '../../../components/Icon';
import styles from '../../../styles/styles';
import * as Illustrations from '../../../components/Icon/Illustrations';
import variables from '../../../styles/variables';
import Text from '../../../components/Text';

const propTypes = {
    /** The function that is called when a menu item is pressed */
    onAddPaymentMethod: PropTypes.func.isRequired,
};

function WalletEmptyState({onAddPaymentMethod}) {
    const {translate} = useLocalize();
    return (
        <IllustratedHeaderPageLayout
            backgroundColor={themeColors.PAGE_BACKGROUND_COLORS[SCREENS.SETTINGS.WALLET]}
            illustration={LottieAnimations.FastMoney}
            onBackButtonPress={() => Navigation.goBack(ROUTES.SETTINGS)}
            title={translate('common.wallet')}
            footer={
                <Button
                    accessibilityLabel={translate('paymentMethodList.addPaymentMethod')}
                    success
                    text={translate('paymentMethodList.addPaymentMethod')}
                    onPress={onAddPaymentMethod}
                />
            }
        >
            <View style={[styles.flex1, styles.mh5]}>
                <Text style={[styles.textHeadline]}>{translate('walletPage.getPaidFaster')}</Text>
                <Text style={[styles.textNormal, styles.mt2]}>{translate('walletPage.addPaymentMethod')}</Text>
                <View style={[styles.flexRow, styles.alignItemsCenter, styles.mt5]}>
                    <Icon
                        src={Illustrations.MoneyIntoWallet}
                        height={variables.iconSizeSuperLarge}
                        width={variables.iconSizeSuperLarge}
                    />
                    <Text style={[styles.h3, styles.ml4, styles.flex1]}>{translate('walletPage.getPaidBackFaster')}</Text>
                </View>
                <View style={[styles.flexRow, styles.alignItemsCenter, styles.mt5]}>
                    <Icon
                        src={Illustrations.OpenSafe}
                        height={variables.iconSizeSuperLarge}
                        width={variables.iconSizeSuperLarge}
                    />
                    <Text style={[styles.h3, styles.ml4, styles.flex1]}>{translate('walletPage.secureAccessToYourMoney')}</Text>
                </View>
                <View style={[styles.flexRow, styles.alignItemsCenter, styles.mt5]}>
                    <Icon
                        src={Illustrations.HandEarth}
                        height={variables.iconSizeSuperLarge}
                        width={variables.iconSizeSuperLarge}
                    />
                    <Text style={[styles.h3, styles.ml4, styles.flex1]}>{translate('walletPage.receiveMoney')}</Text>
                </View>
            </View>
        </IllustratedHeaderPageLayout>
    );
}

WalletEmptyState.displayName = 'WalletEmptyState';
WalletEmptyState.propTypes = propTypes;

export default WalletEmptyState;
