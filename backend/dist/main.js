"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('PORT') || 3000;
    const host = configService.get('HOST_NAME') || 'localhost';
    app.useGlobalPipes(new common_1.ValidationPipe());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Zyne POS API')
        .setDescription('**Zyne POS** is a high-performance Point of Sale (POS) application designed for retail and service environments. It features a modern, responsive user interface and a robust backend to handle core functionalities like sales, user management, and inventory.')
        .setVersion('1.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(port, host, () => {
        common_1.Logger.log('************************************************************', 'Bootstrap');
        common_1.Logger.log('*           Database connected successfully            *', 'Bootstrap');
        common_1.Logger.log(`*  Application is running on: http://${host}:${port}     *`, 'Bootstrap');
        common_1.Logger.log(`*  API docs available at: http://${host}:${port}/api   *`, 'Bootstrap');
        common_1.Logger.log('************************************************************', 'Bootstrap');
    });
}
bootstrap().catch((err) => console.error(err));
//# sourceMappingURL=main.js.map