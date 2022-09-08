let nacionalidade = prompt(
  'digite aqui a nacionalidade:\n - brasileira\n - argentina\n - uruguaia\n - chilena\n - colombiana'
).toLowerCase();

switch (nacionalidade) {
  case 'brasileira':
    alert('a pessoa é do Brasil!');
    break;
  case 'argentina':
    alert('a pessoa é da Argentina!');
    break;
  case 'uruguaia':
    alert('a pessoa é do Uruguai!');
    break;
  case 'chilena':
    alert('a pessoa é do Chile!');
    break;
  case 'colombiana':
    alert('a pessoa é da Colômbia!');
    break;
  default:
    alert('nacionalidade não encontrada');
    break;
}
