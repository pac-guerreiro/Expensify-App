import type Form from './Form';
import ADDRESS_INPUT_IDS from './HomeAddressForm';

const INPUT_IDS = {
    ...ADDRESS_INPUT_IDS,
    LEGAL_FIRST_NAME: 'legalFirstName',
    LEGAL_LAST_NAME: 'legalLastName',
    PHONE_NUMBER: 'phoneNumber',
} as const;

type GetPhysicalCardForm = Form<{
    [INPUT_IDS.ADDRESS_LINE_1]?: string;
    [INPUT_IDS.ADDRESS_LINE_2]?: string;
    [INPUT_IDS.COUNTRY]?: string;
    [INPUT_IDS.STATE]?: string;
    [INPUT_IDS.CITY]?: string;
    [INPUT_IDS.ZIP_POST_CODE]?: string;
    [INPUT_IDS.LEGAL_FIRST_NAME]?: string;
    [INPUT_IDS.LEGAL_LAST_NAME]?: string;
    [INPUT_IDS.PHONE_NUMBER]?: string;
}>;

export type {GetPhysicalCardForm};
export default INPUT_IDS;
