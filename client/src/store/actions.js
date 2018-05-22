/**
 * Las acciones son las encargadas de realizar las tareas asíncronas y llamar a las mutaciones que cambiarán el estado
 */
import authService from '../Services/auth.service';

const actions = {
  logIn: ({ commit }, token) => commit('logIn', token ),
};

export default actions;
