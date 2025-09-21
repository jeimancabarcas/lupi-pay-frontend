import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const MyPreset = definePreset(Aura, {
    semantic: {
      primary: {
        50: '{green.50}',
        100: '{green.100}',
        200: '{green.200}',
        300: '{green.300}',
        400: '{green.400}',
        500: '#3FAE4D',  // Verde suave
        600: '#369745',
        700: '#2E803C',
        800: '#256933',
        900: '#1D5329',
        950: '#143D1F'
      },
      accent: {
        50: '#dbeafe',   // Azul muy claro
        100: '#bfdbfe',  // Azul claro
        200: '#93c5fd',  // Azul medio claro
        300: '#60a5fa',  // Azul medio
        400: '#3b82f6',  // Azul medio oscuro
        500: '#0A1F44',  // Azul profundo
        600: '#09203D',  // Azul más profundo
        700: '#071830',  // Azul oscuro
        800: '#051023',  // Azul muy oscuro
        900: '#030A17',  // Azul casi negro
        950: '#01040B'   // Azul negro
      },
      surface: {
        0: '#ffffff',
        50: '#f5f6fa',   // Gris claro (fondos)
        100: '#e9ecef',
        200: '#dee2e6',
        300: '#ced4da',
        400: '#adb5bd',
        500: '#6c757d',  // Gris texto secundario
        600: '#495057',
        700: '#343a40',
        800: '#212529',  // Texto principal
        900: '#121416',
        950: '#0a0b0c'
      }
    },
    components: {
        floatlabel: {
            root: {
                fontWeight: "400"
            }
        }
    }
});