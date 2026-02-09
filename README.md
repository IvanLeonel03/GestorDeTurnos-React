# Gestor de Turnos React

Una aplicación web construida con **React** para demostrar habilidades en desarrollo frontend, enfocada en la gestión de turnos y clientes.

## 🎯 Objetivo

Este proyecto fue creado para demostrar competencias técnicas en desarrollo React, incluyendo arquitectura de componentes, manejo de estados, consumo de APIs simuladas, y buenas prácticas de código.

## 🚀 Características

### Dashboard Principal
- **Estadísticas en tiempo real**: Total de turnos, turnos del día, clientes registrados e ingresos
- **Turnos recientes**: Vista tabular de los últimos 5 turnos

### Gestión de Turnos
- Lista completa de turnos con filtros avanzados
- Filtrado por: estado (confirmado, pendiente, cancelado), fecha y búsqueda
- Tarjetas visuales con información detallada de cada turno
- Eliminación de turnos con confirmación

### Gestión de Clientes
- Grid de tarjetas con información de clientes
- Búsqueda por nombre, email o teléfono
- Filtros avanzados: estado, ordenamiento por nombre/fecha
- Información de última visita

## 🛠️ Tecnologías

| Tecnología | Propósito |
|------------|-----------|
| **React 19** | Framework principal |
| **Vite** | Build tool y servidor de desarrollo |
| **Tailwind CSS v4** | Estilizado y diseño responsivo |
| **React Router DOM** | Navegación entre páginas |
| **Lucide React** | Iconos vectoriales |
| **Axios** | Cliente HTTP para APIs |
| **Context API** | Manejo global de estado |

## 📁 Estructura del Proyecto

```
turnos-dashboard/
├── src/
│   ├── components/
│   │   ├── common/          # Componentes reutilizables
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Select.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   └── ErrorMessage.jsx
│   │   ├── appointments/    # Componentes de turnos
│   │   │   ├── AppointmentCard.jsx
│   │   │   ├── AppointmentList.jsx
│   │   │   └── AppointmentFilters.jsx
│   │   ├── clients/         # Componentes de clientes
│   │   │   ├── ClientList.jsx
│   │   │   ├── ClientSearch.jsx
│   │   │   └── ClientFilters.jsx
│   │   └── layout/          # Componentes de layout
│   │       ├── Header.jsx
│   │       ├── Sidebar.jsx
│   │       └── Layout.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx    # Página principal
│   │   ├── Appointments.jsx # Gestión de turnos
│   │   └── Clients.jsx      # Gestión de clientes
│   ├── services/
│   │   ├── api.js           # Configuración de Axios
│   │   ├── appointmentService.js
│   │   └── clientService.js
│   ├── hooks/
│   │   └── useFetch.js      # Hook personalizado para fetch
│   ├── contexts/
│   │   └── AppContext.jsx   # Contexto global
│   ├── utils/
│   │   └── formatDate.js    # Utilidades de formato
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## 🎨 Componentes Reutilizables

### Button
```jsx
<Button variant="primary" size="medium" onClick={handleClick}>
  Texto del botón
</Button>
```

### Card
```jsx
<Card className="p-4" onClick={handleClick}>
  Contenido de la tarjeta
</Card>
```

### Input
```jsx
<Input
  type="text"
  placeholder="Buscar..."
  value={value}
  onChange={handleChange}
/>
```

### Select
```jsx
<Select
  label="Estado"
  value={value}
  onChange={handleChange}
  options={[
    { value: 'active', label: 'Activo' },
    { value: 'inactive', label: 'Inactivo' }
  ]}
/>
```

## 📦 Instalación

```bash
# Clonar o navegar al proyecto
cd turnos-dashboard

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build
```

## 🔧 Configuración

### Tailwind CSS v4
El proyecto usa Tailwind CSS v4 con configuración minimalista:
- No requiere `tailwind.config.js`
- Detecta automáticamente archivos JSX/TSX
- Usa `@import "tailwindcss"` en CSS

### Variables de Entorno
Crear `.env` en la raíz del proyecto:
```env
VITE_API_URL=https://api.ejemplo.com
```

## 📱 Páginas

### `/` - Dashboard
Muestra estadísticas generales y turnos recientes.

### `/appointments` - Turnos
- Lista de todos los turnos
- Filtros por estado y fecha
- Búsqueda por cliente o servicio

### `/clients` - Clientes
- Grid de tarjetas de clientes
- Búsqueda en tiempo real
- Filtros por estado y ordenamiento

## 🎯 Características Técnicas Demostradas

- ✅ **React Hooks**: useState, useEffect, useCallback, useContext
- ✅ **Componentes Funcionales**: Arquitectura moderna de React
- ✅ **PropTypes/TypeScript**: Validación de propiedades
- ✅ **Manejo de Errores**: Estados de error y retry
- ✅ **Loading States**: Indicadores de carga
- ✅ **Filtros y Búsqueda**: Lógica de filtrado en cliente
- ✅ **Responsive Design**: Tailwind CSS con clases utilitarias
- ✅ **Navegación**: React Router con rutas protegidas
- ✅ **Servicios API**: Separación de lógica de API
- ✅ **Hooks Personalizados**: useFetch genérico

## 🔄 Flujo de Datos

```
API → Services → Pages → Components
                ↓
            Context → Notifications
```

## 📝 Notas

Esta aplicación utiliza **datos simulados (mocks)** para demostrar el flujo de datos sin necesidad de un backend real.

La **arquitectura del proyecto** está diseñada para ser fácilmente extensible:
- Separación clara entre servicios, componentes y páginas
- Hooks reutilizables para lógica de negocio
- Contexto global para estado compartido

El código sigue **buenas prácticas de desarrollo**:
- Componentes funcionales con hooks
- Nombres descriptivos y consistentes
- Manejo de errores y estados de carga
- Estilizado con clases utilitarias (Tailwind)


## 📄 Licencia

Este proyecto es para propósitos educativos y de portafolio.

## 👤 Autor

Ivan Cañete
