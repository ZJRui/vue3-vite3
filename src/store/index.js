import { createPinia } from 'pinia';
const store = createPinia();
export { store };

export * from './modules/menuAction';
export * from './modules/resTags'

export default store;