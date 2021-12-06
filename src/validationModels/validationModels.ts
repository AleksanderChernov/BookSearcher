import i18n from '../i18n';

export const searchInputRule = {
  validation: [{ required: true, message: i18n.t('validationErrors.inputMustBeFilled') }, { max: 35, message: i18n.t('validationErrors.inputLength') }],
};
