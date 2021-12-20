import { Theme } from '@material-ui/core/styles';

declare module '@material-ui/styles' {
    interface DefaultTheme extends Theme { }
}

declare global {
    interface Window { dataLayer: any[]; }
}