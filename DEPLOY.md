# Guía de Despliegue a Vercel a través de GitHub

## Pasos para subir tu proyecto a Vercel

### Paso 1: Crear un repositorio en GitHub

1. Ve a [GitHub](https://github.com) e inicia sesión
2. Haz clic en el botón "+" en la esquina superior derecha y selecciona "New repository"
3. Nombre del repositorio: `the-voyage-cafe` (o el nombre que prefieras)
4. Descripción opcional: "The Voyage Cafe - Aplicación web"
5. **NO** marques "Initialize this repository with a README" (ya tenemos uno)
6. Haz clic en "Create repository"

### Paso 2: Conectar tu repositorio local con GitHub

Ejecuta estos comandos en tu terminal (reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub):

```bash
cd "/Users/pedro/Downloads/The Voyage Cafe"

# Agregar el repositorio remoto (reemplaza TU_USUARIO con tu usuario)
git remote add origin https://github.com/TU_USUARIO/the-voyage-cafe.git

# Cambiar a la rama main (si es necesario)
git branch -M main

# Subir el código a GitHub
git push -u origin main
```

**Nota:** Si GitHub te pide autenticación, puedes usar:
- Un Personal Access Token (recomendado)
- O GitHub CLI (`gh auth login`)

### Paso 3: Conectar con Vercel

1. Ve a [Vercel](https://vercel.com) e inicia sesión (puedes usar tu cuenta de GitHub)
2. Haz clic en "Add New..." → "Project"
3. Importa tu repositorio de GitHub seleccionando `the-voyage-cafe`
4. Vercel detectará automáticamente que es un proyecto Vite:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build` (ya configurado)
   - **Output Directory:** `dist` (ya configurado)
   - **Install Command:** `npm install` (ya configurado)
5. Haz clic en "Deploy"

### Paso 4: Configuración adicional (opcional)

Si necesitas variables de entorno:
1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega las variables necesarias

### Paso 5: Despliegues automáticos

Una vez configurado:
- Cada push a la rama `main` desplegará automáticamente
- Vercel creará una URL única para cada despliegue
- Puedes configurar un dominio personalizado en Settings → Domains

## Comandos útiles

```bash
# Ver el estado de Git
git status

# Agregar cambios
git add .

# Hacer commit
git commit -m "Descripción de los cambios"

# Subir cambios a GitHub
git push

# Ver los remotos configurados
git remote -v
```

## Solución de problemas

### Si tienes problemas con la autenticación de GitHub:
```bash
# Usar GitHub CLI
gh auth login

# O configurar un Personal Access Token
# Ve a GitHub → Settings → Developer settings → Personal access tokens
```

### Si Vercel no detecta el proyecto correctamente:
El archivo `vercel.json` ya está configurado con:
- Build Command: `npm run build`
- Output Directory: `dist`
- Framework: `vite`

¡Tu proyecto debería desplegarse sin problemas!

