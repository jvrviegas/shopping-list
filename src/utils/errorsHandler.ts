export const errorsHandler = (err: any) => {
  if (err?.response?.data?.message) {
    const errorMessage = err?.response?.data?.message;
    window.alert(errorMessage);
    return;
  }

  if (err.message) {
    console.error(err.message);
    return;
  }

  console.error(
    'Erro ao executar a ação, entre em contato com o suporte ou tente novamente',
  );
};
