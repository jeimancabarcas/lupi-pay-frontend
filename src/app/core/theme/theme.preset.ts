import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const MyPreset = definePreset(Aura, {
    semantic: {
        // primary: {
        //     50: '#F0F7FF',
        //     100: '#E0EFFF',
        //     200: '#C2DFFF',
        //     300: '#A3CFFF',
        //     400: '#004D93',
        //     500: '#003D75',
        //     600: '#002E57',
        //     700: '#001E39',
        //     800: '#000F1C',
        //     900: '#00070E',
        //     950: '#000407'
        // },
        primary: {
            50: '#FEF2F2',
            100: '#FEE2E2',
            200: '#FECACA',
            300: '#FCA5A5',
            400: '#F87171',
            500: '#b10c0c',
            600: '#DC2626',
            700: '#B91C1C',
            800: '#991B1B',
            900: '#7F1D1D',
            950: '#450A0A'
        },
    },
    components: {
        floatlabel: {
            root: {
                fontWeight: "400"
            }
        }
    }
});