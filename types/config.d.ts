import {MenuTypeEnum, MenuModeEnum, TriggerEnum, MixSidebarTriggerEnum} from '/@/enums/menuEnum';
import {
    ContentEnum,
    PermissionModeEnum,
    ThemeEnum,
    RouterTransitionEnum,
    SettingButtonPositionEnum,
    SessionTimeoutProcessingEnum,
} from '/@/enums/appEnum';

import {CacheTypeEnum} from '/@/enums/cacheEnum';

export type LocaleType = 'zh_CN' | 'en' | 'ru' | 'ja' | 'ko';

export interface MenuSetting {
    bgColor: string;
    fixed: boolean;
    collapsed: boolean;
    canDrag: boolean;
    show: boolean;
    hidden: boolean;
    split: boolean;
    menuWidth: number;
    mode: MenuModeEnum;
    type: MenuTypeEnum;
    theme: ThemeEnum;
    topMenuAlign: 'start' | 'center' | 'end';
    trigger: TriggerEnum;
    accordion: boolean;
    closeMixSidebarOnChange: boolean;
    collapsedShowTitle: boolean;
    mixSideTrigger: MixSidebarTriggerEnum;
    mixSideFixed: boolean;
}

export interface MultiTabsSetting {
    cache: boolean;
    show: boolean;
    showQuick: boolean;
    canDrag: boolean;
    showRedo: boolean;
    showFold: boolean;
}

export interface HeaderSetting {
    bgColor: string;
    fixed: boolean;
    show: boolean;
    theme: ThemeEnum;
    // 是否全屏
    showFullScreen: boolean;
    // 是否显示锁屏
    useLockPage: boolean;
    // 是否显示文件按钮
    showDoc: boolean;
    // 是否显示消息中心按钮
    showNotice: boolean;
    showSearch: boolean;
}

export interface LocaleSetting {
    showPicker: boolean;
    // 当前语言
    locale: LocaleType;
    // 默认语言
    fallback: LocaleType;
    // available Locales
    availableLocales: LocaleType[];
}

export interface TransitionSetting {
    // 是否打开切换页面动画
    enable: boolean;
    // Route basic switching animation
    basicTransition: RouterTransitionEnum;
    // Whether to open page switching loading
    openPageLoading: boolean;
    // Whether to open the top progress bar
    openNProgress: boolean;
}

export interface ProjectConfig {
    // Storage location of permission related information
    permissionCacheType: CacheTypeEnum;
    // Whether to show the configuration button
    showSettingButton: boolean;
    // Whether to show the theme switch button
    showDarkModeToggle: boolean;
    // Configure where the button is displayed
    settingButtonPosition: SettingButtonPositionEnum;
    // Permission mode
    permissionMode: PermissionModeEnum;
    // Session timeout processing
    sessionTimeoutProcessing: SessionTimeoutProcessingEnum;
    // Website gray mode, open for possible mourning dates
    grayMode: boolean;
    // Whether to turn on the color weak mode
    colorWeak: boolean;
    // Theme color
    themeColor: string;

    // 主界面全屏显示，菜单不显示，上方显示
    fullContent: boolean;
    // content width
    contentMode: ContentEnum;
    // Whether to display the logo
    showLogo: boolean;
    // Whether to show the global footer
    showFooter: boolean;
    // menuType: MenuTypeEnum;
    headerSetting: HeaderSetting;
    // menuSetting
    menuSetting: MenuSetting;
    // Multi-tab settings
    multiTabsSetting: MultiTabsSetting;
    // Animation configuration
    transitionSetting: TransitionSetting;
    // pageLayout是否启用保持激活
    openKeepAlive: boolean;
    // Lock screen time
    lockTime: number;
    // Show breadcrumbs
    showBreadCrumb: boolean;
    // Show breadcrumb icon
    showBreadCrumbIcon: boolean;
    // Use error-handler-plugin
    useErrorHandle: boolean;
    // Whether to open back to top
    useOpenBackTop: boolean;
    // Is it possible to embed iframe pages
    canEmbedIFramePage: boolean;
    // 切换接口时是否删除未关闭消息和通知
    closeMessageOnSwitch: boolean;
    // 切换接口时，是否取消已经发送但没有响应的http请求
    removeAllHttpPending: boolean;
}

export interface GlobConfig {
    // Site title
    title: string;
    // Service interface url
    apiUrl: string;
    // Upload url
    uploadUrl?: string;
    //  Service interface url prefix
    urlPrefix?: string;
    // Project abbreviation
    shortName: string;
}

export interface GlobEnvConfig {
    // Site title
    VITE_GLOB_APP_TITLE: string;
    // Service interface url
    VITE_GLOB_API_URL: string;
    // Service interface url prefix
    VITE_GLOB_API_URL_PREFIX?: string;
    // Project abbreviation
    VITE_GLOB_APP_SHORT_NAME: string;
    // Upload url
    VITE_GLOB_UPLOAD_URL?: string;
}
