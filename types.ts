export enum localeCodes {
  en = 'en-US',
  es = 'es-ES',
}

export type Locale = {
  code: string
  iso: string
  name: string
  file: string
}

export enum ButtonType {
  primary = 'primary',
  secondary = 'secondary',
  disabled = 'disabled',
}

export interface LanguageDictionary {
  [localeCodes.en]: Locale
  [localeCodes.es]: Locale
}
