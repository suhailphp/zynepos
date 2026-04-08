"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('PORT') || 3000;
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(port, () => {
        common_1.Logger.log('Database connected successfully', 'Bootstrap');
        common_1.Logger.log(`Application is running on: \x1b[32mhttp://localhost:${port}\x1b[0m`, 'Bootstrap');
    });
}
bootstrap();
//# sourceMappingURL=main.js.map