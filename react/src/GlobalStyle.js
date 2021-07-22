import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`;

:root {
    --ds-color-dark-gray: #002138;
    --ds-color-gray-dary: #1c1c1c;
    --ds-color-gray-light: #eee;
    --ds-color-gray-medium: #353535;
    --ds-color-green: #006b40;
    --ds-color-light-blue: #e9f8ff;
    --ds-color-med-gray: #364141;
    --ds-color-red: #c63434;
    --ds-color-white: #fff;
    --ds-color-yellow: #ffbc00;
    --ds-font-lg: 1.5rem;
    --ds-font-md: 1.2rem;
    --ds-font-sm: 1rem;
    --ds-font-xl: 2.5rem;
    --ds-max-width: 1280px;
  }

  * {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  .avatar {
    border-radius: 9999px;
    width: 3rem;
    height: 3rem;
  }

  .button {
    display: flex;
    align-items: center;
  }

  .card {
    border-radius: 0.5rem;
    overflow: hidden;
  }

  .label {
    /* @apply block text-sm font-medium text-blue-700; */
    margin-top: 0.25rem;
    display: block;
    font-size: 0.8125rem;
    font-weight: 600;
    white-space: nowrap;
}

.section {
    margin-top: 1.5rem;
    padding: 0 1.5rem;
}

.select {
  margin-top: 0.75rem;
  height: 2rem;
  width: 16.5rem;
  border-radius: 6px;
  border: 1px solid #b0b6b7;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
}
`;
