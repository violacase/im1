import type { MessageSchema } from '../i18n'

declare module 'vue-i18n' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefineLocaleMessage extends MessageSchema {}
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefineDateTimeFormat {}
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefineNumberFormat {}
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $t: (key: string) => string
  }
}
declare module 'vue' {
  export interface ComponentCustomProperties {
    $t: (key: string) => string
  }
}
