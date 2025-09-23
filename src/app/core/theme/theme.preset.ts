import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const MyPreset = definePreset(Aura, {
    semantic: {
      primary: {
        50: '#FAF6FE',   // Violeta muy claro
        100: '#F4E9FE',  // Violeta claro
        200: '#EBD8FC',  // Violeta medio claro
        300: '#DBB8FA',  // Violeta medio
        400: '#C58BF5',  // Violeta medio oscuro
        500: '#65268E',  // Violeta principal
        600: '#993EDF',  // Violeta oscuro
        700: '#842CC4',  // Violeta más oscuro
        800: '#6F29A0',  // Violeta muy oscuro
        900: '#65268E',  // Violeta profundo
        950: '#3E0D5E'   // Violeta casi negro
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