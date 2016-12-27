/**
 * - import browser dynamic which allows us to run in browser
 * - bootstrap the application
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';


const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
