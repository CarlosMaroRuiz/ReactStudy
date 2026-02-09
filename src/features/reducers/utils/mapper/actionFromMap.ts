/**
 * ActionMap
 * ----------
 * Define la forma base de un mapa de acciones.
 *
 * Cada clave es el nombre de una action (`type`)
 * El valor indica qué payload necesita:
 *  - undefined → no hay payload
 *  - unknown   → hay payload (de cualquier tipo)
 */
export type ActionMap = Record<string, unknown | undefined>;

/**
 * ActionsFromMap
 * --------------
 * Toma un ActionMap y genera automáticamente
 * un union type de actions.
 *
 * - Si el valor es undefined → { type }
 * - Si tiene valor → { type, payload }
 */
export type ActionsFromMap<M extends ActionMap> = {
  [K in keyof M]:
    M[K] extends undefined
      ? { type: K }
      : { type: K; payload: M[K] };
}[keyof M];
