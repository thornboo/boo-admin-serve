import { App } from 'vue'
import { I18n, I18nOptions } from 'vue-i18n'

import { createI18n } from 'vue-i18n'
import { setHtmlPageLang, setLoadLocalePool } from './helper'
import { localeSetting } from '/@/settings/localeSetting'
import { useLocaleStoreWithOut } from '/@/store/modules/locale'

const { fallback, availableLocales } = localeSetting

export let i18n: ReturnType<typeof createI18n>
