# Sistema de Traducción - Dr. Dev Portfolio

## Descripción
Este proyecto incluye un sistema completo de traducción que permite cambiar entre inglés y español en tiempo real.

## Componentes

### 1. TranslationContext
- **Ubicación**: `src/context/TranslationContext.jsx`
- **Función**: Maneja el estado del idioma y las traducciones
- **Uso**: Proporciona el contexto de traducción a toda la aplicación

### 2. TranslationButton
- **Ubicación**: `src/components/TranslationButton.jsx`
- **Función**: Botón flotante para cambiar idioma
- **Características**:
  - Posición fija en la esquina superior derecha
  - Animaciones con Framer Motion
  - Muestra bandera del idioma actual

### 3. TranslatableText
- **Ubicación**: `src/components/TranslatableText.jsx`
- **Función**: Envuelve texto para traducción automática
- **Uso**: Envuelve cualquier texto que necesite traducción

## Cómo usar

### 1. Envolver texto con TranslatableText
```jsx
import TranslatableText from '../components/TranslatableText';

// Texto simple
<TranslatableText>
  "Welcome to Dr. Dev 👨‍⚖️"
</TranslatableText>

// Con clases CSS
<TranslatableText className="text-lg font-bold">
  "Welcome to Dr. Dev 👨‍⚖️"
</TranslatableText>
```

### 2. Agregar nuevas traducciones
Edita el archivo `src/context/TranslationContext.jsx`:

```jsx
const translations = {
  en: {
    "Tu texto en inglés": "Tu texto en inglés",
    // más traducciones...
  },
  es: {
    "Tu texto en inglés": "Tu texto en español",
    // más traducciones...
  }
};
```

### 3. Usar el hook useTranslation directamente
```jsx
import { useTranslation } from '../context/TranslationContext';

const MyComponent = () => {
  const { t, language, toggleLanguage } = useTranslation();
  
  return (
    <div>
      <p>{t("Texto a traducir")}</p>
      <button onClick={toggleLanguage}>
        Cambiar idioma
      </button>
    </div>
  );
};
```

## Características

- ✅ Cambio de idioma en tiempo real
- ✅ Botón flotante con animaciones
- ✅ Componente reutilizable para texto
- ✅ Contexto global para toda la aplicación
- ✅ Fácil agregar nuevas traducciones
- ✅ Fallback al texto original si no hay traducción

## Estructura de archivos

```
src/
├── context/
│   └── TranslationContext.jsx
├── components/
│   ├── TranslationButton.jsx
│   ├── TranslatableText.jsx
│   └── index.js
└── app/
    └── layout.jsx (incluye TranslationProvider)
```

## Notas importantes

1. El `TranslationProvider` debe envolver toda la aplicación en el layout raíz
2. El `TranslationButton` se incluye automáticamente en todas las páginas
3. Para agregar traducciones, edita el objeto `translations` en `TranslationContext.jsx`
4. El componente `TranslatableText` puede envolver cualquier elemento JSX
5. Si no existe una traducción, se muestra el texto original como fallback 