import type { CapacitorConfig } from '@capacitor/cli';





const config: CapacitorConfig = {
  
  appId: 'io.ionic.starter',
  appName: 'Desarrollando',
  webDir: 'www',
  plugins: {
    Keyboard: {
      resize: 'none'  // Esto es lo que evita que se suba el contenedor
    }
  }
  
};

export default config;
