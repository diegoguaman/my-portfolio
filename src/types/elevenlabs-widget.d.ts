// Tipado mínimo y estricto para el custom element del widget
declare namespace JSX {
  interface IntrinsicElements {
    'elevenlabs-convai': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      'agent-id'?: string;                  // requerido si no usas signed-url
      'signed-url'?: string;                // alternativa si proteges el agente
      'server-location'?: 'us' | 'eu-residency' | 'in-residency' | 'global';
      'variant'?: 'expanded' | 'floating';
      // Visual
      'avatar-image-url'?: string;
      'avatar-orb-color-1'?: string;
      'avatar-orb-color-2'?: string;
      // Textos
      'action-text'?: string;
      'start-call-text'?: string;
      'end-call-text'?: string;
      'expand-text'?: string;
      'listening-text'?: string;
      'speaking-text'?: string;
      // Overrides de runtime
      'override-language'?: string;
      'override-prompt'?: string;
      'override-first-message'?: string;
      'override-voice-id'?: string;
      // Variables dinámicas
      'dynamic-variables'?: string; // JSON.stringify({...})
    };
  }
}
