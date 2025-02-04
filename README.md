# Minga

Este es un proyecto basado en la plantilla de Next.js y NextUI v2, diseñado para crear aplicaciones web modernas y rápidas.

## Descripción

Minga es una aplicación web desarrollada con Next.js 14 y NextUI v2, utilizando Tailwind CSS para la personalización y estilización rápida de la interfaz de usuario. La aplicación está optimizada para ofrecer un rendimiento rápido y una experiencia de usuario fluida.

## Tecnologías Utilizadas

- **Next.js 14**: Un framework de React para el desarrollo web moderno.
- **NextUI v2**: Una biblioteca de componentes para React que permite crear interfaces de usuario modernas y estilizadas.
- **Tailwind CSS**: Un framework de CSS para crear diseños personalizados de manera rápida y eficiente.
- **Tailwind Variants**: Extensiones para Tailwind CSS para gestionar variantes de estilos.
- **TypeScript**: Un superconjunto tipado de JavaScript que mejora el desarrollo y la mantenibilidad del código.
- **Framer Motion**: Una librería para crear animaciones y gestos en React.
- **next-themes**: Una librería para gestionar temas en aplicaciones Next.js.

## Estructura del Proyecto

```text
/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   ├── pages/
│   │   └── index.tsx
│   ├── styles/
│   └── utils/
└── package.json
```

## Instalación

Para instalar y ejecutar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
   ```sh
   git clone https://github.com/Juanmorales1810/minga.git
   ```
2. Navega al directorio del proyecto:
   ```sh
   cd minga
   ```
3. Instala las dependencias:
   ```sh
   npm install
   ```

## Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala las dependencias                         |
| `npm run dev`             | Inicia el servidor de desarrollo en `localhost:3000` |
| `npm run build`           | Compila el sitio de producción                   |
| `npm run start`           | Inicia el servidor de producción                 |
| `npm run lint`            | Ejecuta el linter para comprobar errores en el código |

## Cómo Usar

### Usar la plantilla con create-next-app

Para crear un nuevo proyecto basado en esta plantilla usando `create-next-app`, ejecuta el siguiente comando:
```bash
npx create-next-app -e https://github.com/nextui-org/next-app-template
```

### Instalar dependencias

Puedes usar cualquiera de estos gestores de paquetes: `npm`, `yarn`, `pnpm`, `bun`. Ejemplo usando `npm`:
```bash
npm install
```

### Ejecutar el servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) con tu navegador para ver el resultado.

### Configuración opcional para pnpm

Si estás usando `pnpm`, necesitas agregar el siguiente código a tu archivo `.npmrc`:
```bash
public-hoist-pattern[]=*@nextui-org/*
```

Después de modificar el archivo `.npmrc`, necesitas ejecutar `pnpm install` nuevamente para asegurar que las dependencias se instalen correctamente.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](https://github.com/nextui-org/next-app-template/blob/main/LICENSE) para más detalles.

## Cómo Contribuir

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Enlace al Proyecto

- Repositorio en GitHub: [Minga](https://github.com/Juanmorales1810/minga)

