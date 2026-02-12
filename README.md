# 🐷 Vaquitapp

Una plataforma de crowdfunding moderna construida con Next.js que permite a los usuarios pagar campañas de financiamiento colectivo a través de MercadoPago.

![Vaquitapp Banner](https://upload.wikimedia.org/wikipedia/commons/f/f4/Gaming_pc.jpg)

## 🌐 Demo en Vivo

Visita la aplicación en producción: [https://vaquitapp-v1.vercel.app/](https://vaquitapp-v1.vercel.app/)

## ✨ Características

- 💳 **Integración con MercadoPago** para procesamiento de pagos seguro
- 📊 **Seguimiento en tiempo real** del progreso de las campañas
- 🎯 **Metas de financiamiento** configurables
- 📱 **Diseño responsivo** que funciona en todos los dispositivos
- 🔒 **Gestión segura de transacciones** con PostgreSQL

## 🛠️ Tecnologías Utilizadas

### Frontend

- **Next.js 15** - Framework React para aplicaciones web
- **TypeScript** - Tipado estático para JavaScript
- **React** - Librería de interfaces de usuario

### Backend

- **Next.js API Routes** - Endpoints de API serverless
- **Sequelize** - ORM para bases de datos SQL
- **PostgreSQL** - Base de datos relacional

### Servicios Externos

- **MercadoPago SDK** - Procesamiento de pagos
- **Vercel** - Hosting y deployment

## 📋 Prerequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (v18 o superior)
- **pnpm** (o npm/yarn)
- **PostgreSQL** (v12 o superior)
- Una cuenta de **MercadoPago** con credenciales de API

## 🚀 Instalación

1. **Clona el repositorio**
```bash
git clone https://github.com/Puyol312/vaquitapp_v1.git
cd vaquitapp_v1
```

2. **Instala las dependencias**
```bash
pnpm install
```

3. **Configura las variables de entorno**

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Database
DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/vaquitapp

# MercadoPago
MP_TOKEN=tu_access_token_de_mercadopago

# Next.js
NODE_ENV=development
```

4. **Configura la base de datos**

Asegúrate de que PostgreSQL esté corriendo y ejecuta:

```bash
# La aplicación sincronizará automáticamente los modelos al iniciar
pnpm dev
```

5. **Inicia el servidor de desarrollo**
```bash
pnpm dev
```

Abre [http://localhost:4004](http://localhost:4004) en tu navegador.

## 📁 Estructura del Proyecto

```
vaquitapp_v1/
├── src/
│   ├── app/                 # App Router de Next.js
│   │   ├── api/            # API Routes
│   │   ├── donate/         # Página de donaciones
│   │   └── page.tsx        # Página principal
│   └── lib/                # Librerías y utilidades
│       ├── models/         # Modelos de Sequelize
│       ├── db.ts           # Configuración de base de datos
│       └── mercadopago.ts  # Integración con MercadoPago
├── .env.local             # Variables de entorno (no incluido)
├── next.config.js         # Configuración de Next.js
├── package.json           # Dependencias del proyecto
└── tsconfig.json          # Configuración de TypeScript
```

## 🔧 Configuración Adicional

### Obtener Credenciales de MercadoPago

1. Crea una cuenta en [MercadoPago](https://www.mercadopago.com.ar/)
2. Ve a [Tus integraciones](https://www.mercadopago.com.ar/developers/panel)
3. Crea una aplicación nueva
4. Copia tu **Access Token** de producción o prueba
5. Agrégalo a tu archivo `.env.local`

## 📜 Scripts Disponibles

```bash
# Desarrollo
pnpm dev          # Inicia el servidor de desarrollo

# Producción
pnpm build        # Construye la aplicación para producción
pnpm start        # Inicia el servidor de producción

# Utilidades
pnpm lint         # Ejecuta el linter
```
## 🎯 Uso

### Realizar una Donación

1. Visita una campaña activa
2. Haz clic en "Sumate a la causa"
3. Ingresa el monto a donar
4. Completa el pago a través de MercadoPago
5. Serás redirigido según el estado del pago (éxito/pendiente/fallo)

## 🔐 Seguridad

- ✅ Nunca expongas tu `MP_TOKEN` en el código del cliente
- ✅ Usa variables de entorno para datos sensibles
- ✅ Valida todas las transacciones en el servidor
- ✅ Implementa rate limiting en tus API routes
- ✅ Usa HTTPS en producción (automático con Vercel)

## 🐛 Solución de Problemas

### Error de conexión a la base de datos

Verifica que:
- PostgreSQL esté corriendo
- La `DATABASE_URL` sea correcta
- El usuario tenga permisos adecuados
- El puerto 5432 no esté bloqueado

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👤 Proyecto Base

**zapaiamarce**

- GitHub: [@zapaiamarce](https://github.com/zapaiamarce)
- Proyecto: [sd-l3-vaquitapp](https://github.com/apx-school/sd-l3-vaquitapp)