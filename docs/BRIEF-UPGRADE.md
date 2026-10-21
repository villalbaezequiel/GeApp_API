# Brief: upgrade de stack GEAPP

Rama: `upgrade-deps` (base `master` @ `8104d1a`). Fecha: 2026-10-21.

## 1. Resumen
Se actualizaron backend y frontend a las ultimas versiones estables, se agrego Docker, un seed de datos demo y una coleccion Postman que sirve de documentacion y de suite de validacion.

Resultado verificado:
- Backend arranca y responde en Docker (MySQL 8) y en local.
- `npx newman run docs/geapp.postman_collection.json`: 23 requests, 30 assertions, 0 fallos (contra Docker con seed).
- Frontend compila (`ng build`, desarrollo y produccion) y el backend lo sirve desde `frontend/dist/frontend`.

No verificado:
- Queries contra la DB real (EC2): las credenciales de `config.json` fueron rechazadas desde esta maquina.
- UI en navegador (el cambio a Material MDC altera el aspecto visual).
- Modulo SCPL mas alla del listado (`GET /api/scpl/client`).
- `POST /api/user/reset-password`.

## 2. Versiones

### Backend
| Paquete | Antes | Despues |
|---|---|---|
| express | 4.17 | 5.x |
| sequelize | 5.18 | 6.37 |
| mysql2 | 1.7 | 3.x |
| express-jwt | 5.3 | 8.5 |
| jsonwebtoken | 8.5 | 9.x |
| passport | 0.4 | 0.7 |
| multer | 1.4 | 2.x |
| express-session, cors, morgan, errorhandler | previas | ultimas minor |
| dateformat | 3.0 | 4.6 (la 5.x es solo ESM) |
| nodemon (dev) | 1.19 | 3.x |

`method-override`, `methods`, `slug`, `underscore` no se usan en el codigo; se dejaron sin tocar.
Se agrego `engines.node >= 22` y los scripts `start` y `seed`.

### Frontend
| Paquete | Antes | Despues |
|---|---|---|
| Angular (core, cli, etc.) | 8.2 | 22.2 |
| Angular Material / CDK | 8.2 | 22.2 (componentes MDC) |
| TypeScript | 3.5 | 6.0 |
| RxJS | 6.4 | 7.8 |
| zone.js | 0.9 | 0.16 |
| @auth0/angular-jwt | 3.0 | 5.2 |
| Karma / Jasmine | 4.1 / 3.4 | 6.4 / jasmine-core 5 |
| Builder | `browser` (webpack) | `application` (esbuild) |

Eliminados: `protractor`, `tslint`, `codelyzer`, `ts-node`, `jwt-decode`, `hammerjs`, `@babel/compat-data`, `karma-coverage-istanbul-reporter`.

## 3. Cambios de codigo (backend)

### `server/routes/auth.js` (express-jwt 5 a 8)
- Import: `const { expressjwt: jwt } = require('express-jwt')`.
- `algorithms: ['HS256']` es obligatorio.
- `userProperty: 'payload'` pasa a `requestProperty: 'payload'` (los controllers siguen leyendo `req.payload`).
- `isRevoked` pasa de callback `(req, payload, done)` a async `(req, token)`: devuelve `false` si el usuario es valido y lanza el error (status 401, "Usuario inactivo.") si no existe o no esta aprobado. El payload esta en `token.payload`.

### `server/app.js` (Express 5)
- `app.get('*', ...)` pasa a `app.get('/{*splat}', ...)` (path-to-regexp 8).
- El resto no requirio cambios: no se usa `req.param()`, `res.json(status, obj)` ni asignacion a `req.query`.

### `server/config/config.json`
- Se quito `operatorsAliases: 0` (Sequelize 6 lo elimino).
- Nuevo bloque `docker` (host `db`, user/pass/db `geapp`, `filepath: /app/uploads`, `jwtsecret` de desarrollo).

### `server/models/index.js`
- Si `DB_SYNC=true` ejecuta `sequelize.sync()` al arrancar (crea tablas faltantes). Opt-in; usado por Docker.

### `server/seed.js` (nuevo)
Idempotente. Crea tablas, `DEFAULT_HELP_PHONE`, admin, 3 ciudadanos, eleccion activa con categoria y 2 partidos, 1 mesa con 3 votantes (el primero es owner).

### Sin cambios necesarios
- Modelos Sequelize (`Model.init`): API compatible con v6.
- `passport.authenticate('local', { session: false })`: compatible con 0.7.
- `multer` (`diskStorage`, `fileFilter`, `limits`), operadores `Sequelize.Op`, transacciones no gestionadas.

## 4. Cambios de codigo (frontend)

### Cadena de actualizacion
`ng update` version por version: 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22. Un commit por salto.

Incidentes:
- **Salto 12**: las migraciones de `@angular/core` fallaron (`ERR_PACKAGE_PATH_NOT_EXPORTED` en `@angular/compiler-cli/src/ngtsc/imports`) por una restriccion de `exports` en Node moderno. Se instalo Node 16 via nvm para los saltos 12 a 16. En el 12 las migraciones de core se omitieron (se aplicaron las de cli, material y cdk) y se corrigio a mano lo que rompio el build.
- **Salto 17**: Material 17 elimina los componentes legacy. Se corrio `ng generate @angular/material:mdc-migration` (con `--components` explicito) antes de actualizar Material.
- **TypeScript 6**: `strict` pasa a ser `true` por defecto; se fijo `"strict": false` para conservar el comportamiento previo.

