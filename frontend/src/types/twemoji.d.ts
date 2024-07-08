declare module 'twemoji' {
    export function parse(
      text: string,
      options?: {
        base?: string;
        ext?: string;
        size?: string | number;
        folder?: string;
        className?: string;
        attributes?: (icon: string, variant: string) => {};
        callback?: (icon: string, options: any) => string;
      }
    ): string;
  }