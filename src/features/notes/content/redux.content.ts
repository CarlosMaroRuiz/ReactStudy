export const ReduxContent = `

# ¿Qué es Redux?
Redux es una biblioteca para la **gestión de estado global** en aplicaciones JavaScript.
Permite centralizar el estado y controlar cómo cambia de forma predecible.

---

## Instalación
\`\`\`bash
npm install @reduxjs/toolkit react-redux
\`\`\`

---

## Conceptos clave

### Store
Es el contenedor del **estado global** de la aplicación.
Solo existe **un store** por aplicación.

### State
Es un objeto JavaScript que representa los datos actuales de la app.
El estado es **inmutable**.

### Action
Es un objeto que describe **qué ocurrió**.
Siempre tiene una propiedad \`type\` y opcionalmente \`payload\`.

### Dispatch
Es la función que **envía una acción** al store.

### Reducer
Es una función pura que:
- Recibe el estado actual
- Recibe una acción
- Devuelve un nuevo estado

### Slice
Un slice agrupa:
- Estado inicial
- Reducers
- Actions

Es la forma recomendada de trabajar con Redux Toolkit.

---

## Flujo de datos en Redux
\`\`\`
UI → dispatch(action) → reducer → store → UI
\`\`\`

---

## Ejemplo básico de Redux

### Crear un slice
\`\`\`ts
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    }
  }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer
\`\`\`

---

### Crear el store
\`\`\`ts
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
})
\`\`\`

---

## Usar Redux en un componente React

### Leer el estado
\`\`\`tsx
import { useSelector } from 'react-redux'

const value = useSelector(state => state.counter.value)
\`\`\`

### Enviar acciones
\`\`\`tsx
import { useDispatch } from 'react-redux'
import { increment } from './counterSlice'

const dispatch = useDispatch()
dispatch(increment())
\`\`\`

---

## Cuándo usar Redux
- Cuando varios componentes comparten estado
- Cuando el estado es complejo
- Cuando necesitas control y escalabilidad

Redux no es necesario para estados locales simples.
`
