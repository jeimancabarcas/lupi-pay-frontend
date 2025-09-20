import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const MyPreset = definePreset(Aura, {
    semantic: {
      primary: {
        50: '{blue.50}',
        100: '{blue.100}',
        200: '{blue.200}',
        300: '{blue.300}',
        400: '{blue.400}',
        500: '#0A1F44',  // Azul profundo
        600: '#09203D',
        700: '#071830',
        800: '#051023',
        900: '#030A17',
        950: '#01040B'
      },
      accent: {
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