### Ajustes manuales
- `tsconfig.json`: `strict: false`; se quitaron `baseUrl` y `downlevelIteration` (deprecados en TS 6); los imports `src/...` se resuelven con `paths: { "src/*": ["./src/*"] }`.
- `tsconfig.app.json` / `tsconfig.spec.json`: se quito `extendedDiagnostics` (incompatible con `strictTemplates: false`).
- `src/styles.scss`: se quitaron los includes `legacy-*` de Material.
- Se borraron imports sin uso: `format` de `url` (login) y `Capability` de `protractor` (employee.service).
- `angular.json`: builder `application`; `outputPath: { base: "dist/frontend", browser: "" }` para que `index.html` siga en `dist/frontend` (lo sirve el backend).
- `karma.conf.js`: reporter de cobertura pasa a `karma-coverage`.
- `jasmine-core` fijado en 5.x (la 7.x rompe el parche de zone.js: `Cannot assign to read only property 'describe'`).
- `frontend/dist` (versionado en git) fue regenerado: el diff es grande y esperado.

## 5. Docker
Archivos: `Dockerfile` (node:22-alpine, `npm ci --omit=dev`, copia `server` y `frontend/dist`), `docker-compose.yml` (mysql:8.4 con healthcheck TCP + app en puerto 3000), `.dockerignore`.

Uso:
```
docker compose up -d --build
docker compose exec app npm run seed
npx newman run docs/geapp.postman_collection.json
docker compose down -v      # reset total
```
Notas:
- El healthcheck de MySQL usa `127.0.0.1` (TCP). Con `localhost` MySQL respondia "healthy" durante su init temporal (sin red) y el primer `sync` de la app fallaba con `ECONNREFUSED`.
- Uploads en el volumen `uploads`; datos en `db_data`.

## 6. Postman: documentacion y validacion
La coleccion original (link getpostman) no alcanza como documentacion: mezcla hosts (`localhost`, `api.geapp.com.ar`, puertos 80/3000/3032), tiene requests deprecados, ids hardcodeados, sin descripciones, sin asserts, y faltaban `reset-password` y el modulo SCPL.

Se creo `docs/geapp.postman_collection.json`:
- Variable `{{baseUrl}}` unica.
- Descripcion, auth y errores esperados por request.
- Asserts de status; guarda `token` e ids en variables; incluye casos negativos (401, 403, 422).
- Orden pensado para correr completa; el ultimo paso cierra la mesa demo.
- `docs/sample-acta.png` es el archivo que usa el request de subida de acta.

## 7. Riesgos y pendientes
1. **Probar en la DB real** antes de produccion: Sequelize 5 a 6 y mysql2 1 a 3 pueden cambiar tipos devueltos (fechas, BOOLEAN/TINYINT, DECIMAL) y la zona horaria (`process.env.TZ = 'GMT-3'` en `app.js`).
2. **Revision visual** de la UI por el cambio a Material MDC (formularios, tablas, paginador, botones, dialogos).
3. **Specs**: 6 de 21 fallan en `ng test` (specs de scaffold sin importar modulos de Material). Pre-existente en esencia.
4. **Seguridad**: `config.json` versiona secretos y passwords de DB (incluidos los de produccion). Rotarlos y moverlos a variables de entorno. `npm audit` sigue marcando vulnerabilidades en dependencias transitivas.
5. **Bug previo**: `voting-table.controller.js` usa `req.body.notes | ''` (OR de bits); las notas del escrutinio nunca se guardan. Corregir a `||`.
6. **Bug previo**: `DELETE /api/user/:id` es un dummy y no requiere auth.
7. **Bug previo**: en `routes/auth.js`, `verifyApproved` no se usa y tiene un `throw` faltante.
8. **Deploy en EC2**: instalar Node >= 22 (el README viejo indica Node 12), reconstruir con `npm ci`, y actualizar el `pm2`. Angular 22 requiere Node >= 22.22 solo para compilar el frontend, no para ejecutar el backend.
9. **Migraciones**: solo existen para `users` y `friends`; el resto depende de `sequelize.sync()`. Conviene escribir migraciones reales antes de cambiar el esquema.
10. **Mejoras opcionales**: pasar a `mat.theme` (Material 3) para quitar el warning de `define-light-theme`; eliminar dependencias backend sin uso; leer secretos de `process.env`.

## 8. Commits
```
6645e94 chore(server): upgrade to Express 5, Sequelize 6, express-jwt 8, mysql2 3, passport 0.7
63535bc .. 86d7d6e  chore(frontend): ng update 9 .. 22 (+ migracion MDC en 29e7813)
1da9885 chore(frontend): fix build on Angular 22 / TS 6, drop dead deps
7dd4887 chore(frontend): application builder, rebuild dist, fix karma config
941e0b4 feat: docker, seed, postman collection as docs/validation, README update
```

## 9. Como volver atras
Todo el trabajo esta en la rama `upgrade-deps`; `master` no se toco. Para descartar: `git checkout master`. El `package-lock.json` anterior sigue en `master`.
