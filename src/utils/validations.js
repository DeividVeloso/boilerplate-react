export const required = value => {
  return value
    ? undefined
    : 'Erro: Este campo possui preenchimento obrigatório.';
};
